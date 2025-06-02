"use client"

import { NextPage } from 'next'
import { Button } from '../shadcn/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './components/sheet';
import { ScrollArea } from './components/scroll-area';
import { FilterGroup } from './FilterGroup';
import { FILTER_GROUPS } from '@/lib/types/filters';

const Filter: NextPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

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
    return searchParams.get(type)?.split(',').filter(Boolean) || [];
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="bg-background-secondary border-border-primary text-text-primary hover:bg-border-primary hover:text-white transition-all duration-300"
        >
          Filtres
        </Button>
      </SheetTrigger>
      <SheetTitle className='text-accent-primary'>Filtres</SheetTitle>
      <SheetContent side={"left"} className="bg-gradient-to-br from-background-secondary to-background-primary border-border-primary text-text-primary">
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