import prisma from "@/lib/prisma";
import DashboardClient from "./DashboardClient";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth-session";

export default async function Dashboard() {
    const user = await getUser();

    if (!user) {
        redirect('/auth/signin');
    }

    // Requête unique pour récupérer toutes les données nécessaires
    const [userData, stats] = await Promise.all([
        prisma.user.findUnique({
            where: {
                id: user.id
            },
            select: {
                id: true,
                ShowComments: {
                    select: {
                        content: true,
                        postedAt: true,
                        user: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                users_shows: {
                    select: {
                        id_user: true,
                        id_show: true,
                        is_favorite: true,
                        is_archived: true,
                        status: true,
                        added_at: true,
                        shows: {
                            select: {
                                show_id: true,
                                title: true,
                                image: true,
                                summary: true
                            }
                        }
                    },
                    orderBy: {
                        added_at: "desc"
                    }
                },
                users_episodes: {
                    select: {
                        episode: {
                            select: {
                                season_id: true,
                            }
                        }
                    },
                    orderBy: {
                        watched_at: "desc"
                    }
                },
                _count: {
                    select: {
                        users_shows: true
                    }
                }
            }
        }),
        prisma.$transaction([
            prisma.showComments.count({
                where: { id_user: user.id }
            }),
            prisma.episodesComments.count({
                where: { id_user: user.id }
            }),
            prisma.userShows.count({
                where: {
                    id_user: user.id,
                    is_archived: true
                }
            })
        ])
    ]);

    const countShowsOngoing = await prisma.userShows.count({
        where: {
            id_user: user.id,
            status: "ongoing"
        }
    })

    const countShowsFinished = await prisma.userShows.count({
        where: {
            id_user: user.id,
            status: "finished"
        }
    })

    let lastEpisodeWatched = null;
    if (userData?.users_episodes && userData.users_episodes.length > 0) {
        lastEpisodeWatched = await prisma.seasons.findUnique({
            where: {
                season_id: userData.users_episodes[0].episode.season_id
            },
            select: {
                shows: {
                    select: {
                        title: true
                    }
                }
            }
        });
    }

    if (!userData) {
        redirect('/auth/signin');
    }

    // Extraction des séries récentes et favoris à partir des données déjà récupérées
    const fiveShows = userData.users_shows
        .slice(0, 5)
        .map(item => item.shows);

    const fourFavorites = userData.users_shows
        .filter(item => item.is_favorite)
        .slice(0, 4)
        .map(item => item.shows);

    const [showComments, episodeComments, archivedShowsCount] = stats;
    const countComments = showComments + episodeComments;

    return (
        <DashboardClient
            userData={{
                ...userData,
                archivedShowsCount,
                countComments,
            }}
            fiveShows={fiveShows}
            fourFavorites={fourFavorites}
            lastEpisodeWatched={lastEpisodeWatched}
            countShowsFinished={countShowsFinished}
            countShowsOngoing={countShowsOngoing}
        />
    );
}