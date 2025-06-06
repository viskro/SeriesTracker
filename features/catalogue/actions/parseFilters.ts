import { FilterType } from "@/features/catalogue/types/filters";
import { SearchParams } from "../types";

export function parseFilters(searchParams: SearchParams) {
	const { platform, category, initial, rating } = searchParams;

	// Construire les filtres
	const filters: Partial<Record<FilterType, string[]>> = {};
	if (platform) filters.platform = platform.split(",").filter(Boolean);
	if (category) filters.category = category.split(",").filter(Boolean);
	if (rating) filters.rating = rating.split(",").filter(Boolean);
	if (initial) filters.initial = initial.split(",").filter(Boolean);

	return filters;
}
