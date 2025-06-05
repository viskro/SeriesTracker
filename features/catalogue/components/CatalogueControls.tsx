"use client";

import Filter from '@/components/Filters/Filter';
import Sort from '@/components/Filters/Sort';
import { SearchBar } from './SearchBar';

export function CatalogueControls() {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-background-secondary rounded-2xl border border-border-primary mb-8">
            <Filter />
            <SearchBar />
            <Sort />
        </div>
    );
} 