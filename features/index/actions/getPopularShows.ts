import prisma from "@/shared/lib/prisma";
import { Show } from "@/shared/types/types";

interface ShowWithGenres extends Show {
	genres: {
		genres: {
			id: number;
			name: string;
		};
	}[];
}

export const GetPopularShows = async () => {
	// D'abord, nous calculons les moyennes des notes
	const showsWithRatings = await prisma.userShows.groupBy({
		by: ["id_show"],
		_avg: {
			rating: true,
		},
		having: {
			rating: {
				_avg: {
					gt: 0,
				},
			},
		},
		orderBy: {
			_avg: {
				rating: "desc",
			},
		},
		take: 4,
	});

	// Ensuite, nous récupérons les détails des shows
	const popularShows = (await prisma.shows.findMany({
		where: {
			show_id: {
				in: showsWithRatings.map((show) => show.id_show),
			},
		},
		include: {
			users_shows: {
				select: {
					rating: true,
				},
			},
			genres: {
				include: {
					genres: {
						select: {
							id: true,
							name: true,
						},
					},
				},
			},
		},
	})) as ShowWithGenres[];

	// Transformer les données pour correspondre au type Show
	const transformedShows = popularShows.map((show) => ({
		...show,
		show_genres: show.genres.map((g) => ({
			genre_id: g.genres.id,
			name: g.genres.name,
		})),
	}));

	return transformedShows;
};
