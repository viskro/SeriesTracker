import { notFound } from "next/navigation";
import { getSeasonDetails } from "@/features/seasonPage/actions/getSeasonDetails";
import SeasonClient from "@/features/seasonPage/components/SeasonClient";
import { trad } from "@/lib/utils";

export default async function Page({ params }: { params: Promise<{ season_id: string }> }) {
    const { season_id } = await params;
    const seasonId = parseInt(season_id);

    if (isNaN(seasonId)) {
        notFound();
    }

    const seasonData = await getSeasonDetails(seasonId);

    if (!seasonData) {
        notFound();
    }

    const { season, episodes } = seasonData;

    const synopsis: string | null = await trad(seasonData.season.summary);
    



    return (
        <SeasonClient
            season={season}
            show={season.shows}
            episodes={episodes}
            synopsis={synopsis}
        />
    );
}
