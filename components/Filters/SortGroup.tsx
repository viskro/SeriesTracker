"use client"

import { SortOption } from '@/lib/types/filters';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './components/sheet';
import { Button } from '../shadcn/button';
import { Checkbox } from '../shadcn/checkbox';
import { Label } from '../shadcn/label';
import { ScrollArea } from '../Filters/components/scroll-area';

interface SortGroupProps {
    options: SortOption[];
    selectedSort?: string;
    selectedOrder?: string;
    onSortChange: (type: string, order: string) => void;
}

export function SortGroup({ options, selectedSort, selectedOrder, onSortChange }: SortGroupProps) {
    const isSelected = (type: string, order: string) => {
        return selectedSort === type && selectedOrder === order;
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="lg"
                    className="bg-background-secondary border-border-primary text-text-primary hover:bg-border-primary hover:text-white transition-all duration-300"
                >
                    Trier
                </Button>
            </SheetTrigger>
            <SheetContent side={"right"} className="bg-gradient-to-br from-background-secondary to-background-primary border-border-primary text-text-primary" aria-describedby='Triages pour le catalogue.'>
                <SheetTitle className='text-accent-primary'>Trier par</SheetTitle>
                <ScrollArea className="h-[calc(100vh-8rem)] pr-4 my-4">
                    <div className="space-y-6">
                        {options.map((option) => (
                            <div key={`${option.type}-${option.order}`} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`${option.type}-${option.order}`}
                                    checked={isSelected(option.type, option.order)}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            onSortChange(option.type, option.order);
                                        } else {
                                            onSortChange("", "");
                                        }
                                    }}
                                />
                                <Label
                                    htmlFor={`${option.type}-${option.order}`}
                                    className="text-sm font-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {option.name}
                                </Label>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
} 