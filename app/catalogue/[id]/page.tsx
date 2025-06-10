import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageClient from "../../../features/showPage/components/PageClient";
import { getUser } from "@/shared/lib/auth-session";
import { cleanText } from "@/shared/utils/utils";
import { getShowDetails } from "@/features/showPage/actions/getShowDetails";
import { getUserShowState } from "@/features/showPage/hooks/useUserShowState";
import ShowDetailsSkeleton from "./loading"


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