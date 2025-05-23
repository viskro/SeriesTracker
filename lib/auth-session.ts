import { headers } from "next/headers";
import { auth } from "./auth";

export const getUser = async () => {
	try {
		const session = await auth.api.getSession({
			headers: await headers(),
		});
		return session?.user;
	} catch (error) {
		console.error("Error getting user session:", error);
		return null;
	}
};
