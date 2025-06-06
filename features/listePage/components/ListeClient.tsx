'use client';

import ListPageClient from '@/shared/components/ListPageClient';
import { ListeClientProps } from '../types';

export default function ListeClient({ userShows }: ListeClientProps) {
    return (
        <ListPageClient
            userShows={userShows}
            title="Ma Liste"
            emptyMessage="Vous n'avez pas de série dans votre liste."
            noResultsMessage="Aucune série ne correspond à vos critères de recherche."
        />
    );
} 