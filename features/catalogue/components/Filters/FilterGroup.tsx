"use client"

import { FilterGroup as FilterGroupType } from '@/features/catalogue/types/filters';
import { Checkbox } from '../../../../shared/components/shadcn/checkbox';
import { Label } from '../../../../shared/components/shadcn/label';

interface FilterGroupProps {
    group: FilterGroupType;
    selectedValues: string[];
    onValueChange: (value: string, checked: boolean) => void;
}

export function FilterGroup({ group, selectedValues, onValueChange }: FilterGroupProps) {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 capitalize text-accent-primary">
                {group.title}
            </h3>
            <div className="space-y-2">
                {group.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                            id={`${group.type}-${option.id}`}
                            checked={selectedValues.includes(option.value)}
                            onCheckedChange={(checked) => onValueChange(option.value, checked as boolean)}
                        />
                        <Label
                            htmlFor={`${group.type}-${option.id}`}
                            className="text-sm font-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {option.name}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    );
} 