"use client";

import { useState } from "react";
import { signIn } from "@/shared/lib/auth-client";
import { useUIStore } from "@/shared/stores/uiStore";
import {
	NOTIFICATION_DURATION,
	NOTIFICATION_TYPES,
	NOTIFICATION_MESSAGES,
} from "@/shared/constants/notifications";
import { v4 as uuidv4 } from "uuid";
import { SignInFormData } from "../types";

export function useSignIn() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const { addNotification } = useUIStore();

	const validateForm = (data: SignInFormData) => {
		if (!data.email || !data.password) {
			setError("Tous les champs sont obligatoires");
			return false;
		}

		if (!data.email.includes("@") || !data.email.includes(".")) {
			setError("L'email n'est pas valide");
			return false;
		}

		return true;
	};

	const handleSignIn = async (data: SignInFormData) => {
		if (!validateForm(data)) {
			return;
		}

		try {
			setLoading(true);
			await signIn.email(
				{
					email: data.email,
					password: data.password,
					rememberMe: data.rememberMe,
				},
				{
					onRequest: () => {
						setError("");
					},
					onResponse: () => {
						setLoading(false);
					},
					onError: (error) => {
						setLoading(false);
						setError(
							error.error.message ||
								"Une erreur s'est produite lors de la connexion"
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
		handleSignIn,
	};
}
