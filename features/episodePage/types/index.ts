export interface Comment {
	content: string;
	postedAt: Date;
	user: {
		name: string;
	};
}

export interface Show {
	show_id: number;
	title: string;
	image: string | null;
}

export interface Episode {
	episode_id: number;
	name: string;
	season_number: number;
	episode_number: number | null;
	airdate: string | null;
	summary: string | null;
	image: string | null;
	seasons: {
		shows: Show;
		season_id: number;
	};
	users: {
		id_user: string;
	}[];
}

export interface EpisodePageProps {
	episode: Episode;
	show: Show;
	isWatched: boolean;
	comments: Comment[];
	userId?: string;
	synopsis: string | null | undefined;
}
