"use client";

import { Section } from "@/components/Layout/Section";
import { useAuthStore } from "@/lib/stores/authStore";
import Image from "next/image";
import { ProgressionCard } from "./components/ProgressionCard";
import { ActiviteCard } from "./components/ActiviteCard";
import { ArchivesCard } from "./components/ArchivesCard";

export interface DashboardUserData {
    id: string;
    ShowComments: {
        content: string;
        postedAt: Date;
        user: {
            name: string;
        };
    }[];
    users_shows: {
        id_user: string;
        id_show: number;
        is_favorite: boolean | null;
        is_archived: boolean | null;
        status: "to_watch" | "ongoing" | "finished" | null;
        added_at: Date | null;
        shows: {
            show_id: number;
            title: string;
            image: string | null;
            summary: string | null;
        };
    }[];
    _count: {
        users_shows: number;
    };
    archivedShowsCount: number;
    countComments: number;
}

interface Props {
    userData: DashboardUserData;
}

export default function DashboardClient({ userData }: Props) {
    const { isLoading: authLoading } = useAuthStore();

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
                <div className="bg-background-secondary border-border-primary p-8 rounded-3xl shadow-lg">
                    <h1 className="mb-12 text-center text-3xl font-title text-text-primary">
                        Mon espace personnel
                    </h1>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        {/* Sidebar */}
                        <div className="space-y-6 md:col-span-1">
                            <ProgressionCard />
                            <ActiviteCard userData={userData} />
                            <ArchivesCard userData={userData} />
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-3 space-y-8">
                            <div className="bg-background-secondary border-border-primary p-6 rounded-2xl">
                                <h2 className="mb-2 text-xl font-title text-accent-primary">Séries</h2>
                                <p className="mb-6 text-sm text-text-primary/60">Toutes vos séries</p>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <div key={item} className="relative group">
                                            <div className="aspect-square bg-background-secondary rounded-xl overflow-hidden border border-border-primary group-hover:border-accent-primary/40 transition-all duration-300">
                                                <div className="flex h-full items-center justify-center">
                                                    <Image
                                                        src="https://placehold.co/400x400"
                                                        alt="Série"
                                                        width={400}
                                                        height={400}
                                                        className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 text-right">
                                    <button className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors duration-200">
                                        Voir tout
                                    </button>
                                </div>
                            </div>

                            <div className="bg-background-secondary border-border-primary p-6 rounded-2xl">
                                <h2 className="mb-2 text-xl font-title text-accent-primary">Vos favoris</h2>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                    {[1, 2, 3, 4].map((item) => (
                                        <div key={item} className="relative group">
                                            <div className="aspect-square bg-background-secondary rounded-xl overflow-hidden border border-border-primary group-hover:border-accent-primary/40 transition-all duration-300">
                                                <div className="flex h-full items-center justify-center">
                                                    <Image
                                                        src="https://placehold.co/400x400"
                                                        alt="Favori"
                                                        width={400}
                                                        height={400}
                                                        className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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

