"use client";

import { cleanText } from "@/shared/utils/utils";
import { EpisodeWithShowId } from "../types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
    episodes: EpisodeWithShowId[];
    showId: number;
    seasonId: number;
}

export default function EpisodeList({ episodes, showId, seasonId }: Props) {
    const router = useRouter();

    return (
        <div className="grid grid-cols-1 gap-4">
            {episodes.map((episode) => (
                <div
                    key={episode.episode_id}
                    className="bg-background-secondary border border-border-primary rounded-xl p-6 hover:cursor-pointer hover:border-accent-primary/40 transition-all duration-300"
                    onClick={() =>
                        router.push(
                            `/catalogue/${showId}/saison/${seasonId}/episode/${episode.episode_id}`
                        )
                    }
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative w-full md:w-[200px] aspect-video rounded-lg overflow-hidden">
                            <Image
                                src={episode.image || "https://placehold.co/400x225"}
                                alt={episode.name}
                                fill
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
    );
} 