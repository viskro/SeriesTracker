import { PrismaClient } from "../generated/prisma";
import axios from "axios";

// Configuration explicite de Prisma
const prisma = new PrismaClient({
	log: ["query", "info", "warn", "error"],
});

const TVMAZE_BASE_URL = "https://api.tvmaze.com";

interface TVMazeShow {
	id: number;
	name: string;
	summary: string;
	image?: {
		medium: string;
		original: string;
	};
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

interface TVMazeSeason {
	id: number;
	number: number;
	summary: string;
	image?: {
		medium: string;
		original: string;
	};
}

interface TVMazeEpisode {
	id: number;
	name: string;
	season: number;
	number: number;
	airdate: string;
	summary: string;
	url: string;
	image?: {
		medium: string;
		original: string;
	};
}

interface TVMazeCast {
	person: {
		id: number;
		name: string;
		image?: {
			medium: string;
			original: string;
		};
	};
	character: {
		name: string;
	};
}

async function getShows(page: number = 0): Promise<TVMazeShow[]> {
	const response = await axios.get<TVMazeShow[]>(
		`${TVMAZE_BASE_URL}/shows?page=${page}`
	);
	return response.data;
}

async function getShowSeasons(tvmazeId: number): Promise<TVMazeSeason[]> {
	const response = await axios.get<TVMazeSeason[]>(
		`${TVMAZE_BASE_URL}/shows/${tvmazeId}/seasons`
	);
	return response.data;
}

async function getShowEpisodes(seasonId: number): Promise<TVMazeEpisode[]> {
	const response = await axios.get<TVMazeEpisode[]>(
		`${TVMAZE_BASE_URL}/seasons/${seasonId}/episodes`
	);
	return response.data;
}

async function getShowCast(tvmazeId: number): Promise<TVMazeCast[]> {
	const response = await axios.get<TVMazeCast[]>(
		`${TVMAZE_BASE_URL}/shows/${tvmazeId}/cast`
	);
	return response.data;
}

async function importShows() {
	try {
		let page = 0;
		let hasMoreShows = true;

		while (hasMoreShows) {
			console.log(`Récupération des séries page ${page}...`);
			const shows = await getShows(page);

			if (shows.length === 0) {
				hasMoreShows = false;
				continue;
			}

			console.log(`${shows.length} séries trouvées sur la page ${page}`);

			for (const show of shows) {
				console.log(`Traitement de la série: ${show.name}`);

				try {
					// Insérer la série
					await prisma.shows.upsert({
						where: { show_id: show.id },
						update: {
							title: show.name,
							summary: show.summary,
							image: show.image?.original || null,
						},
						create: {
							show_id: show.id,
							title: show.name,
							summary: show.summary,
							image: show.image?.original || null,
						},
					});

					// Insérer les genres
					for (const genreName of show.genres) {
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
								id_show: show.id,
								id_genre: dbGenre.id,
							},
						});

						// Créer la relation si elle n'existe pas
						if (!existingRelation) {
							await prisma.seriesGenres.create({
								data: {
									id_show: show.id,
									id_genre: dbGenre.id,
								},
							});
						}
					}

					// Insérer les plateformes (network et webChannel)
					const platforms = [
						{ ...show.network, type: "network" },
						{ ...show.webChannel, type: "webChannel" },
					].filter(Boolean);

					for (const platform of platforms) {
						if (!platform || !platform.name) continue;

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
								id_show: show.id,
								id_platform: dbPlatform.id,
							},
						});

						// Créer la relation si elle n'existe pas
						if (!existingRelation) {
							await prisma.seriesPlatforms.create({
								data: {
									id_show: show.id,
									id_platform: dbPlatform.id,
								},
							});
						}
					}

					// Récupérer et insérer les saisons
					const seasons = await getShowSeasons(show.id);
					for (const season of seasons) {
						// Insérer ou mettre à jour la saison
						await prisma.seasons.upsert({
							where: { season_id: season.id },
							update: {
								show_id: show.id,
								summary: season.summary,
								image: season.image?.original || null,
							},
							create: {
								season_id: season.id,
								show_id: show.id,
								summary: season.summary,
								image: season.image?.original || null,
							},
						});

						// Récupérer et insérer les épisodes de la saison
						const episodes = await getShowEpisodes(season.id);
						for (const episode of episodes) {
							await prisma.episodes.upsert({
								where: { episode_id: episode.id },
								update: {
									season_id: season.id,
									name: episode.name,
									season_number: episode.season,
									episode_number: episode.number,
									airdate: episode.airdate,
									summary: episode.summary,
									url: episode.url,
									image: episode.image?.original || null,
								},
								create: {
									episode_id: episode.id,
									season_id: season.id,
									name: episode.name,
									season_number: episode.season,
									episode_number: episode.number,
									airdate: episode.airdate,
									summary: episode.summary,
									url: episode.url,
									image: episode.image?.original || null,
								},
							});
						}
					}

					// Récupérer et insérer le casting
					const cast = await getShowCast(show.id);
					for (const castMember of cast) {
						// Insérer ou mettre à jour l'acteur
						await prisma.cast.upsert({
							where: { person_id: castMember.person.id },
							update: {
								name: castMember.person.name,
								image: castMember.person.image?.original || null,
							},
							create: {
								person_id: castMember.person.id,
								name: castMember.person.name,
								image: castMember.person.image?.original || null,
							},
						});

						// Insérer ou mettre à jour la relation acteur-série
						await prisma.showCast.upsert({
							where: {
								show_id_person_id: {
									show_id: show.id,
									person_id: castMember.person.id,
								},
							},
							update: {
								character_name: castMember.character.name,
							},
							create: {
								show_id: show.id,
								person_id: castMember.person.id,
								character_name: castMember.character.name,
							},
						});
					}

					console.log(`Série ${show.name} importée avec succès`);
				} catch (error) {
					console.error(
						`Erreur lors du traitement de la série ${show.name}:`,
						error
					);
					continue; // Continuer avec la série suivante en cas d'erreur
				}
			}

			page++;
		}

		console.log("Import terminé !");
	} catch (error) {
		console.error("Erreur lors de l'import:", error);
	} finally {
		await prisma.$disconnect();
	}
}

importShows();
