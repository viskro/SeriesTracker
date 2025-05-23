import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import translate from "translate";

translate.engine = "deepl";
translate.key = "c1f68271-2432-46d0-b1b4-d2980b8167b4:fx";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function trad(text: string | null) {
	// Nettoyer le texte des balises html
	const cleanText = (html: string) => html.replace(/<[^>]*>/g, "").trim();
	const synopsis = cleanText(text || "");

	// Traduire de l'anglais au français
	return await translate(synopsis, "fr");
}
