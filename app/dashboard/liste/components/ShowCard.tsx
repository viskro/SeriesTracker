'use client';

import { Badge } from '@/components/shadcn/badge';
import { Card } from '@/components/shadcn/card';
import { Calendar, Play, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ShowCardProps {
    show_id: number;
    title: string;
    image: string | null;
    status: 'to_watch' | 'ongoing' | 'finished' | null;
    added_at: Date | null;
    current_season: number | null;
    current_episode: number | null;
    total_episodes: number;
    watched_episodes: number;
    total_seasons: number;
    season_episodes: {
        season_id: number;
        episodes: number;
    }[];
}

const statusConfig = {
    to_watch: {
        icon: <Calendar className="w-4 h-4" />,
        label: 'À voir',
    },
    ongoing: {
        icon: <Play className="w-4 h-4" />,
        label: 'En cours',
    },
    finished: {
        icon: <CheckCircle className="w-4 h-4" />,
        label: 'Terminée',
    }
};

export function ShowCard({
    show_id,
    title,
    image,
    status,
    added_at,
    current_season,
    current_episode,
    total_episodes,
    watched_episodes,
    total_seasons,
    season_episodes
}: ShowCardProps) {
    const router = useRouter();
    const statusInfo = status ? statusConfig[status] : statusConfig.to_watch;

    const getNextEpisode = () => {
        if (!current_season || !current_episode) return { season: 1, episode: 1 };

        // Si c'est le dernier épisode de la dernière saison
        if (current_season === total_seasons && current_episode === total_episodes) {
            return { season: current_season, episode: current_episode };
        }

        // Trouver le nombre d'épisodes de la saison actuelle
        const currentSeasonEpisodes = season_episodes.find(s => s.season_id === current_season)?.episodes ?? 0;

        // Si c'est exactement le dernier épisode de la saison actuelle
        if (current_episode === currentSeasonEpisodes) {
            // Vérifier si la saison suivante existe
            const nextSeason = current_season + 1;
            if (nextSeason <= total_seasons) {
                return { season: nextSeason, episode: 1 };
            }
            // Si pas de saison suivante, rester sur le dernier épisode
            return { season: current_season, episode: currentSeasonEpisodes };
        }

        // Sinon, on passe à l'épisode suivant de la même saison
        return { season: current_season, episode: current_episode + 1 };
    };

    const nextEpisode = getNextEpisode();

    return (
        <Card
            className="group bg-gradient-to-br from-background-secondary to-background-primary border-border-primary hover:border-accent-primary/40 hover:shadow-lg hover:shadow-accent-primary/10 transition-all duration-300 cursor-pointer overflow-hidden"
            onClick={() => router.push(`/catalogue/${show_id}`)}
        >
            <div className="relative aspect-[2/3]">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes='100%'
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-background-secondary flex items-center justify-center">
                        <span className="text-primary/40">Pas d&apos;image</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-background-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className={`absolute top-2 right-2`} variant={status}>
                    <div className="flex items-center gap-1">
                        {statusInfo.icon}
                        <span>{statusInfo.label}</span>
                    </div>
                </Badge>
            </div>
            <div className="p-4 space-y-2">
                <h3 className="font-title text-lg text-primary group-hover:text-accent-primary transition-colors duration-300">{title}</h3>
                {added_at && (
                    <p className="text-sm text-secondary">
                        Ajouté le {new Date(added_at).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                    </p>
                )}
                {
                    (status === "finished" || status === "ongoing") && current_season && current_episode && (
                        <div className="pt-2">
                            <div className="flex justify-between text-sm text-secondary mb-1">
                                <span>Progression</span>
                                <span>{watched_episodes}/{total_episodes}</span>
                            </div>
                            <div className="h-1.5 bg-border-primary rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-accent-primary rounded-full transition-all duration-300"
                                    style={{ width: `${(watched_episodes / total_episodes) * 100}%` }}
                                />
                            </div>
                            {status === "finished" ? (
                                <p className="text-md font-title text-accent-primary text-center mt-2">
                                    C&apos;est fini !
                                </p>
                            ) : (
                                <p className="text-sm text-secondary text-center mt-2">
                                    A voir : Saison {nextEpisode.season} - Épisode {nextEpisode.episode}
                                </p>
                            )}
                        </div>
                    )}
            </div>
        </Card>
    );
} 