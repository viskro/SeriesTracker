"use client";

import { Section } from "@/features/layout/components/Section";
import { Episodes, Seasons } from "@/generated/prisma";
import { Show } from "@/shared/types/types";
import { cleanText } from "@/shared/utils/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, Tv, Calendar, Play } from "lucide-react";
import Link from "next/link";

interface Props {
    season: Seasons;
    show: Show;
    episodes: Episodes[];
    synopsis: string;
}

export default function SeasonClient({ season, show, episodes, synopsis }: Props) {
    const router = useRouter();

    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-10 !sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                    <Link
                        href={`/catalogue/${show.show_id}`}
                        className="inline-flex items-center justify-start gap-2 text-primary/60 hover:text-accent-primary transition-colors duration-300 mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Retour à la série</span>
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="relative w-full lg:w-[400px] aspect-[2/3] rounded-2xl overflow-hidden group shadow-xl">
                            <Image
                                src={season.image || show.image || "https://placehold.co/400x400"}
                                alt={`Affiche de ${show.title}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>

                        <div className="flex flex-col gap-6 flex-1">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-title text-text-primary">
                                        {show.title}
                                    </h1>
                                    <h2 className="text-xl sm:text-2xl font-title text-accent-primary">
                                        Saison {episodes[0]?.season_number || season.season_id}
                                    </h2>
                                </div>

                                <div className="flex items-center gap-2 text-text-primary/80">
                                    <Tv className="w-5 h-5 text-accent-primary" />
                                    <span>{episodes.length} épisodes</span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-accent-primary" />
                                        <h2 className="text-xl font-title text-accent-primary">
                                            Synopsis
                                        </h2>
                                    </div>
                                    <p className="text-text-primary/90 leading-relaxed">
                                        {synopsis}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="mt-10 !sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                    <div className="flex items-center gap-2 mb-6 sm:mb-8">
                        <Play className="w-6 h-6 text-accent-primary" />
                        <h2 className="font-title text-xl sm:text-2xl text-accent-primary">
                            Épisodes
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {episodes.map((episode) => (
                            <div
                                key={episode.episode_id}
                                className="bg-background-secondary border border-border-primary rounded-xl p-4 sm:p-6 hover:cursor-pointer hover:border-accent-primary/40 hover:shadow-lg transition-all duration-300 group"
                                onClick={() =>
                                    router.push(
                                        `/catalogue/${show.show_id}/saison/${season.season_id}/episode/${episode.episode_id}`
                                    )
                                }
                            >
                                <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                                    <div className="relative w-full md:w-[200px] aspect-video rounded-lg overflow-hidden">
                                        <Image
                                            src={episode.image || "https://placehold.co/400x225"}
                                            alt={episode.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 200px"
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="flex-1 space-y-3 sm:space-y-4">
                                        <div className="space-y-1 sm:space-y-2">
                                            <h3 className="text-lg sm:text-xl font-title text-accent-primary">
                                                {episode.episode_number}. {episode.name}
                                            </h3>
                                            {episode.airdate && (
                                                <p className="text-text-primary/60 text-sm sm:text-base">
                                                    Diffusé le{" "}
                                                    {new Date(episode.airdate).toLocaleDateString(
                                                        "fr-FR",
                                                        {
                                                            day: "numeric",
                                                            month: "long",
                                                            year: "numeric"
                                                        }
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                        {episode.summary && (
                                            <p className="text-text-primary/90 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-4">
                                                {cleanText(episode.summary)}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}