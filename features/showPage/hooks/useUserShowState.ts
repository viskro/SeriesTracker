import prisma from "@/lib/prisma";

export async function getUserShowState(
	userId: string | undefined,
	showId: number
) {
	if (!userId) {
		return {
			isInList: false,
			isFavorite: false,
			currentRating: null,
		};
	}

	const userShow = await prisma.userShows.findUnique({
		where: {
			id_user_id_show: {
				id_user: userId,
				id_show: showId,
			},
		},
	});

	return {
		isInList: !!userShow,
		isFavorite: userShow?.is_favorite ?? false,
		currentRating: userShow?.rating ?? null,
	};
}
