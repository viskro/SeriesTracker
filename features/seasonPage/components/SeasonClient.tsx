"use client";

import { Section } from "@/features/layout/components/Section";
import { SeasonPageProps } from "../types";
import Image from "next/image";
import EpisodeList from "./EpisodeList";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SeasonClient({ season, show, episodes, synopsis }: SeasonPageProps) {
    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-20 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="flex flex-col flex-1 p-8 ">
                    <Link
                        href={`/catalogue/${show.show_id}`}
                        className="inline-flex items-center justify-start gap-2 text-primary/60 hover:text-accent-primary transition-colors duration-300 mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Retour au tableau de bord</span>
                    </Link>
                    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                        <div className="relative w-full md:w-[400px] aspect-[2/3] rounded-2xl overflow-hidden group">
                            <Image
                                src={
                                    season.image || show.image || "https://placehold.co/400x400"
                                }
                                alt={`Affiche de ${show.title}`}
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col gap-6 flex-1">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-title text--primary">
                                    {show.title}
                                </h1>
                                <h2 className="text-2xl font-title text-accent-primary">
                                    Saison {episodes[0]?.season_number || season.season_id}
                                </h2>
                                <p className="text--primary/90">
                                    Nombre d&apos;épisodes : {episodes.length}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-xl font-title text-accent-primary">
                                    Synopsis
                                </h2>
                                <p className="text--primary/90 leading-relaxed">
                                    {synopsis}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="mt-20 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-8">
                    <h2 className="font-title text-2xl text-accent-primary mb-8">
                        Épisodes
                    </h2>
                    <EpisodeList
                        episodes={episodes}
                        showId={show.show_id}
                        seasonId={season.season_id}
                    />
                </div>
            </Section>
        </main>
    );
} 