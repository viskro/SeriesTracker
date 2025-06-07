'use client';

import ListPageClient from '@/shared/components/ListPageClient';
import { ListeClientProps } from '../types';

export default function FavorisClient({ userShows }: ListeClientProps) {
    return (
        <ListPageClient
            userShows={userShows}
            title="Mes Favoris"
            emptyMessage="Vous n'avez pas de série favorite."
            noResultsMessage="Aucune série ne correspond à vos critères de recherche."
        />
    );
} 