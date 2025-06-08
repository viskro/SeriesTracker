import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageClient from "../../../features/showPage/components/PageClient";
import { getUser } from "@/shared/lib/auth-session";
import { cleanText } from "@/shared/utils/utils";
import { getShowDetails } from "@/features/showPage/actions/getShowDetails";
import { getUserShowState } from "@/features/showPage/hooks/useUserShowState";

// Composant de chargement pour les détails de la série
function ShowDetailsSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="h-96 bg-background-secondary/50 rounded-3xl mb-8" />
            <div className="space-y-4">
                <div className="h-8 bg-background-secondary/50 rounded w-1/3" />
                <div className="h-4 bg-background-secondary/50 rounded w-2/3" />
                <div className="h-4 bg-background-secondary/50 rounded w-1/2" />
            </div>
        </div>
    );
}

// Composant pour les détails de la série
async function ShowDetails({ showId }: { showId: number }) {
    const user = await getUser();
    const showDetails = await getShowDetails(showId);

    if (!showDetails) {
        notFound();
    }

    const { show, averageRating, totalRatings, cast, seasons, genres, platforms } = showDetails;
    const { isInList, isFavorite, currentRating } = await getUserShowState(user?.id, showId);
    const synopsis = cleanText(show.summary);

    return (
        <PageClient
            show={show}
            isInList={isInList}
            isFavorite={isFavorite}
            currentRating={currentRating}
            averageRating={averageRating}
            totalRatings={totalRatings}
            cast={cast}
            seasons={seasons}
            synopsis={synopsis}
            genres={genres}
            platforms={platforms}
        />
    );
}

export const revalidate = 3600; // Revalider toutes les heures

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const showId = parseInt(id);

    if (isNaN(showId)) {
        notFound();
    }

    return (
        <Suspense fallback={<ShowDetailsSkeleton />}>
            <ShowDetails showId={showId} />
        </Suspense>
    );
}