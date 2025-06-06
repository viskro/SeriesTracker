import prisma from "@/shared/lib/prisma";
import { SeasonWithDetails } from "../types";

export async function getSeasonDetails(seasonId: number) {
	const season = (await prisma.seasons.findUnique({
		where: {
			season_id: seasonId,
		},
		include: {
			shows: {
				select: {
					show_id: true,
					title: true,
					image: true,
				},
			},
			episodes: {
				orderBy: {
					episode_number: "asc",
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
							show_id: true,
						},
					},
				},
			},
		},
	})) as SeasonWithDetails | null;

	if (!season) {
		return null;
	}

	const episodesWithShowId = season.episodes.map((episode) => ({
		...episode,
		show_id: episode.seasons.show_id,
	}));

	return {
		season,
		episodes: episodesWithShowId,
	};
}
