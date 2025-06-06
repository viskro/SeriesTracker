import prisma from "@/shared/lib/prisma";
import {
	buildWhereClause,
	FilterType,
} from "@/features/catalogue/types/filters";
import { ShowWithRelations, RatingStats } from "../types";

const ITEMS_PER_PAGE = 12;

export async function getShows(
	filters: Partial<Record<FilterType, string[]>>,
	q: string | undefined,
	currentPage: number,
	sort?: string,
	order?: string
) {
	const skip = (currentPage - 1) * ITEMS_PER_PAGE;

	// Construire la clause where
	const whereClause = buildWhereClause(
		filters as Record<FilterType, string[]>,
		q
	);

	// Construire la clause where pour le comptage
	const countWhereClause = q
		? { ...whereClause, title: { contains: q } }
		: whereClause;

	const [showCount, shows, ratingStats] = await Promise.all([
		prisma.shows.count({
			where: countWhereClause,
		}),
		prisma.shows.findMany({
			where: whereClause,
			skip,
			take: ITEMS_PER_PAGE,
			orderBy:
				sort === "rating" || sort === "date"
					? undefined
					: sort === "title"
					? { title: order as "asc" | "desc" }
					: { title: "asc" },
			select: {
				show_id: true,
				title: true,
				image: true,
				summary: true,
				seasons: {
					select: {
						episodes: {
							select: {
								airdate: true,
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
				genres: {
					select: {
						genres: {
							select: {
								name: true,
							},
						},
					},
				},
			},
		}) as Promise<ShowWithRelations[]>,
		prisma.userShows.groupBy({
			by: ["id_show"],
			_avg: {
				rating: true,
			},
			_count: {
				rating: true,
			},
		}),
	]);

	// Créer un map des notes moyennes
	const ratingMap = new Map<number, RatingStats>(
		ratingStats.map((stat) => [
			stat.id_show,
			{
				average: stat._avg.rating ? Math.round(stat._avg.rating) : 0,
				count: stat._count.rating,
			},
		])
	);

	// Trier les shows si nécessaire
	if (sort === "rating" || sort === "date") {
		shows.sort((a, b) => {
			if (sort === "rating") {
				const ratingA = ratingMap.get(a.show_id)?.average || 0;
				const ratingB = ratingMap.get(b.show_id)?.average || 0;
				return order === "asc" ? ratingA - ratingB : ratingB - ratingA;
			} else {
				const dateA = a.seasons[0]?.episodes[0]?.airdate || "";
				const dateB = b.seasons[0]?.episodes[0]?.airdate || "";
				return order === "asc"
					? dateA.localeCompare(dateB)
					: dateB.localeCompare(dateA);
			}
		});
	}

	return {
		shows,
		showCount,
		ratingMap,
		totalPages: Math.ceil(showCount / ITEMS_PER_PAGE),
	};
}
