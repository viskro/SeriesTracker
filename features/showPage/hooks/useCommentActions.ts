import { useState } from "react";
import { createComment } from "../actions/AddCommentAction";
import { useUIStore } from "@/shared/stores/uiStore";
import {
	NOTIFICATION_DURATION,
	NOTIFICATION_TYPES,
	NOTIFICATION_MESSAGES,
} from "@/shared/constants/notifications";
import { v4 as uuidv4 } from "uuid";

export const useCommentActions = (idUser: string, idShow: number) => {
	const [content, setContent] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { addNotification } = useUIStore();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!content.trim()) return;

		setIsLoading(true);
		try {
			await createComment(content, idUser, idShow);
			setContent("");
			addNotification({
				id: uuidv4(),
				type: NOTIFICATION_TYPES.SUCCESS,
				message: NOTIFICATION_MESSAGES.COMMENT.ADDED,
				duration: NOTIFICATION_DURATION,
			});
		} catch (error) {
			addNotification({
				id: uuidv4(),
				type: NOTIFICATION_TYPES.ERROR,
				message: `${NOTIFICATION_MESSAGES.COMMENT.ERROR} : ${error}`,
				duration: NOTIFICATION_DURATION,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return {
		content,
		setContent,
		isLoading,
		handleSubmit,
	};
};
