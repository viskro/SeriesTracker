'use client';

import { useState, useMemo, useCallback, memo } from 'react';
import { Input } from '@/shared/components/shadcn/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/shadcn/select';
import { Section } from '@/features/layout/components/Section';
import { Search, Filter, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ShowCard } from '@/features/archivesPage/components/ShowCard';
import { ShowStatus } from '@/features/archivesPage/types';

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

interface ListPageClientProps {
    userShows: UserShow[];
    title: string;
    emptyMessage: string;
    noResultsMessage: string;
}

// Composant mémorisé pour la barre de recherche
const SearchBar = memo(({ value, onChange }: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-primary/40 w-5 h-5" />
        <Input
            placeholder="Rechercher une série..."
            value={value}
            onChange={onChange}
            className="w-full pl-10 bg-background-primary/50 border-border-primary focus:border-accent-primary/40"
        />
    </div>
));

SearchBar.displayName = 'SearchBar';

// Composant mémorisé pour le filtre de statut
const StatusFilter = memo(({ value, onChange }: { value: string, onChange: (value: string) => void }) => (
    <div className="w-full sm:w-48">
        <Select
            value={value}
            onValueChange={onChange}
        >
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
));

StatusFilter.displayName = 'StatusFilter';

// Composant mémorisé pour la liste des séries
const ShowsGrid = memo(({ shows, emptyMessage, noResultsMessage }: {
    shows: UserShow[],
    emptyMessage: string,
    noResultsMessage: string
}) => {
    if (shows.length === 0) {
        return (
            <div className="text-center py-12 col-span-full">
                <p className="text-text-primary/60">
                    {emptyMessage}
                </p>
            </div>
        );
    }

    if (shows.length === 0 && emptyMessage !== noResultsMessage) {
        return (
            <div className="text-center py-12 col-span-full">
                <p className="text-text-primary/60">
                    {noResultsMessage}
                </p>
            </div>
        );
    }

    return (
        <>
            {shows.map((show) => (
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
        </>
    );
});

ShowsGrid.displayName = 'ShowsGrid';

function ListPageClientComponent({ userShows, title, emptyMessage, noResultsMessage }: ListPageClientProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }, []);

    const handleStatusChange = useCallback((value: string) => {
        setStatusFilter(value);
    }, []);

    const filteredShows = useMemo(() => {
        const searchLower = searchQuery.toLowerCase();
        return userShows.filter(show => {
            const matchesSearch = show.shows.title.toLowerCase().includes(searchLower);
            const matchesStatus = statusFilter === 'all' || show.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [userShows, searchQuery, statusFilter]);

    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-10 sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 text-primary/60 hover:text-accent-primary transition-colors duration-300 mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Retour au tableau de bord</span>
                    </Link>

                    <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary p-4 sm:p-6 rounded-2xl">
                        <h1 className="text-2xl sm:text-3xl font-title text-text-primary text-center mb-8">
                            {title}
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <SearchBar value={searchQuery} onChange={handleSearchChange} />
                            <StatusFilter value={statusFilter} onChange={handleStatusChange} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                            <ShowsGrid
                                shows={filteredShows}
                                emptyMessage={emptyMessage}
                                noResultsMessage={noResultsMessage}
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default memo(ListPageClientComponent); 