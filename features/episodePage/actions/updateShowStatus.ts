"use server";

import prisma from "@/shared/lib/prisma";

export async function updateShowStatus(userId: string, showId: number) {
	try {
		// Récupérer le nombre total d'épisodes de la série
		const totalEpisodes = await prisma.episodes.count({
			where: {
				seasons: {
					show_id: showId,
				},
			},
		});

		// Récupérer le nombre d'épisodes vus par l'utilisateur pour cette série
		const watchedEpisodes = await prisma.userEpisodes.count({
			where: {
				id_user: userId,
				episode: {
					seasons: {
						show_id: showId,
					},
				},
			},
		});

		// Déterminer le nouveau statut
		let newStatus: "to_watch" | "ongoing" | "finished";

		if (watchedEpisodes === 0) {
			newStatus = "to_watch";
		} else if (watchedEpisodes === totalEpisodes) {
			newStatus = "finished";
		} else {
			newStatus = "ongoing";
		}

		// Mettre à jour le statut dans la base de données
		await prisma.userShows.update({
			where: {
				id_user_id_show: {
					id_user: userId,
					id_show: showId,
				},
			},
			data: {
				status: newStatus,
			},
		});

		return newStatus;
	} catch (error) {
		console.error("Erreur lors de la mise à jour du statut:", error);
		throw error;
	}
}
