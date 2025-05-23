import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import EpisodeClient from "./EpisodeClient";
import { trad } from "@/lib/utils";
import { getUser } from "@/lib/auth-session";

interface PageProps {
    params: {
        id: string;
        season_id: string;
        episode_id: string;
    };
}

export default async function Page({ params }: PageProps) {
    const user = await getUser();
    const showId = parseInt(params.id);
    const seasonId = parseInt(params.season_id);
    const episodeId = parseInt(params.episode_id);

    if (isNaN(showId) || isNaN(seasonId) || isNaN(episodeId)) {
        notFound();
    }

    const episode = await prisma.episodes.findUnique({
        where: {
            episode_id: episodeId,
        },
        include: {
            seasons: {
                include: {
                    shows: {
                        select: {
                            show_id: true,
                            title: true,
                            image: true,
                        }
                    }
                }
            },
            users: {
                where: {
                    id_user: user?.id
                }
            }
        },
    });

    if (!episode) {
        notFound();
    }

    const comments = await prisma.episodesComments.findMany({
        where: {
            id_episode: episodeId,
        },
        include: {
            user: {
                select: {
                    name: true,
                }
            }
        },
        orderBy: {
            postedAt: 'desc',
        },
    });

    const isWatched = episode.users.length > 0;
    const synopsis = await trad(episode.summary)

    return (
        <EpisodeClient
            episode={episode}
            show={episode.seasons.shows}
            isWatched={isWatched}
            comments={comments}
            userId={user?.id}
            synopsis={synopsis}
        />
    );
} 