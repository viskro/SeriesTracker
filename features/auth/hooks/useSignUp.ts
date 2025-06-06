"use client";

import { useState } from "react";
import { signUp } from "@/shared/lib/auth-client";
import { useAuthStore } from "@/shared/stores/authStore";
import { useUIStore } from "@/shared/stores/uiStore";
import {
	NOTIFICATION_DURATION,
	NOTIFICATION_TYPES,
	NOTIFICATION_MESSAGES,
} from "@/shared/constants/notifications";
import { v4 as uuidv4 } from "uuid";
import { SignUpFormData } from "../types";
import { UserData } from "@/shared/types/types";

export function useSignUp() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const setUser = useAuthStore((state) => state.setUser);
	const { addNotification } = useUIStore();

	const validateForm = (data: SignUpFormData) => {
		if (
			!data.username ||
			!data.email ||
			!data.password ||
			!data.confirmPassword
		) {
			setError("Tous les champs sont obligatoires");
			return false;
		}

		if (!data.email.includes("@") || !data.email.includes(".")) {
			setError("L'email n'est pas valide");
			return false;
		}

		if (data.password.length < 6) {
			setError("Le mot de passe doit contenir au moins 6 caractères");
			return false;
		}

		if (data.password !== data.confirmPassword) {
			setError("Les mots de passe ne correspondent pas");
			return false;
		}

		if (!data.acceptTerms) {
			setError("Vous devez accepter les conditions d'utilisation");
			return false;
		}

		return true;
	};

	const handleSignUp = async (data: SignUpFormData) => {
		if (!validateForm(data)) {
			return;
		}

		try {
			await signUp.email(
				{
					email: data.email,
					password: data.password,
					name: data.username,
					callbackURL: "/dashboard",
				},
				{
					onRequest: () => {
						setLoading(true);
						setError("");
					},
					onResponse: () => {
						setLoading(false);
					},
					onSuccess: (context) => {
						setLoading(false);
						if (context.data?.user) {
							setUser(context.data.user as UserData);
							addNotification({
								id: uuidv4(),
								type: NOTIFICATION_TYPES.SUCCESS,
								message: NOTIFICATION_MESSAGES.AUTH.LOGIN_SUCCESS,
								duration: NOTIFICATION_DURATION,
							});
						}
					},
					onError: (error) => {
						setLoading(false);
						setError(
							error.error.message ||
								"Une erreur s'est produite lors de l'inscription"
						);
						addNotification({
							id: uuidv4(),
							type: NOTIFICATION_TYPES.ERROR,
							message: `${NOTIFICATION_MESSAGES.AUTH.ERROR} : ${error.error.message}`,
							duration: NOTIFICATION_DURATION,
						});
					},
				}
			);
		} catch {
			setLoading(false);
			setError("Une erreur inattendue s'est produite");
			addNotification({
				id: uuidv4(),
				type: NOTIFICATION_TYPES.ERROR,
				message: NOTIFICATION_MESSAGES.AUTH.ERROR,
				duration: NOTIFICATION_DURATION,
			});
		}
	};

	return {
		loading,
		error,
		handleSignUp,
	};
}
