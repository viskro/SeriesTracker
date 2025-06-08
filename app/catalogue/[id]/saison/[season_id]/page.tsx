import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getSeasonDetails } from "@/features/seasonPage/actions/getSeasonDetails";
import SeasonClient from "@/features/seasonPage/components/SeasonClient";
import { cleanText } from "@/shared/utils/utils";

// Composant de chargement pour les détails de la saison
function SeasonDetailsSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="h-64 bg-background-secondary/50 rounded-3xl mb-6" />
            <div className="space-y-4">
                <div className="h-8 bg-background-secondary/50 rounded w-1/4" />
                <div className="h-4 bg-background-secondary/50 rounded w-1/2" />
                <div className="h-4 bg-background-secondary/50 rounded w-3/4" />
            </div>
        </div>
    );
}

// Composant pour les détails de la saison
async function SeasonDetails({ seasonId }: { seasonId: number }) {
    const seasonData = await getSeasonDetails(seasonId);

    if (!seasonData) {
        notFound();
    }

    const { season, episodes } = seasonData;
    const synopsis = cleanText(seasonData.season.summary);

    return (
        <SeasonClient
            season={season}
            show={season.shows}
            episodes={episodes}
            synopsis={synopsis}
        />
    );
}

export const revalidate = 3600; // Revalider toutes les heures

export default async function Page({ params }: { params: Promise<{ season_id: string }> }) {
    const { season_id } = await params;
    const seasonId = parseInt(season_id);

    if (isNaN(seasonId)) {
        notFound();
    }

    return (
        <Suspense fallback={<SeasonDetailsSkeleton />}>
            <SeasonDetails seasonId={seasonId} />
        </Suspense>
    );
}
