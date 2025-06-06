import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const cleanText = (html: string | null | undefined) =>
	html?.replace(/<[^>]*>/g, "").trim();
