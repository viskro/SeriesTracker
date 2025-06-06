import { notFound } from "next/navigation";
import PageClient from "./PageClient";
import { getUser } from "@/shared/lib/auth-session";
import { cleanText } from "@/shared/utils/utils";
import { getShowDetails } from "@/features/showPage/actions/getShowDetails";
import { getUserShowState } from "@/features/showPage/hooks/useUserShowState";

type PageProps = {
    params: Promise<{ id: string }>
};

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const user = await getUser();

    const showId = parseInt(id);

    if (isNaN(showId)) {
        notFound();
    }

    const showDetails = await getShowDetails(showId);
    if (!showDetails) {
        notFound();
    }

    const { show, averageRating, totalRatings, cast, seasons, genres, platforms } = showDetails;
    const { isInList, isFavorite, currentRating } = await getUserShowState(user?.id, showId);


    const synopsis: string | null | undefined = cleanText(show.summary);


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