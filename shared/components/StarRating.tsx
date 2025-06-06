"use client"

import { Star } from "lucide-react";

interface Props {
    rating: number;
    maxRating?: number;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function StarRating({ rating, maxRating = 5, size = "md", className = "" }: Props) {
    const sizeMap = {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6"
    };

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {Array.from({ length: maxRating }).map((_, index) => (
                <Star
                    key={index}
                    className={`${sizeMap[size]} ${index < rating ? "text-accent-primary" : "text-border-primary"}`}
                    fill={index < rating ? "var(--accent-primary)" : "none"}
                />
            ))}
        </div>
    );
} 