export type FilterType = "platform" | "category" | "rating" | "initial";
export type SortType = "rating" | "title" | "date";
export type SortOrder = "asc" | "desc";

export interface FilterOption {
	id: number;
	name: string;
	value: string;
}

export interface FilterGroup {
	type: FilterType;
	title: string;
	options: FilterOption[];
}

export interface SortOption {
	type: SortType;
	title: string;
	order: SortOrder;
	name: string;
}

export const FILTER_GROUPS: FilterGroup[] = [
	{
		type: "platform",
		title: "Plateformes",
		options: [
			{ id: 1, name: "Netflix", value: "netflix" },
			{ id: 2, name: "Disney+", value: "disney+" },
			{ id: 3, name: "Prime Video", value: "prime-video" },
			{ id: 4, name: "Canal+", value: "canal+" },
			{ id: 5, name: "OCS", value: "ocs" },
			{ id: 6, name: "Paramount+", value: "paramount+" },
			{ id: 7, name: "Apple TV+", value: "apple-tv+" },
			{ id: 8, name: "Salto", value: "salto" },
			{ id: 9, name: "Arte", value: "arte" },
		],
	},
	{
		type: "category",
		title: "Catégories",
		options: [
			{ id: 1, name: "Drame", value: "drama" },
			{ id: 2, name: "Action", value: "action" },
			{ id: 3, name: "Science-Fiction", value: "science-fiction" },
			{ id: 4, name: "Crime", value: "crime" },
			{ id: 5, name: "Thriller", value: "thriller" },
			{ id: 6, name: "Espionnage", value: "espionage" },
			{ id: 7, name: "Romance", value: "romance" },
			{ id: 8, name: "Surnaturel", value: "supernatural" },
			{ id: 9, name: "Histoire", value: "history" },
			{ id: 10, name: "Comédie", value: "comedy" },
			{ id: 11, name: "Horreur", value: "horror" },
			{ id: 12, name: "Médical", value: "medical" },
			{ id: 13, name: "Aventure", value: "adventure" },
			{ id: 14, name: "Fantastique", value: "fantasy" },
			{ id: 15, name: "Famille", value: "family" },
			{ id: 16, name: "Mystère", value: "mystery" },
			{ id: 17, name: "Juridique", value: "legal" },
			{ id: 18, name: "Western", value: "western" },
			{ id: 19, name: "Musique", value: "music" },
			{ id: 20, name: "Enfants", value: "children" },
			{ id: 21, name: "Adulte", value: "adult" },
			{ id: 22, name: "Anime", value: "anime" },
			{ id: 23, name: "Sport", value: "sports" },
			{ id: 24, name: "Nature", value: "nature" },
		],
	},
	{
		type: "rating",
		title: "Notes",
		options: [
			{ id: 1, name: "1 étoile", value: "1" },
			{ id: 2, name: "2 étoiles", value: "2" },
			{ id: 3, name: "3 étoiles", value: "3" },
			{ id: 4, name: "4 étoiles", value: "4" },
			{ id: 5, name: "5 étoiles", value: "5" },
		],
	},
	{
		type: "initial",
		title: "Initiale",
		options: [
			...Array.from({ length: 26 }, (_, i) => ({
				id: i + 1,
				name: String.fromCharCode(65 + i),
				value: String.fromCharCode(65 + i),
			})),
			{ id: 27, name: "0-9", value: "0-9" },
		],
	},
];

export const SORT_OPTIONS: SortOption[] = [
	{
		type: "rating",
		title: "Note",
		order: "desc",
		name: "Note décroissante",
	},
	{
		type: "rating",
		title: "Note",
		order: "asc",
		name: "Note croissante",
	},
	{
		type: "title",
		title: "Titre",
		order: "asc",
		name: "A-Z",
	},
	{
		type: "title",
		title: "Titre",
		order: "desc",
		name: "Z-A",
	},
	{
		type: "date",
		title: "Date de sortie",
		order: "asc",
		name: "Plus ancien",
	},
	{
		type: "date",
		title: "Date de sortie",
		order: "desc",
		name: "Plus récent",
	},
];

type WhereInput = {
	platforms?: {
		some: {
			platforms: {
				name: {
					in: string[];
				};
			};
		};
	};
	genres?: {
		some: {
			genres: {
				name: {
					in: string[];
				};
			};
		};
	};
	users_shows?: {
		some: {
			rating: {
				gte: number;
			};
		};
	};
	OR?: Array<{
		title: {
			startsWith: string;
		};
	}>;
	title?: {
		contains: string;
	};
};

type OrderByInput = {
	users_shows?: {
		_count?: {
			rating: "asc" | "desc";
		};
	};
	title?: "asc" | "desc";
	seasons?: {
		episodes: {
			orderBy: {
				airdate: "asc" | "desc";
			};
		};
	};
};

export function buildWhereClause(
	filters: Record<FilterType, string[]>,
	q?: string
): WhereInput {
	const where: WhereInput = {};

	if (filters.platform?.length) {
		where.platforms = {
			some: {
				platforms: {
					name: {
						in: filters.platform,
					},
				},
			},
		};
	}

	if (filters.category?.length) {
		where.genres = {
			some: {
				genres: {
					name: {
						in: filters.category,
					},
				},
			},
		};
	}

	if (filters.rating?.length) {
		const maxRating = Math.max(...filters.rating.map(Number));
		where.users_shows = {
			some: {
				rating: {
					gte: maxRating,
				},
			},
		};
	}

	if (filters.initial?.length) {
		if (filters.initial.includes("0-9")) {
			where.OR = Array.from({ length: 10 }, (_, i) => ({
				title: {
					startsWith: i.toString(),
				},
			}));
		} else {
			where.OR = filters.initial.map((letter) => ({
				title: {
					startsWith: letter,
				},
			}));
		}
	}

	if (q) {
		where.title = {
			contains: q,
		};
	}

	return where;
}

export function buildOrderBy(sort?: SortType, order?: SortOrder): OrderByInput {
	if (!sort || !order) {
		return { title: "asc" };
	}

	switch (sort) {
		case "rating":
			return {
				users_shows: {
					_count: {
						rating: order,
					},
				},
			};
		case "title":
			return { title: order };
		case "date":
			return {
				seasons: {
					episodes: {
						orderBy: {
							airdate: order,
						},
					},
				},
			};
		default:
			return { title: "asc" };
	}
}
