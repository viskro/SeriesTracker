export type ShowWithRelations = {
	show_id: number;
	title: string;
	image: string | null;
	summary: string | null;
	seasons: {
		episodes: {
			airdate: string | null;
		}[];
	}[];
	platforms: {
		platforms: {
			name: string;
		};
	}[];
	genres: {
		genres: {
			name: string;
		};
	}[];
};

export type SearchParams = {
	page?: string;
	platform?: string;
	category?: string;
	rating?: string;
	initial?: string;
	sort?: string;
	order?: string;
	q?: string;
};

export type RatingStats = {
	average: number;
	count: number;
};
