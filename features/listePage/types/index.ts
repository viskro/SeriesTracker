export type ShowStatus = "to_watch" | "ongoing" | "finished";

export interface UserShow {
	id_user: string;
	id_show: number;
	is_favorite: boolean | null;
	status: ShowStatus | null;
	added_at: Date | null;
	current_season: number | null;
	current_episode: number | null;
	shows: {
		show_id: number;
		title: string;
		image: string | null;
		summary: string | null;
		total_seasons: number;
		total_episodes: number;
		watched_episodes: number;
		season_episodes: {
			season_id: number;
			episodes: number;
		}[];
	};
}

export interface ShowCardProps {
	show_id: number;
	title: string;
	image: string | null;
	status: ShowStatus | null;
	added_at: Date | null;
	current_season: number | null;
	current_episode: number | null;
	total_episodes: number;
	watched_episodes: number;
	total_seasons: number;
	season_episodes: {
		season_id: number;
		episodes: number;
	}[];
}

export interface ListeClientProps {
	userShows: UserShow[];
}
