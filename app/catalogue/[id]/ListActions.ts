"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function addToList(showId: number, userId: string) {
	try {
		await prisma.userShows.create({
			data: {
				id_show: showId,
				id_user: userId,
				is_favorite: false,
			},
		});
		revalidatePath(`/catalogue/${showId}`);
		return { success: true };
	} catch (error) {
		return {
			success: false,
			error: "Erreur lors de l'ajout à la liste : " + error,
		};
	}
}

export async function removeFromList(showId: number, userId: string) {
	try {
		await prisma.userShows.delete({
			where: {
				id_user_id_show: {
					id_user: userId,
					id_show: showId,
				},
			},
		});
		revalidatePath(`/catalogue/${showId}`);
		return { success: true };
	} catch (error) {
		return {
			success: false,
			error: "Erreur lors de la suppression de la liste : " + error,
		};
	}
}

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
		revalidatePath(`/catalogue/${showId}`);
		return { success: true };
	} catch (error) {
		return {
			success: false,
			error: "Erreur lors de la modification des favoris : " + error,
		};
	}
}
