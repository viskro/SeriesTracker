'use client';

import { Card } from '@/shared/components/shadcn/card';
import { Calendar, Play, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShowCardProps } from '../types';
import BadgeSerie from '@/shared/components/BadgeSerie';
import { memo, useMemo, useCallback } from 'react';

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
} as const;

// Composant mémorisé pour l'image
const ShowImage = memo(({ image, title }: { image: string | null, title: string }) => (
    image ? (
        <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
            quality={75}
            className="object-cover"
            priority={false}
        />
    ) : (
        <div className="w-full h-full bg-background-secondary flex items-center justify-center">
            <span className="text-primary/40">Pas d&apos;image</span>
        </div>
    )
));

ShowImage.displayName = 'ShowImage';

// Composant mémorisé pour la progression
const ProgressBar = memo(({ watched, total }: { watched: number, total: number }) => {
    const percentage = useMemo(() => (watched / total) * 100, [watched, total]);

    return (
        <div className="pt-2">
            <div className="flex justify-between text-sm text-secondary mb-1">
                <span>Progression</span>
                <span>{watched}/{total}</span>
            </div>
            <div className="h-1.5 bg-border-primary rounded-full overflow-hidden">
                <div
                    className="h-full bg-accent-primary rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
});

ProgressBar.displayName = 'ProgressBar';

function ShowCardComponent({
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

    const getNextEpisode = useCallback(() => {
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
    }, [current_season, current_episode, total_seasons, total_episodes, season_episodes]);

    const nextEpisode = useMemo(() => getNextEpisode(), [getNextEpisode]);

    const handleClick = useCallback(() => {
        router.push(`/catalogue/${show_id}`);
    }, [router, show_id]);

    const formattedDate = useMemo(() => {
        if (!added_at) return null;
        return new Date(added_at).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }, [added_at]);

    return (
        <Card
            className="group bg-gradient-to-br from-background-secondary to-background-primary border-border-primary hover:border-accent-primary/40 hover:shadow-lg hover:shadow-accent-primary/10 transition-all duration-300 cursor-pointer overflow-hidden"
            onClick={handleClick}
        >
            <div className="relative aspect-[2/3]">
                <ShowImage image={image} title={title} />
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-background-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BadgeSerie variant={status} className='absolute top-2 right-2'>
                    <div className="flex items-center gap-1">
                        {statusInfo.icon}
                        <span>{statusInfo.label}</span>
                    </div>
                </BadgeSerie>
            </div>
            <div className="p-4 space-y-2">
                <h3 className="font-title text-lg text-primary group-hover:text-accent-primary transition-colors duration-300">{title}</h3>
                {formattedDate && (
                    <p className="text-sm text-secondary">
                        Ajouté le {formattedDate}
                    </p>
                )}
                {(status === "finished" || status === "ongoing") && current_season && current_episode && (
                    <>
                        <ProgressBar watched={watched_episodes} total={total_episodes} />
                        {status === "finished" ? (
                            <p className="text-md font-title text-accent-primary text-center mt-2">
                                C&apos;est fini !
                            </p>
                        ) : (
                            <p className="text-sm text-secondary text-center mt-2">
                                A voir : Saison {nextEpisode.season} - Épisode {nextEpisode.episode}
                            </p>
                        )}
                    </>
                )}
            </div>
        </Card>
    );
}

export const ShowCard = memo(ShowCardComponent); 