"use client";

import { Section } from "@/components/Layout/Section";
import Image from "next/image";
import { useState } from "react";
import { Comment } from "@/app/catalogue/[id]/components/Comment";
import AddComment from "@/app/catalogue/[id]/components/AddComment";
import { markEpisodeAsWatched, markEpisodeAsUnwatched } from "./actions";
import { useShowStatus } from "@/lib/hooks/useShowStatus";

interface Comment {
    content: string;
    postedAt: Date;
    user: {
        name: string;
    };
}

interface Show {
    show_id: number;
    title: string;
    image: string | null;
}

interface Episode {
    episode_id: number;
    name: string;
    season_number: number;
    episode_number: number | null;
    airdate: string | null;
    summary: string | null;
    image: string | null;
}

interface Props {
    episode: Episode;
    show: Show;
    isWatched: boolean;
    comments: Comment[];
    userId?: string;
    synopsis: string;
}

export default function EpisodeClient({ episode, show, isWatched: initialIsWatched, comments, userId, synopsis }: Props) {
    const [isWatched, setIsWatched] = useState(initialIsWatched);
    const { handleEpisodeWatched } = useShowStatus();

    const handleWatchToggle = async () => {
        if (!userId) return;

        try {
            if (isWatched) {
                await markEpisodeAsUnwatched(episode.episode_id, userId);
                await handleEpisodeWatched(userId, show.show_id);
            } else {
                await markEpisodeAsWatched(episode.episode_id, userId);
                await handleEpisodeWatched(userId, show.show_id);
            }
            setIsWatched(!isWatched);
        } catch (error) {
            console.error('Erreur lors de la mise à jour du statut:', error);
        }
    };

    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-20 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 p-8">
                    <div className="relative w-full md:w-[400px] aspect-video rounded-2xl overflow-hidden group">
                        <Image
                            src={episode.image || show.image || "https://placehold.co/400x225"}
                            alt={`Image de l&apos;épisode ${episode.name}`}
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="flex flex-col gap-6 flex-1">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-title text-accent-primary">{show.title}</h1>
                            <h2 className="text-2xl font-title text-accent-primary">
                                Saison {episode.season_number} - Épisode {episode.episode_number}
                            </h2>
                            <h3 className="text-xl font-title text-primary">{episode.name}</h3>
                            {episode.airdate && (
                                <p className="text-primary/60">
                                    Diffusé le {new Date(episode.airdate).toLocaleDateString('fr-FR')}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-title text-accent-primary">Synopsis</h2>
                            <p className="text-primary/90 leading-relaxed">{synopsis}</p>
                        </div>
                        {userId && (
                            <button
                                onClick={handleWatchToggle}
                                className={`mt-4 px-6 py-3 rounded-xl font-title text-lg transition-colors duration-200 ${isWatched
                                    ? 'bg-accent-primary/20 text-accent-primary hover:bg-accent-primary/30'
                                    : 'bg-accent-primary text-white hover:bg-accent-primary/90'
                                    }`}
                            >
                                {isWatched ? 'Marquer comme non vu' : 'Marquer comme vu'}
                            </button>
                        )}
                    </div>
                </div>
            </Section>

            {userId && (
                <Section className="mt-20 relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                    <div className="w-full max-w-7xl mx-auto p-8">
                        <AddComment idShow={episode.episode_id} idUser={userId} />
                    </div>
                </Section>
            )}

            <Section className="mt-10 mb-20 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-8">
                    <h2 className="font-title text-2xl text-accent-primary mb-8">Commentaires ({comments.length})</h2>
                    {comments.length === 0 ? (
                        <p className="text-primary/80">Aucun commentaire pour le moment.</p>
                    ) : (
                        <div className="flex flex-col gap-4">
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
                    )}
                </div>
            </Section>
        </main>
    );
} 