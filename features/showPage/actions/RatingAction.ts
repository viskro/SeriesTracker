"use server";

import prisma from "@/shared/lib/prisma";
import { revalidateShowPage } from "./serverActions";

export async function submitRating(
	showId: number,
	userId: string,
	rating: number
) {
	try {
		// Vérifier si l'utilisateur a la série dans sa liste
		const userShow = await prisma.userShows.findUnique({
			where: {
				id_user_id_show: {
					id_user: userId,
					id_show: showId,
				},
			},
		});

		if (!userShow) {
			return {
				success: false,
				error: "Vous devez avoir la série dans votre liste pour la noter",
			};
		}

		// Mettre à jour la note
		await prisma.userShows.update({
			where: {
				id_user_id_show: {
					id_user: userId,
					id_show: showId,
				},
			},
			data: {
				rating,
			},
		});

		await revalidateShowPage(showId);
		return { success: true };
	} catch (error) {
		return {
			success: false,
			error: "Erreur lors de la soumission de la note : " + error,
		};
	}
}
