import { useSession } from "@/lib/auth-client";
import { useAuthStore } from "@/lib/stores/authStore";
import { useEffect, useState } from "react";

export const useAuth = () => {
	const { data: session, isPending } = useSession();
	const { user, setUser, setLoading } = useAuthStore();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setLoading(isPending);
		if (!isPending && session?.user) {
			setUser(session.user);
		}
	}, [session, isPending, setUser, setLoading]);

	useEffect(() => {
		if (!isPending) {
			setIsLoading(false);
		}
	}, [isPending]);

	return {
		isLoading,
		userId: user?.id || null,
		isAuthenticated: !!user?.id,
		status: isPending ? "loading" : "authenticated",
	};
};
