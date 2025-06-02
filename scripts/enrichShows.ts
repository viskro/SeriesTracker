import { PrismaClient } from "@prisma/client";
import axios from "axios";

// Configuration explicite de Prisma
const prisma = new PrismaClient({
	log: ["query", "info", "warn", "error"],
});

const TVMAZE_BASE_URL = "https://api.tvmaze.com";

interface TVMazeShow {
	id: number;
	genres: string[];
	network?: {
		id: number;
		name: string;
		country?: {
			code: string;
			name: string;
			timezone: string;
		};
	};
	webChannel?: {
		id: number;
		name: string;
		country?: {
			code: string;
			name: string;
			timezone: string;
		};
	};
}

async function getShowDetails(tvmazeId: number): Promise<TVMazeShow> {
	const response = await axios.get<TVMazeShow>(
		`${TVMAZE_BASE_URL}/shows/${tvmazeId}`
	);
	return response.data;
}

async function enrichShows() {
	try {
		// Récupérer toutes les séries de la base de données
		const shows = await prisma.shows.findMany();

		console.log(`Enrichissement de ${shows.length} séries...`);

		for (const show of shows) {
			console.log(`Traitement de la série: ${show.title}`);

			try {
				// Récupérer les détails de la série depuis TVMaze
				const showDetails = await getShowDetails(show.show_id);

				// Mettre à jour les genres
				for (const genreName of showDetails.genres) {
					// Vérifier si le genre existe déjà
					let dbGenre = await prisma.genres.findFirst({
						where: { name: genreName },
					});

					// Créer le genre s'il n'existe pas
					if (!dbGenre) {
						dbGenre = await prisma.genres.create({
							data: {
								name: genreName,
							},
						});
					}

					// Vérifier si la relation existe déjà
					const existingRelation = await prisma.seriesGenres.findFirst({
						where: {
							id_show: show.show_id,
							id_genre: dbGenre.id,
						},
					});

					// Créer la relation si elle n'existe pas
					if (!existingRelation) {
						await prisma.seriesGenres.create({
							data: {
								id_show: show.show_id,
								id_genre: dbGenre.id,
							},
						});
					}
				}

				// Mettre à jour les plateformes (network et webChannel)
				const platforms = [
					{ ...showDetails.network, type: "network" },
					{ ...showDetails.webChannel, type: "webChannel" },
				].filter(Boolean);

				for (const platform of platforms) {
					if (!platform) continue;

					// Vérifier si la plateforme existe déjà
					let dbPlatform = await prisma.platforms.findFirst({
						where: {
							name: platform.name,
							type: platform.type,
						},
					});

					// Créer la plateforme si elle n'existe pas
					if (!dbPlatform) {
						dbPlatform = await prisma.platforms.create({
							data: {
								name: platform.name,
								type: platform.type,
								country_code: platform.country?.code || null,
							},
						});
					}

					// Vérifier si la relation existe déjà
					const existingRelation = await prisma.seriesPlatforms.findFirst({
						where: {
							id_show: show.show_id,
							id_platform: dbPlatform.id,
						},
					});

					// Créer la relation si elle n'existe pas
					if (!existingRelation) {
						await prisma.seriesPlatforms.create({
							data: {
								id_show: show.show_id,
								id_platform: dbPlatform.id,
							},
						});
					}
				}

				console.log(`Série ${show.title} enrichie avec succès`);
			} catch (error) {
				console.error(
					`Erreur lors du traitement de la série ${show.title}:`,
					error
				);
				continue; // Continuer avec la série suivante en cas d'erreur
			}
		}

		console.log("Enrichissement terminé !");
	} catch (error) {
		console.error("Erreur lors de l'enrichissement:", error);
	} finally {
		await prisma.$disconnect();
	}
}

enrichShows();
