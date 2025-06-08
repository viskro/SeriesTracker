"use client"

import { NextPage } from 'next'
import { Button } from '../../../../shared/components/shadcn/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../../../../shared/components/shadcn/sheet';
import { ScrollArea } from '../../../../shared/components/shadcn/scroll-area';
import { FilterGroup } from './FilterGroup';
import { FILTER_GROUPS } from '@/features/catalogue/types/filters';
import { useEffect, useState } from 'react';

const Filter: NextPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const newSelectedFilters: Record<string, string[]> = {};
    FILTER_GROUPS.forEach((group) => {
      const values = searchParams.get(group.type)?.split(',').filter(Boolean) || [];
      if (values.length > 0) {
        newSelectedFilters[group.type] = values;
      }
    });
    setSelectedFilters(newSelectedFilters);
  }, [searchParams]);

  const handleFilter = (type: string, value: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentValues = params.get(type)?.split(',').filter(Boolean) || [];

    if (checked) {
      if (!currentValues.includes(value)) {
        currentValues.push(value);
      }
    } else {
      const index = currentValues.indexOf(value);
      if (index > -1) {
        currentValues.splice(index, 1);
      }
    }

    if (currentValues.length > 0) {
      params.set(type, currentValues.join(','));
    } else {
      params.delete(type);
    }

    params.set('page', '1'); // Réinitialiser la pagination
    router.push(`/catalogue?${params.toString()}`);
  };

  const getSelectedValues = (type: string) => {
    return selectedFilters[type] || [];
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary text-text-primary hover:bg-border-primary hover:text-white transition-all duration-300"
        >
          Filtres
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary text-text-primary">
        <SheetTitle className="text-accent-primary text-2xl font-title">Filtrer par</SheetTitle>
        <ScrollArea className="h-[calc(100vh-8rem)] pr-4 my-4">
          {FILTER_GROUPS.map((group) => (
            <FilterGroup
              key={group.type}
              group={group}
              selectedValues={getSelectedValues(group.type)}
              onValueChange={(value, checked) => handleFilter(group.type, value, checked)}
            />
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;