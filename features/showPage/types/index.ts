import { Show } from "@/lib/types";

export type CastMember = {
	id: number;
	name: string;
	image?: string | null;
	character: string;
};

export type Season = {
	season_id: number;
	show_id: number;
	summary: string | null;
	image: string | null;
};

export type SeasonDisplay = {
	id: number;
	image?: string | null;
};

export type ShowPageProps = {
	show: Show;
	isInList: boolean;
	isFavorite: boolean;
	currentRating?: number | null;
	averageRating: number;
	totalRatings: number;
	cast: CastMember[];
	seasons: SeasonDisplay[];
	synopsis: string;
	genres: string[];
	platforms: string[];
};

export type ShowWithDetails = Show & {
	_count: {
		seasons: number;
		comments: number;
	};
	comments: {
		content: string;
		postedAt: Date;
		user: {
			name: string;
		};
	}[];
	seasons: Season[];
	genres: {
		genres: {
			name: string;
		};
	}[];
	platforms: {
		platforms: {
			name: string;
		};
	}[];
};
