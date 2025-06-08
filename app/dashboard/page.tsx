import { Suspense } from "react";
import { getDashboardData } from "@/features/dashboard/actions/getDashboardData";
import DashboardClient from "@/features/dashboard/components/DashboardClient";

// Composant de chargement pour le dashboard
function DashboardSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="h-40 bg-background-secondary/50 rounded-3xl mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="space-y-6 lg:col-span-1">
                    <div className="h-64 bg-background-secondary/50 rounded-2xl" />
                    <div className="h-48 bg-background-secondary/50 rounded-2xl" />
                    <div className="h-32 bg-background-secondary/50 rounded-2xl" />
                </div>
                <div className="space-y-6 sm:space-y-8 lg:col-span-3">
                    <div className="h-96 bg-background-secondary/50 rounded-2xl" />
                    <div className="h-80 bg-background-secondary/50 rounded-2xl" />
                </div>
            </div>
        </div>
    );
}

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

export const revalidate = 3600; // Revalider toutes les heures

export default function Dashboard() {
    return (
        <Suspense fallback={<DashboardSkeleton />}>
            <DashboardData />
        </Suspense>
    );
}