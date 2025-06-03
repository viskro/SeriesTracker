import { create } from "zustand";

interface UIState {
	isMenuOpen: boolean;
	currentTheme: "light" | "dark";
	notifications: Notification[];
	toggleMenu: () => void;
	setTheme: (theme: "light" | "dark") => void;
	addNotification: (notification: Notification) => void;
	removeNotification: (id: string) => void;
}

interface Notification {
	id: string;
	type: "success" | "error" | "info" | "warning";
	message: string;
	duration?: number;
}

export const useUIStore = create<UIState>((set) => ({
	isMenuOpen: false,
	currentTheme: "dark",
	notifications: [],
	toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
	setTheme: (theme) => set({ currentTheme: theme }),
	addNotification: (notification) =>
		set((state) => ({
			notifications: [...state.notifications, notification],
		})),
	removeNotification: (id) =>
		set((state) => ({
			notifications: state.notifications.filter((n) => n.id !== id),
		})),
}));
