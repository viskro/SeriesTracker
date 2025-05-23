import { useEffect } from "react";
import { useAuthStore } from "@/lib/stores/authStore";
import { useSession } from "@/lib/auth-client";

export function useSessionSync() {
	const { data, isPending } = useSession();
	const { setUser, setLoading } = useAuthStore();

	useEffect(() => {
		setLoading(isPending);
		if (!isPending && data?.user) {
			setUser(data.user);
		}
	}, [data, isPending, setUser, setLoading]);
}
