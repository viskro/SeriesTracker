"use client";

import { Section } from "@/features/layout/components/Section";
import { useAuthStore } from "@/shared/stores/authStore";
import Image from "next/image";
import { ProgressionCard } from "./ProgressionCard";
import { ActiviteCard } from "./ActiviteCard";
import { ArchivesCard } from "./ArchivesCard";
import { useRouter } from "next/navigation";
import { DashboardProps } from "../types";
import { memo } from "react";

// Composant mémorisé pour une série
const ShowCard = memo(({ show, onClick }: { show: { show_id: number, image: string | null, title: string }, onClick: () => void }) => (
    <div
        className="relative group hover:cursor-pointer"
        onClick={onClick}
    >
        <div className="aspect-[2/3] bg-background-secondary rounded-xl overflow-hidden border border-border-primary group-hover:border-accent-primary/40 transition-all duration-300">
            <Image
                src={show.image || "https://placehold.co/400x400"}
                alt={show.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={75}
                className="object-cover transform group-hover:scale-105 transition-transform duration-300 rounded-xl"
            />
        </div>
    </div>
));

ShowCard.displayName = 'ShowCard';

// Composant mémorisé pour la liste des séries
const ShowsList = memo(({ shows, emptyMessage, onShowClick }: {
    shows: Array<{ show_id: number, image: string | null, title: string }>,
    emptyMessage: string,
    onShowClick: (showId: number) => void
}) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {shows.length === 0 ? (
            <p className="col-span-full text-sm text-text-primary/60">
                {emptyMessage}
            </p>
        ) : (
            shows.map((show) => (
                <ShowCard
                    key={show.show_id}
                    show={show}
                    onClick={() => onShowClick(show.show_id)}
                />
            ))
        )}
    </div>
));

ShowsList.displayName = 'ShowsList';

function DashboardClientComponent({
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
}: DashboardProps) {
    const { isLoading: authLoading } = useAuthStore();
    const router = useRouter();

    if (authLoading) {
        return (
            <Section className="mt-10 sm:mt-5">
                <div className="flex items-center justify-center h-40">
                    <p className="text-text-primary">Chargement...</p>
                </div>
            </Section>
        );
    }

    const handleShowClick = (showId: number) => {
        router.push("/catalogue/" + showId.toString());
    };

    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-10 sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                    <h1 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-title text-text-primary">
                        Votre espace personnel
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
                        {/* Sidebar */}
                        <div className="space-y-6 lg:col-span-1">
                            <ProgressionCard
                                userData={userData}
                                countShowsFinished={countShowsFinished}
                                countShowsOngoing={countShowsOngoing}
                                totalCatalogueShows={totalCatalogueShows}
                                totalUserListShows={totalUserListShows}
                                timeSpent={timeSpent}
                                timeTowatch={timeTowatch}
                            />

                            <ActiviteCard
                                userData={userData}
                                lastEpisodeWatched={lastEpisodeWatched}
                            />

                            <ArchivesCard userData={userData} />
                        </div>

                        {/* Main Content */}
                        <div className="space-y-6 sm:space-y-8 lg:col-span-3">
                            <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary hover:border-accent-primary/40 transition-all duration-300 p-4 sm:p-6 rounded-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <h2 className="text-xl font-title text-accent-primary">
                                        Votre liste
                                    </h2>
                                </div>
                                <ShowsList
                                    shows={fiveShows}
                                    emptyMessage="Vous n'avez pas encore de série dans votre liste."
                                    onShowClick={handleShowClick}
                                />
                                <div className="mt-4 text-right">
                                    <button
                                        className="hover:cursor-pointer text-sm text-accent-primary hover:text-accent-primary/80 transition-colors duration-200"
                                        onClick={() => router.push("/dashboard/liste")}
                                    >
                                        Voir tout
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary hover:border-accent-primary/40 transition-all duration-300 p-4 sm:p-6 rounded-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <h2 className="text-xl font-title text-accent-primary">
                                        Vos favoris
                                    </h2>
                                </div>
                                <ShowsList
                                    shows={fourFavorites}
                                    emptyMessage={userData.users_shows.length === 0
                                        ? "Vous n'avez pas encore de série dans votre liste."
                                        : "Vous n'avez pas encore de série dans vos favoris."}
                                    onShowClick={handleShowClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default memo(DashboardClientComponent); 