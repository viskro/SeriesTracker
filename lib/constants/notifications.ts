export const NOTIFICATION_DURATION = 3000;

export const NOTIFICATION_TYPES = {
	SUCCESS: "success",
	ERROR: "error",
	INFO: "info",
	WARNING: "warning",
} as const;

export const NOTIFICATION_MESSAGES = {
	EPISODE: {
		MARKED_AS_WATCHED: "Épisode marqué comme visionné",
		REMOVED_FROM_WATCHED: "Épisode retiré des visionnés",
		ERROR: "Une erreur est survenue lors de la mise à jour du statut",
	},
	SHOW: {
		ADDED_TO_FAVORITES: "Série ajoutée aux favoris",
		REMOVED_FROM_FAVORITES: "Série retirée des favoris",
		ERROR: "Une erreur est survenue lors de la mise à jour des favoris",
	},
	COMMENT: {
		ADDED: "Commentaire ajouté avec succès",
		REMOVED: "Commentaire supprimé avec succès",
		ERROR: "Une erreur est survenue lors de la gestion du commentaire",
	},
	AUTH: {
		LOGIN_SUCCESS: "Connexion réussie",
		LOGOUT_SUCCESS: "Déconnexion réussie",
		ERROR: "Une erreur est survenue lors de l'authentification",
	},
} as const;
