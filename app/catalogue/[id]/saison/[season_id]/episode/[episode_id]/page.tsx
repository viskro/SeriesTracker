import { Suspense } from "react";
import prisma from "@/shared/lib/prisma";
import { notFound } from "next/navigation";
import { cleanText } from "@/shared/utils/utils";
import { getUser } from "@/shared/lib/auth-session";
import EpisodeClient from "@features/episodePage/components/EpisodeClient";
import { Episode } from "@/features/episodePage/types";
import EpisodeDetailsSkeleton from "./loading";

// Composant pour les détails de l'épisode
async function EpisodeDetails({ episodeId, userId }: { episodeId: number, userId?: string }) {
    const episode = await prisma.episodes.findUnique({
        where: {
            episode_id: episodeId,
        },
        include: {
            seasons: {
                select: {
                    season_id: true,
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
                    id_user: userId,
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
    const synopsis = cleanText(episode.summary);

    return (
        <EpisodeClient
            episode={episode as Episode}
            show={episode.seasons.shows}
            isWatched={isWatched}
            comments={comments}
            userId={userId}
            synopsis={synopsis}
        />
    );
}

export default async function Page({ params }: {
    params: Promise<{ id: string; season_id: string; episode_id: string }>;
}) {
    const user = await getUser();
    const { id, season_id, episode_id } = await params;

    const episodeId = parseInt(episode_id);
    const seasonId = parseInt(season_id);
    const showId = parseInt(id);

    if (isNaN(showId) || isNaN(seasonId) || isNaN(episodeId)) {
        notFound();
    }

    return (
        <Suspense fallback={<EpisodeDetailsSkeleton />}>
            <EpisodeDetails episodeId={episodeId} userId={user?.id} />
        </Suspense>
    );
}