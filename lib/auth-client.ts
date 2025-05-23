import { createAuthClient } from "better-auth/react";

const baseURL =
	typeof window !== "undefined"
		? window.location.origin
		: "http://localhost:3000";

export const authClient = createAuthClient({
	baseURL,
	credentials: "include",
	headers: {
		"Content-Type": "application/json",
	},
	// Désactiver la vérification de session côté client
	skipSessionCheck: true,
});

export const { signIn, signOut, signUp, useSession } = authClient;
