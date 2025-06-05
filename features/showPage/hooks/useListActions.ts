import { useState } from "react";
import { addToList, removeFromList } from "../actions/ListActions";
import { toggleFavorite } from "../actions/FavoriteAction";
import { useUIStore } from "@/lib/stores/uiStore";
import {
	NOTIFICATION_DURATION,
	NOTIFICATION_TYPES,
	NOTIFICATION_MESSAGES,
} from "@/lib/constants/notifications";

export const useListActions = (
	showId: number,
	userId: string,
	isInList: boolean,
	isFavorite: boolean
) => {
	const [isLoading, setIsLoading] = useState(false);
	const { addNotification } = useUIStore();

	const handleListAction = async () => {
		setIsLoading(true);
		try {
			if (isInList) {
				const result = await removeFromList(showId, userId);
				if (result.success) {
					addNotification({
						id: Date.now().toString(),
						type: NOTIFICATION_TYPES.INFO,
						message: NOTIFICATION_MESSAGES.SHOW.REMOVED_FROM_FAVORITES,
						duration: NOTIFICATION_DURATION,
					});
				} else {
					throw new Error(result.error);
				}
			} else {
				const result = await addToList(showId, userId);
				if (result.success) {
					addNotification({
						id: Date.now().toString(),
						type: NOTIFICATION_TYPES.SUCCESS,
						message: NOTIFICATION_MESSAGES.SHOW.ADDED_TO_FAVORITES,
						duration: NOTIFICATION_DURATION,
					});
				} else {
					throw new Error(result.error);
				}
			}
		} catch (error) {
			addNotification({
				id: Date.now().toString(),
				type: NOTIFICATION_TYPES.ERROR,
				message: `${NOTIFICATION_MESSAGES.SHOW.ERROR} : ${error}`,
				duration: NOTIFICATION_DURATION,
			});
		} finally {
			setIsLoading(false);
		}
	};

	const handleFavoriteAction = async () => {
		if (!isInList) return;
		setIsLoading(true);
		try {
			const result = await toggleFavorite(showId, userId);
			if (result.success) {
				addNotification({
					id: Date.now().toString(),
					type: NOTIFICATION_TYPES.SUCCESS,
					message: isFavorite
						? NOTIFICATION_MESSAGES.SHOW.REMOVED_FROM_FAVORITES
						: NOTIFICATION_MESSAGES.SHOW.ADDED_TO_FAVORITES,
					duration: NOTIFICATION_DURATION,
				});
			} else {
				throw new Error(result.error);
			}
		} catch (error) {
			addNotification({
				id: Date.now().toString(),
				type: NOTIFICATION_TYPES.ERROR,
				message: `${NOTIFICATION_MESSAGES.SHOW.ERROR} : ${error}`,
				duration: NOTIFICATION_DURATION,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		handleListAction,
		handleFavoriteAction,
	};
};
