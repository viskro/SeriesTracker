export interface UserData {
	id: string;
	name: string;
	email: string;
	emailVerified: boolean;
	createdAt: Date;
	updatedAt: Date;
	image?: string | null;
}

export interface CommentType {
	className?: string;
	user: {
		name: string;
	};
	postedAt: Date;
	content: string;
}

interface Season {
	season_id: number;
	show_id: number;
	summary: string | null;
	image: string | null;
}

interface Cast {
	person_id: number;
	character_name: string;
}
interface Genre {
	genre_id: number;
	name: string;
}

interface Platform {
	id: number;
	name: string;
	type: string;
	country_code: string;
}

export interface Show {
	show_id: number;
	title: string;
	image: string | null;
	summary: string | null;
	seasons?: Season[];
	show_cast?: Cast[];
	comments?: CommentType[];
	show_genres?: Genre[];
	show_platforms?: Platform[];
	_count?: {
		seasons: number;
		comments: number;
	};
}
