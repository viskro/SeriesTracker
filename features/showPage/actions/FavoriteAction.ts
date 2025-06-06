"use server";

import prisma from "@/shared/lib/prisma";
import { revalidateShowPage } from "./serverActions";

export async function toggleFavorite(showId: number, userId: string) {
	try {
		const userShow = await prisma.userShows.findUnique({
			where: {
				id_user_id_show: {
					id_user: userId,
					id_show: showId,
				},
			},
		});

		if (!userShow) {
			return { success: false, error: "La série n'est pas dans votre liste" };
		}

		await prisma.userShows.update({
			where: {
				id_user_id_show: {
					id_user: userId,
					id_show: showId,
				},
			},
			data: {
				is_favorite: !userShow.is_favorite,
			},
		});
		await revalidateShowPage(showId);
		return { success: true };
	} catch (error) {
		return {
			success: false,
			error: "Erreur lors de la modification des favoris : " + error,
		};
	}
}
