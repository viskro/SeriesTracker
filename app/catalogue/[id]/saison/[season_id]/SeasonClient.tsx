"use client";

import { Section } from "@/features/layout/components/Section";
import { Episodes, Seasons } from "@/generated/prisma";
import { Show } from "@/shared/types/types";
import { cleanText } from "@/shared/utils/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
            <Section className="mt-20 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 p-8">
                    <div className="relative w-full md:w-[400px] aspect-[2/3] rounded-2xl overflow-hidden group">
                        <Image
                            src={
                                season.image || show.image || "https://placehold.co/400x400"
                            }
                            alt={`Affiche de ${show.title}`}
                            fill
                            sizes="100%"
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
            </Section>

            <Section className="mt-20 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-8">
                    <h2 className="font-title text-2xl text-accent-primary mb-8">
                        Épisodes
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                        {episodes.map((episode) => (
                            <div
                                key={episode.episode_id}
                                className="bg-background-secondary border border-border-primary rounded-xl p-6 hover:cursor-pointer hover:border-accent-primary/40 transition-all duration-300"
                                onClick={() =>
                                    router.push(
                                        `/catalogue/${show.show_id}/saison/${season.season_id}/episode/${episode.episode_id}`
                                    )
                                }
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="relative w-full md:w-[200px] aspect-video rounded-lg overflow-hidden">
                                        <Image
                                            src={episode.image || "https://placehold.co/400x225"}
                                            alt={episode.name}
                                            fill
                                            sizes="100%"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-title text-accent-primary">
                                                {episode.episode_number}. {episode.name}
                                            </h3>
                                            {episode.airdate && (
                                                <p className="text-secondary">
                                                    Diffusé le{" "}
                                                    {new Date(episode.airdate).toLocaleDateString(
                                                        "fr-FR"
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                        {episode.summary && (
                                            <p className="text-primary leading-relaxed">
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