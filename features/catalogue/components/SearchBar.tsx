"use client";

import { Input } from '@/components/shadcn/input';
import { Search } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';

export function SearchBar() {
    const { searchQuery, setSearchQuery } = useSearch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-primary/40 w-5 h-5" />
            <Input
                placeholder="Rechercher une série..."
                value={searchQuery}
                onChange={handleInputChange}
                className="w-full pl-10 bg-background-primary/50 border-border-primary focus:border-accent-primary/40"
            />
        </div>
    );
} 