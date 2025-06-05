'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/shadcn/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/select';
import { Section } from '@/features/layout/components/Section';
import { Search, Filter } from 'lucide-react';
import { ShowCard } from './components/ShowCard';

type ShowStatus = 'to_watch' | 'ongoing' | 'finished';

interface UserShow {
    id_user: string;
    id_show: number;
    is_favorite: boolean | null;
    status: ShowStatus | null;
    added_at: Date | null;
    current_season: number | null;
    current_episode: number | null;
    shows: {
        show_id: number;
        title: string;
        image: string | null;
        summary: string | null;
        total_seasons: number;
        total_episodes: number;
        watched_episodes: number;
        season_episodes: {
            season_id: number;
            episodes: number;
        }[];
    };
}

interface Props {
    userShows: UserShow[];
}

export default function ListeClient({ userShows }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    const filteredShows = useMemo(() => {
        return userShows.filter(show => {
            const matchesSearch = show.shows.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = statusFilter === 'all' || show.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [userShows, searchQuery, statusFilter]);

    return (
        <main className="w-full bg-background-primary">
            <Section className="mt-20 mx-auto max-w-7xl px-4">
                <div className="bg-gradient-to-br from-background-secondary to-background-primary border-border-primary p-8 rounded-3xl shadow-lg">
                    <div className="flex flex-col gap-6 mb-8">
                        <h1 className="text-3xl font-title text-text-primary text-center">
                            Ma Liste
                        </h1>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <div className="relative w-full sm:w-96">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-primary/40 w-5 h-5" />
                                <Input
                                    placeholder="Rechercher une série..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 bg-background-primary/50 border-border-primary focus:border-accent-primary/40"
                                />
                            </div>
                            <div className="w-full sm:w-48">
                                <Select value={statusFilter} onValueChange={setStatusFilter}>
                                    <SelectTrigger className="w-full bg-background-primary/50 border-border-primary focus:border-accent-primary/40">
                                        <div className="flex items-center gap-2">
                                            <Filter className="w-4 h-4 text-text-primary/40" />
                                            <SelectValue placeholder="Filtrer par statut" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Tous</SelectItem>
                                        <SelectItem value="ongoing">En cours</SelectItem>
                                        <SelectItem value="finished">Terminées</SelectItem>
                                        <SelectItem value="to_watch">À voir</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {filteredShows.map((show) => (
                            <ShowCard
                                key={show.id_show}
                                show_id={show.shows.show_id}
                                title={show.shows.title}
                                image={show.shows.image}
                                status={show.status}
                                added_at={show.added_at}
                                current_season={show.current_season}
                                current_episode={show.current_episode}
                                total_episodes={show.shows.total_episodes}
                                watched_episodes={show.shows.watched_episodes}
                                total_seasons={show.shows.total_seasons}
                                season_episodes={show.shows.season_episodes}
                            />
                        ))}
                    </div>

                    {filteredShows.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-text-primary/60">
                                Aucune série ne correspond à vos critères de recherche.
                            </p>
                        </div>
                    )}
                </div>
            </Section>
        </main>
    );
}
