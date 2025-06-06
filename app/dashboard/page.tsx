import { getDashboardData } from "@/features/dashboard/actions/getDashboardData";
import DashboardClient from "@/features/dashboard/components/DashboardClient";

export default async function Dashboard() {
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