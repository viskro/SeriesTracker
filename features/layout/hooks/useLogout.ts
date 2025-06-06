import { signOut } from "@/shared/lib/auth-client";
import {
	NOTIFICATION_DURATION,
	NOTIFICATION_TYPES,
	NOTIFICATION_MESSAGES,
} from "@/shared/constants/notifications";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/shared/stores/authStore";
import { useUIStore } from "@/shared/stores/uiStore";

export function useLogout() {
	const { logout } = useAuthStore();
	const router = useRouter();
	const { addNotification } = useUIStore();
	return async () => {
		try {
			await signOut();
			logout();
			addNotification({
				id: uuidv4(),
				type: NOTIFICATION_TYPES.SUCCESS,
				message: NOTIFICATION_MESSAGES.AUTH.LOGOUT_SUCCESS,
				duration: NOTIFICATION_DURATION,
			});
			router.push("/");
		} catch (error) {
			addNotification({
				id: uuidv4(),
				type: NOTIFICATION_TYPES.ERROR,
				message: `${NOTIFICATION_MESSAGES.AUTH.ERROR} : ${error}`,
				duration: NOTIFICATION_DURATION,
			});
		}
	};
}

export const handleSignOut = async () => {};
