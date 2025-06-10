import { Suspense } from "react";
import { getDashboardData } from "@/features/dashboard/actions/getDashboardData";
import DashboardClient from "@/features/dashboard/components/DashboardClient";
import DashboardSkeleton from "./loading";

// Composant de chargement pour le dashboard


// Composant pour les données du dashboard
async function DashboardData() {
    const {
        userData,
        fiveShows,
        fourFavorites,
        lastEpisodeWatched,
        countShowsFinished,
        countShowsOngoing,
        totalCatalogueShows,
        totalUserListShows,
        timeSpent,
        timeTowatch
    } = await getDashboardData();

    return (
        <DashboardClient
            userData={userData}
            fiveShows={fiveShows}
            fourFavorites={fourFavorites}
            lastEpisodeWatched={lastEpisodeWatched}
            countShowsFinished={countShowsFinished}
            countShowsOngoing={countShowsOngoing}
            totalCatalogueShows={totalCatalogueShows}
            totalUserListShows={totalUserListShows}
            timeSpent={timeSpent}
            timeTowatch={timeTowatch}
        />
    );
}

export default function Dashboard() {
    return (
        <Suspense fallback={<DashboardSkeleton />}>
            <DashboardData />
        </Suspense>
    );
}