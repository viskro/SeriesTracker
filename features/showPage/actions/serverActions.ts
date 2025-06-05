"use server";

import { revalidatePath } from "next/cache";

export async function revalidateShowPage(showId: number) {
	revalidatePath(`/catalogue/${showId}`);
}

export async function revalidateShowPageWithSeason(
	showId: number,
	seasonId: number
) {
	revalidatePath(`/catalogue/${showId}/saison/${seasonId}`);
}
