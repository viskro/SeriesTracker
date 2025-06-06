import { Episodes, Seasons } from "@/generated/prisma";

export type SeasonWithDetails = Seasons & {
	shows: {
		show_id: number;
		title: string;
		image: string | null;
		summary: string | null;
	};
	episodes: (Episodes & {
		seasons: {
			show_id: number;
		};
	})[];
};

export type EpisodeWithShowId = Episodes & {
	show_id: number;
};

export type SeasonPageProps = {
	season: SeasonWithDetails;
	show: {
		show_id: number;
		title: string;
		image: string | null;
		summary: string | null | undefined;
	};
	episodes: EpisodeWithShowId[];
	synopsis: string | null | undefined;
};
