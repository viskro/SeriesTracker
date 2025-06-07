'use client';

import ListPageClient from '@/shared/components/ListPageClient';
import { ListeClientProps } from '../types';

export default function ArchivesClient({ userShows }: ListeClientProps) {
    return (
        <ListPageClient
            userShows={userShows}
            title="Mes Archives"
            emptyMessage="Vous n'avez pas archivé de série."
            noResultsMessage="Aucune série ne correspond à vos critères de recherche."
        />
    );
} 