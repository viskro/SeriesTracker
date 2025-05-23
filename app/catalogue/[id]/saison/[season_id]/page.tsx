import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import SeasonClient from "./SeasonClient";
import { trad } from "@/lib/utils";

interface Props {
    params: {
        season_id: string;
    };
}

export default async function Page({ params }: Props) {
    const { season_id } = params;
    const seasonId = parseInt(season_id);

    if (isNaN(seasonId)) {
        notFound();
    }

    const season = await prisma.seasons.findUnique({
        where: {
            season_id: seasonId,
        },
        include: {
            shows: {
                select: {
                    show_id: true,
                    title: true,
                    image: true,
                }
            },
            episodes: {
                orderBy: {
                    episode_number: 'asc',
                },
                select: {
                    episode_id: true,
                    name: true,
                    image: true,
                    summary: true,
                    url: true,
                    season_id: true,
                    episode_number: true,
                    season_number: true,
                    airdate: true,
                    seasons: {
                        select: {
                            show_id: true
                        }
                    }
                }
            },
        },
    });

    if (!season) {
        notFound();
    }

    const episodesWithShowId = season.episodes.map(episode => ({
        ...episode,
        show_id: episode.seasons.show_id
    }));

    const synopsis = await trad(season.summary)

    return (
        <SeasonClient
            season={season}
            show={season.shows}
            episodes={episodesWithShowId}
            synopsis={synopsis}
        />
    );
}
