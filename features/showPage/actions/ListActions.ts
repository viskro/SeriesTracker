"use server";

import prisma from "@/lib/prisma";
import { revalidateShowPage } from "./serverActions";

export async function addToList(showId: number, userId: string) {
	try {
		await prisma.userShows.create({
			data: {
				id_show: showId,
				id_user: userId,
				is_favorite: false,
			},
		});
		await revalidateShowPage(showId);
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
		await revalidateShowPage(showId);
		return { success: true };
	} catch (error) {
		return {
			success: false,
			error: "Erreur lors de la suppression de la liste : " + error,
		};
	}
}
