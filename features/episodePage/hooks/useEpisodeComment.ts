"use client";

import { useState } from "react";
import { useUIStore } from "@/lib/stores/uiStore";
import {
	NOTIFICATION_DURATION,
	NOTIFICATION_TYPES,
	NOTIFICATION_MESSAGES,
} from "@/lib/constants/notifications";
import { v4 as uuidv4 } from "uuid";
import { createEpisodeComment } from "../actions/episodeActions";

interface UseEpisodeCommentProps {
	episodeId: number;
	userId: string;
}

export function useEpisodeComment({
	episodeId,
	userId,
}: UseEpisodeCommentProps) {
	const [content, setContent] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { addNotification } = useUIStore();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!content.trim()) return;

		setIsLoading(true);
		try {
			await createEpisodeComment(episodeId, userId, content);

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
}
