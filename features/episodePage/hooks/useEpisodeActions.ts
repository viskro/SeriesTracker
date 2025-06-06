import { useState } from "react";
import {
	markEpisodeAsWatched,
	markEpisodeAsUnwatched,
} from "../actions/episodeActions";
import { useShowStatus } from "@/features/episodePage/hooks/useShowStatus";

export const useEpisodeActions = (
	episodeId: number,
	userId: string,
	showId: number
) => {
	const [isLoading, setIsLoading] = useState(false);
	const { handleEpisodeWatched } = useShowStatus();

	const handleWatchToggle = async (isWatched: boolean) => {
		if (!userId) return;
		setIsLoading(true);

		try {
			if (isWatched) {
				await markEpisodeAsUnwatched(episodeId, userId);
			} else {
				await markEpisodeAsWatched(episodeId, userId);
			}
			await handleEpisodeWatched(userId, showId);
			return true;
		} catch (error) {
			console.error("Erreur lors de la mise à jour du statut:", error);
			return false;
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		handleWatchToggle,
	};
};
