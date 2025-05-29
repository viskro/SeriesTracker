import prisma from "@/lib/prisma";
import ListeClient from "./ListeClient";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth-session";

export default async function Liste() {
    const user = await getUser();

    if (!user) {
        redirect('/auth/signin');
    }

    const userShows = await prisma.userShows.findMany({
        where: {
            id_user: user.id,
            is_archived: false
        },
        select: {
            id_user: true,
            id_show: true,
            is_favorite: true,
            status: true,
            added_at: true,
            shows: {
                select: {
                    show_id: true,
                    title: true,
                    image: true,
                    summary: true,
                    seasons: {
                        select: {
                            season_id: true,
                            episodes: {
                                select: {
                                    episode_id: true,
                                    episode_number: true,
                                    season_number: true
                                }
                            }
                        }
                    }
                }
            }
        },
        orderBy: {
            added_at: "desc"
        }
    });

    // Récupérer le dernier épisode regardé pour chaque série
    const lastWatchedEpisodes = await Promise.all(
        userShows.map(async (show) => {
            const lastEpisode = await prisma.userEpisodes.findFirst({
                where: {
                    id_user: user.id,
                    episode: {
                        seasons: {
                            show_id: show.id_show
                        }
                    }
                },
                include: {
                    episode: {
                        select: {
                            episode_id: true,
                            episode_number: true,
                            season_number: true
                        }
                    }
                },
                orderBy: {
                    watched_at: 'desc'
                }
            });

            // Compter le nombre d'épisodes regardés pour cette série
            const watchedEpisodesCount = await prisma.userEpisodes.count({
                where: {
                    id_user: user.id,
                    episode: {
                        seasons: {
                            show_id: show.id_show
                        }
                    }
                }
            });

            return {
                showId: show.id_show,
                lastEpisode,
                watchedEpisodesCount
            };
        })
    );

    const transformedUserShows = userShows.map(show => {
        const lastEpisode = lastWatchedEpisodes.find(ep => ep.showId === show.id_show);
        const totalEpisodes = show.shows.seasons.reduce((acc: number, season) => acc + season.episodes.length, 0);

        return {
            ...show,
            current_season: lastEpisode?.lastEpisode?.episode.season_number ?? null,
            current_episode: lastEpisode?.lastEpisode?.episode.episode_number ?? null,
            shows: {
                ...show.shows,
                total_seasons: show.shows.seasons.length,
                season_episodes: show.shows.seasons.map(season => ({
                    season_id: season.season_id,
                    episodes: season.episodes.length
                })),
                total_episodes: totalEpisodes,
                watched_episodes: lastEpisode?.watchedEpisodesCount ?? 0
            }
        };
    });

    return <ListeClient userShows={transformedUserShows} />;
}
