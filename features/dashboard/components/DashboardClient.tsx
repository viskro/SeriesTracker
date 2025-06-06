"use client";

import { Section } from "@/features/layout/components/Section";
import { useAuthStore } from "@/shared/stores/authStore";
import Image from "next/image";
import { ProgressionCard } from "./ProgressionCard";
import { ActiviteCard } from "./ActiviteCard";
import { ArchivesCard } from "./ArchivesCard";
import { useRouter } from "next/navigation";
import { DashboardProps } from "../types";

export default function DashboardClient({
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
            <Section className="mt-20">
                <div className="flex items-center justify-center h-40">
                    <p className="text-primary">Chargement...</p>
                </div>
            </Section>
        );
    }

    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-20 mx-auto max-w-7xl px-4">
                <div className="bg-gradient-to-br from-background-secondary to-background-primary border-border-primary p-8 rounded-3xl shadow-lg">
                    <h1 className="mb-12 text-center text-3xl font-title text-text-primary">
                        Votre espace personnel
                    </h1>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        {/* Sidebar */}
                        <div className="space-y-6 md:col-span-1">
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
                        <div className="md:col-span-3 space-y-8">
                            <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary hover:border-accent-primary/40 transition-all duration-300 p-6 rounded-2xl">
                                <h2 className="mb-2 text-xl font-title text-accent-primary">
                                    Votre liste
                                </h2>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                                    {userData.users_shows.length == 0 ? (
                                        <p className="col-span-12 text-sm text-secondary">
                                            Vous n&apos;avez pas encore de série dans votre liste.
                                        </p>
                                    ) : (
                                        fiveShows.map((show) => (
                                            <div
                                                key={show.show_id}
                                                className="relative group hover:cursor-pointer"
                                                onClick={() => {
                                                    router.push(
                                                        "/catalogue/" + show.show_id.toString()
                                                    );
                                                }}
                                            >
                                                <div className="aspect-auto bg-background-secondary rounded-xl overflow-hidden border border-border-primary group-hover:border-accent-primary/40 transition-all duration-300">
                                                    <div className="flex h-full items-center justify-center">
                                                        <Image
                                                            src={
                                                                show.image || "https://placehold.co/400x400"
                                                            }
                                                            alt="Série"
                                                            width={400}
                                                            height={400}
                                                            className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className="mt-4 text-right">
                                    <button
                                        className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors duration-200 hover:cursor-pointer"
                                        onClick={() => router.push("/dashboard/liste")}
                                    >
                                        Voir tout
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary hover:border-accent-primary/40 transition-all duration-300 p-6 rounded-2xl">
                                <h2 className="mb-2 text-xl font-title text-accent-primary">
                                    Vos favoris
                                </h2>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                    {userData.users_shows.length == 0 ? (
                                        <p className="col-span-12 text-sm text-secondary">
                                            Vous n&apos;avez pas encore de série dans votre liste.
                                        </p>
                                    ) : fourFavorites.length == 0 ? (
                                        <p className="col-span-12 text-sm text-secondary">
                                            Vous n&apos;avez pas encore de série dans vos favoris.
                                        </p>
                                    ) : (
                                        fourFavorites.map((show) => (
                                            <div
                                                key={show.show_id}
                                                className="relative group hover:cursor-pointer"
                                                onClick={() => {
                                                    router.push(
                                                        "/catalogue/" + show.show_id.toString()
                                                    );
                                                }}
                                            >
                                                <div className="aspect-auto bg-background-secondary rounded-xl overflow-hidden border border-border-primary group-hover:border-accent-primary/40 transition-all duration-300">
                                                    <div className="flex h-full items-center justify-center">
                                                        <Image
                                                            src={
                                                                show.image || "https://placehold.co/400x400"
                                                            }
                                                            alt="Favori"
                                                            width={400}
                                                            height={400}
                                                            className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className="mt-4 text-right">
                                    <button className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors duration-200">
                                        Voir tout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
} 