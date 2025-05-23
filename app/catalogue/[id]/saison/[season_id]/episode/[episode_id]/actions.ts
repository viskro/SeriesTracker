"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function markEpisodeAsWatched(episodeId: number, userId: string) {
	try {
		await prisma.userEpisodes.create({
			data: {
				id_episode: episodeId,
				id_user: userId,
			},
		});
		revalidatePath(`/catalogue/*/saison/*/episode/${episodeId}`);
		return { success: true };
	} catch (error) {
		console.error("Erreur lors du marquage de l'épisode:", error);
		return { success: false, error };
	}
}

export async function markEpisodeAsUnwatched(
	episodeId: number,
	userId: string
) {
	try {
		await prisma.userEpisodes.delete({
			where: {
				id_user_id_episode: {
					id_episode: episodeId,
					id_user: userId,
				},
			},
		});
		revalidatePath(`/catalogue/*/saison/*/episode/${episodeId}`);
		return { success: true };
	} catch (error) {
		console.error("Erreur lors du retrait de l'épisode:", error);
		return { success: false, error };
	}
}

export async function createEpisodeComment(
	episodeId: number,
	userId: string,
	content: string
) {
	try {
		await prisma.episodesComments.create({
			data: {
				id_episode: episodeId,
				id_user: userId,
				content,
				postedAt: new Date(),
			},
		});
		revalidatePath(`/catalogue/*/saison/*/episode/${episodeId}`);
		return { success: true };
	} catch (error) {
		console.error("Erreur lors de la création du commentaire:", error);
		return { success: false, error };
	}
}
