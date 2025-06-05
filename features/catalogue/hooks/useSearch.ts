"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export function useSearch() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const initialSearchQuery = searchParams.get("q") || "";
	const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}

		const handler = setTimeout(() => {
			const params = new URLSearchParams(searchParams.toString());
			if (searchQuery) {
				params.set("q", searchQuery);
			} else {
				params.delete("q");
			}
			params.set("page", "1");
			router.push(`/catalogue?${params.toString()}`);
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [searchQuery, router, searchParams]);

	return {
		searchQuery,
		setSearchQuery,
	};
}
