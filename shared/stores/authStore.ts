import { create } from "zustand";
import { UserData } from "@/shared/types/types";

interface AuthState {
	user: UserData | null;
	isLoading: boolean;
	isAuthenticated: boolean;
	setUser: (user: UserData | null) => void;
	setLoading: (loading: boolean) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	isLoading: true,
	isAuthenticated: false,
	setUser: (user) => set({ user, isAuthenticated: !!user }),
	setLoading: (loading) => set({ isLoading: loading }),
	logout: () => set({ user: null, isAuthenticated: false }),
}));
