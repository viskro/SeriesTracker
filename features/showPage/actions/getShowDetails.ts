import prisma from "@/lib/prisma";
import { ShowWithDetails, SeasonDisplay } from "../types";

export async function getShowDetails(showId: number) {
	const show = (await prisma.shows.findUnique({
		where: {
			show_id: showId,
		},
		include: {
			_count: {
				select: {
					seasons: true,
					comments: true,
				},
			},
			genres: {
				select: {
					genres: {
						select: {
							name: true,
						},
					},
				},
			},
			platforms: {
				select: {
					platforms: {
						select: {
							name: true,
						},
					},
				},
			},
			comments: {
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
			},
			seasons: {
				select: {
					season_id: true,
					show_id: true,
					summary: true,
					image: true,
				},
				orderBy: {
					season_id: "asc",
				},
			},
			show_cast: {
				select: {
					person_id: true,
					character_name: true,
				},
			},
		},
	})) as ShowWithDetails | null;

	if (!show) {
		return null;
	}

	// Récupérer la moyenne des notes et le nombre total de notes
	const ratingStats = await prisma.userShows.aggregate({
		where: {
			id_show: showId,
			rating: {
				not: null,
			},
		},
		_avg: {
			rating: true,
		},
		_count: {
			rating: true,
		},
	});

	const averageRating = ratingStats._avg.rating
		? Math.round(ratingStats._avg.rating)
		: 0;
	const totalRatings = ratingStats._count.rating;

	const castRaw = await prisma.showCast.findMany({
		where: { show_id: showId },
		include: { cast: true },
	});

	const cast = castRaw.map((item) => ({
		id: item.cast.person_id,
		name: item.cast.name,
		image: item.cast.image,
		character: item.character_name,
	}));

	const seasons: SeasonDisplay[] = show.seasons.map((season) => ({
		id: season.season_id,
		image: season.image,
	}));

	const genres = show.genres.map((genre) => genre.genres.name);
	const platforms = show.platforms.map((platform) => platform.platforms.name);

	return {
		show,
		averageRating,
		totalRatings,
		cast,
		seasons,
		genres,
		platforms,
	};
}
