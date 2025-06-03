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
                        users_shows: true,
                        users_episodes: true
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

    // Calcul du temps passé en utilisant une durée moyenne de 40 minutes par épisode
    const averageEpisodeDurationMinutes = 40;
    const totalWatchedEpisodes = userData?.users_episodes.length;
    let totalTimeSpentMinutes = 0;
    if (totalWatchedEpisodes) {
        totalTimeSpentMinutes = totalWatchedEpisodes * averageEpisodeDurationMinutes;
    }

    const hours = Math.floor(totalTimeSpentMinutes / 60);
    const minutes = totalTimeSpentMinutes % 60;
    const timeSpentString = `${hours}H\n${minutes}M`;

    const totalEpisodesToWatch = await prisma.seasons.count({
        where: {
            shows: {
                users_shows: {
                    every: {
                        user: {
                            id: user.id,
                        },
                    },
                },
            },
        },
    });

    let timeAvailable = 0;
    if (userData?.users_episodes) {
        timeAvailable = totalEpisodesToWatch * averageEpisodeDurationMinutes;

    }

    const timeTowatch = `${Math.floor(timeAvailable / 60)}H\n${timeAvailable % 60}M`;

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
    const totalCatalogueShows = await prisma.shows.count();
    const totalUserListShows = userData.users_shows.length;

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
            totalCatalogueShows={totalCatalogueShows}
            totalUserListShows={totalUserListShows}
            timeSpent={timeSpentString}
            timeTowatch={timeTowatch}
        />
    );
}