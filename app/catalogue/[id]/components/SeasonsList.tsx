"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface Season {
    id: number;
    image?: string | null;
}

interface SeasonsListProps {
    seasons: Season[];
    className?: string;
}

export function SeasonsList({ seasons, className = '' }: SeasonsListProps) {
    const router = useRouter();

    return (
        <div className={`w-full max-w-7xl mx-auto ${className}`}>
            <h2 className="font-title text-2xl text-accent-primary text-center mb-8">Saisons</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {seasons.map((season, index) => (
                    <button
                        key={season.id}
                        onClick={() => router.push(`/catalogue/${season.id}/saison/${season.id}`)}
                        className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-background-secondary hover:bg-background-secondary/80 transition-colors hover:cursor-pointer"
                    >
                        <Image
                            src={season.image || "https://placehold.co/400x600"}
                            alt={`Saison ${season.id}`}
                            fill
                            sizes="100%"
                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                            <span className="text-white font-title text-xl">Saison {index + 1}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
} 