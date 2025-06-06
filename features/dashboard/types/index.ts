export interface DashboardUserData {
	id: string;
	ShowComments: {
		content: string;
		postedAt: Date;
		user: {
			name: string;
		};
	}[];
	users_shows: {
		id_user: string;
		id_show: number;
		is_favorite: boolean | null;
		is_archived: boolean | null;
		status: "to_watch" | "ongoing" | "finished" | null;
		added_at: Date | null;
		shows: {
			show_id: number;
			title: string;
			image: string | null;
			summary: string | null;
		};
	}[];
	_count: {
		users_shows: number;
	};
	archivedShowsCount: number;
	countComments: number;
}

export type FiveShows = {
	show_id: number;
	title: string;
	image: string | null;
	summary: string | null;
}[];

export type FourFavorites = {
	show_id: number;
	title: string;
	image: string | null;
	summary: string | null;
}[];

export interface DashboardProps {
	userData: DashboardUserData;
	fiveShows: FiveShows;
	fourFavorites: FourFavorites;
	lastEpisodeWatched: {
		shows: {
			title: string;
		};
	} | null;
	countShowsFinished: number;
	countShowsOngoing: number;
	totalCatalogueShows: number;
	totalUserListShows: number;
	timeSpent: string;
	timeTowatch: string;
}
