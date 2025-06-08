"use client";

import Filter from '@/features/catalogue/components/Filters/Filter';
import Sort from '@/features/catalogue/components/Filters/Sort';
import { SearchBar } from './SearchBar';

export function CatalogueControls() {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-gradient-to-br from-background-secondary to-background-primary rounded-2xl border border-border-primary mb-8">
            <Filter />
            <SearchBar />
            <Sort />
        </div>
    );
} 