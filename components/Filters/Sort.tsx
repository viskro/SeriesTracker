"use client"

import { NextPage } from 'next'
import { useRouter, useSearchParams } from 'next/navigation';
import { SortGroup } from './SortGroup';
import { SORT_OPTIONS } from '@/lib/types/filters';

const Sort: NextPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSort = (type: string, order: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', type);
        params.set('order', order);
        params.set('page', '1'); // Réinitialiser la pagination
        router.push(`/catalogue?${params.toString()}`);
    };

    return (
        <SortGroup
            options={SORT_OPTIONS}
            selectedSort={searchParams.get('sort') || undefined}
            selectedOrder={searchParams.get('order') || undefined}
            onSortChange={handleSort}
        />
    );
}

export default Sort;