"use client"

import { SortOption } from '@/lib/types/filters';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../shadcn/dropdown-menu';
import { Button } from '../shadcn/button';

interface SortGroupProps {
    options: SortOption[];
    selectedSort?: string;
    selectedOrder?: string;
    onSortChange: (type: string, order: string) => void;
}

export function SortGroup({ options, selectedSort, selectedOrder, onSortChange }: SortGroupProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="lg"
                    className="bg-background-secondary border-border-primary text-text-primary hover:bg-border-primary hover:text-white transition-all duration-300"
                >
                    Trier
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background-secondary border-border-primary">
                {options.map((option) => (
                    <DropdownMenuSub key={option.type}>
                        <DropdownMenuSubTrigger className="hover:bg-border-primary hover:text-white transition-all duration-300">
                            {option.title}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="bg-background-secondary border-border-primary">
                            {option.options.map((sortOption) => (
                                <DropdownMenuItem
                                    key={`${option.type}-${sortOption.order}`}
                                    className="hover:bg-border-primary hover:text-white transition-all duration-300"
                                    onClick={() => onSortChange(option.type, sortOption.order)}
                                >
                                    {sortOption.name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
} 