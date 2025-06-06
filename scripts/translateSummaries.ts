import { PrismaClient } from "../generated/prisma";
import axios from "axios";
import { htmlToText } from "html-to-text";

const prisma = new PrismaClient({
	log: ["query", "info", "warn", "error"],
});

interface GoogleTranslateResponse {
	data: {
		translations: Array<{
			translatedText: string;
			detectedSourceLanguage: string;
		}>;
	};
}

async function cleanAndTranslateText(
	text: string | null
): Promise<string | null> {
	if (!text) return null;

	// Nettoyer le HTML
	const cleanText = htmlToText(text, {
		wordwrap: false,
		preserveNewlines: true,
	});

	try {
		const response = await axios.post<GoogleTranslateResponse>(
			"https://translation.googleapis.com/language/translate/v2",
			{
				q: cleanText,
				source: "en",
				target: "fr",
				format: "text",
			},
			{
				params: {
					key: "AIzaSyB6gKZRNXsQs2ahH_7oTvvOv_gpsB69WXs",
				},
			}
		);

		if (response.data?.data?.translations?.[0]?.translatedText) {
			return response.data.data.translations[0].translatedText;
		}
		return null;
	} catch (error: unknown) {
		console.error("Erreur de traduction:", error);
		return null;
	}
}

async function translateAllSummaries() {
	try {
		// Traduire les résumés des séries
		const shows = await prisma.shows.findMany({
			select: {
				show_id: true,
				summary: true,
			},
		});

		console.log(`Traduction des résumés de ${shows.length} séries...`);
		for (const show of shows) {
			const translatedSummary = await cleanAndTranslateText(show.summary);
			if (translatedSummary) {
				await prisma.shows.update({
					where: { show_id: show.show_id },
					data: { summary: translatedSummary },
				});
				console.log(`Série ${show.show_id}: résumé traduit`);
			}
		}

		// Traduire les résumés des saisons
		const seasons = await prisma.seasons.findMany({
			select: {
				season_id: true,
				summary: true,
			},
		});

		console.log(`Traduction des résumés de ${seasons.length} saisons...`);
		for (const season of seasons) {
			const translatedSummary = await cleanAndTranslateText(season.summary);
			if (translatedSummary) {
				await prisma.seasons.update({
					where: { season_id: season.season_id },
					data: { summary: translatedSummary },
				});
				console.log(`Saison ${season.season_id}: résumé traduit`);
			}
		}

		// Traduire les résumés des épisodes
		const episodes = await prisma.episodes.findMany({
			select: {
				episode_id: true,
				summary: true,
			},
		});

		console.log(`Traduction des résumés de ${episodes.length} épisodes...`);
		for (const episode of episodes) {
			const translatedSummary = await cleanAndTranslateText(episode.summary);
			if (translatedSummary) {
				await prisma.episodes.update({
					where: { episode_id: episode.episode_id },
					data: { summary: translatedSummary },
				});
				console.log(`Épisode ${episode.episode_id}: résumé traduit`);
			}
		}

		console.log("Traduction terminée !");
	} catch (error) {
		console.error("Erreur lors de la traduction:", error);
	} finally {
		await prisma.$disconnect();
	}
}

// Exécuter le script
translateAllSummaries();
