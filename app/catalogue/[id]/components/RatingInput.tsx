"use client"

import { Star } from "lucide-react";
import { useState } from "react";
import { submitRating } from "../actions/RatingAction";

interface Props {
    showId: number;
    userId: string;
    isInList: boolean;
    currentRating?: number | null;
}

export default function RatingInput({ showId, userId, isInList, currentRating }: Props) {
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    if (!isInList) {
        return;
    }

    const handleRating = async (rating: number) => {
        setIsLoading(true);
        await submitRating(showId, userId, rating);
        setIsLoading(false);
    };

    return (
        <div className="space-y-2">
            <h3 className="text-lg font-title text-accent-primary">Votre note</h3>
            <div className="flex items-center gap-4">
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                            key={rating}
                            onClick={() => handleRating(rating)}
                            onMouseEnter={() => setHoveredRating(rating)}
                            onMouseLeave={() => setHoveredRating(null)}
                            disabled={isLoading}
                            className="p-1 hover:cursor-pointer"
                        >
                            <Star
                                className={`w-6 h-6 transition-colors ${(hoveredRating ?? currentRating ?? 0) >= rating
                                    ? "text-accent-primary"
                                    : "text-border-primary"
                                    }`}
                                fill={
                                    (hoveredRating ?? currentRating ?? 0) >= rating
                                        ? "var(--accent-primary)"
                                        : "none"
                                }
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
} 