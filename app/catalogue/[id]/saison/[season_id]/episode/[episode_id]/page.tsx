import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { trad } from "@/lib/utils";
import { getUser } from "@/lib/auth-session";
import EpisodeClient from "./EpisodeClient";
import { Episode } from "@/features/episodePage/types";

export default async function Page({ params }: {
    params: Promise<{ id: string; season_id: string; episode_id: string }>;
}) {
    const user = await getUser();
    const { id } = await params;
    const { season_id } = await params;
    const { episode_id } = await params;

    const episodeId = parseInt(episode_id);
    const seasonId = parseInt(season_id);
    const showId = parseInt(id);

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
                        },
                    },
                },
            },
            users: {
                where: {
                    id_user: user?.id,
                },
            },
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
                },
            },
        },
        orderBy: {
            postedAt: "desc",
        },
    });

    const isWatched = episode.users.length > 0;
    const synopsis = await trad(episode.summary);

    return (
        <EpisodeClient
            episode={episode as Episode}
            show={episode.seasons.shows}
            isWatched={isWatched}
            comments={comments}
            userId={user?.id}
            synopsis={synopsis}
        />
    );
}