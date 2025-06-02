"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import Filter from '@/components/Filters/Filter';
import Sort from '@/components/Filters/Sort';
import { Input } from '@/components/shadcn/input';
import { Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function CatalogueControls() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialSearchQuery = searchParams.get('q') || '';
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
    const isInitialMount = useRef(true);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        const handler = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (searchQuery) {
                params.set('q', searchQuery);
            } else {
                params.delete('q');
            }
            params.set('page', '1');
            router.push(`/catalogue?${params.toString()}`);
        }, 500);


        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery, router, searchParams]);

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-background-secondary rounded-2xl border border-border-primary mb-8">
            <Filter />
            {/* Search Input */}
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-primary/40 w-5 h-5" />
                <Input
                    placeholder="Rechercher une série..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="w-full pl-10 bg-background-primary/50 border-border-primary focus:border-accent-primary/40"
                />
            </div>
            <Sort />
        </div>
    );
} 