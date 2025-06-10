"use client";

import { Section } from "@/features/layout/components/Section";
import Image from "next/image";
import { useState, memo } from "react";
import { Comment } from "@/features/showPage/components/Comment";
import AddEpisodeComment from "./AddEpisodeComment";
import { useEpisodeActions } from "../hooks/useEpisodeActions";
import { EpisodePageProps } from "../types";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CommentType } from "@/shared/types/types";

// Composant mémorisé pour les commentaires
const CommentsList = memo(({ comments }: { comments: CommentType[] }) => (
    <div className="space-y-6">
        {comments.map((comment, index) => (
            <Comment
                key={index}
                user={comment.user}
                content={comment.content}
                postedAt={comment.postedAt}
                className={index % 2 === 0 ? 'bg-background-secondary' : 'bg-border-primary'}
            />
        ))}
    </div>
));

CommentsList.displayName = 'CommentsList';

function EpisodeClientComponent({ episode, show, isWatched: initialIsWatched, comments, userId, synopsis }: EpisodePageProps) {
    const [isWatched, setIsWatched] = useState(initialIsWatched);
    const { isLoading, handleWatchToggle } = useEpisodeActions(episode.episode_id, userId || "", show.show_id);

    const onWatchToggle = async () => {
        const success = await handleWatchToggle(isWatched);
        if (success) {
            setIsWatched(!isWatched);
        }
    };


    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-10 sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                    <Link
                        href={`/catalogue/${show.show_id}/saison/${episode.seasons.season_id}`}
                        className="inline-flex items-center justify-start gap-2 text-primary/60 hover:text-accent-primary transition-colors duration-300 mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Retour à la saison</span>
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="relative w-full lg:w-[400px] aspect-video rounded-2xl overflow-hidden group shadow-xl">
                            <Image
                                src={episode.image || show.image || "https://placehold.co/400x225"}
                                alt={`Image de l'épisode ${episode.name}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                priority
                                quality={85}
                                loading="eager"
                            />
                        </div>

                        <div className="flex flex-col gap-6 flex-1">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-title text-text-primary">
                                        {show.title}
                                    </h1>
                                    <h2 className="text-xl sm:text-2xl font-title text-accent-primary">
                                        Saison {episode.season_number} - Épisode {episode.episode_number}
                                    </h2>
                                    <h3 className="text-lg sm:text-xl font-title text-text-primary">
                                        {episode.name}
                                    </h3>
                                </div>

                                {episode.airdate && (
                                    <div className="flex items-center gap-2 text-text-primary/80">
                                        <span>
                                            Diffusé le {new Date(episode.airdate).toLocaleDateString('fr-FR', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-3">
                                <h2 className="text-xl font-title text-accent-primary">
                                    Synopsis
                                </h2>
                                <p className={`leading-relaxed ${synopsis ? "text-primary/90" : "text-secondary/80"}`}>
                                    {synopsis ? synopsis : "Pas de synopsis pour cette saison."}
                                </p>
                            </div>

                            <button
                                onClick={onWatchToggle}
                                disabled={isLoading}
                                className={`mt-4 w-full sm:w-auto px-6 py-3 rounded-xl font-title text-base sm:text-lg transition-colors duration-200 hover:cursor-pointer ${isWatched
                                    ? 'bg-accent-primary/20 text-accent-primary hover:bg-accent-primary/30'
                                    : 'bg-accent-primary text-white hover:bg-accent-primary/90'
                                    }`}
                            >
                                {isWatched ? 'Marquer comme non vu' : 'Marquer comme vu'}
                            </button>
                        </div>
                    </div>
                </div>
            </Section>

            {userId && (
                <Section className="mt-10 sm:mt-5 relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                    <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                        <AddEpisodeComment userId={userId} episodeId={episode.episode_id} />
                    </div>
                </Section>
            )}

            <Section className="mt-10 sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                    <CommentsList comments={comments} />
                </div>
            </Section>
        </main>
    );
}

export default memo(EpisodeClientComponent); 