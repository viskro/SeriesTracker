import { useCallback } from "react";
import { updateShowStatus } from "@/app/catalogue/[id]/saison/[season_id]/episode/[episode_id]/actions";

export function useShowStatus() {
	const handleEpisodeWatched = useCallback(
		async (userId: string, showId: number) => {
			try {
				const newStatus = await updateShowStatus(userId, showId);
				return newStatus;
			} catch (error) {
				console.error("Erreur lors de la mise à jour du statut:", error);
				throw error;
			}
		},
		[]
	);

	return {
		handleEpisodeWatched,
	};
}
