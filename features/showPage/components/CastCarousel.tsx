"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/components/shadcn/carousel";
import Image from "next/image";
import { cn } from "@/shared/utils/utils";

interface CastMember {
    id: number;
    name: string;
    character: string;
    image?: string | null;
}

interface CastCarouselProps {
    cast: CastMember[];
    className?: string;
}

export function CastCarousel({ cast, className }: CastCarouselProps) {
    if (!cast || cast.length === 0) return null;
    return (
        <div className={cn("w-[80%]", className)}>
            <h2 className="font-title text-2xl text-accent-primary text-center mb-4">Acteurs</h2>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-2">
                    {cast.map((member) => (
                        <CarouselItem key={member.id} className="pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <div className="bg-gradient-to-br from-background-secondary to-background-primary p-2 rounded-lg border border-border-primary hover:border-accent-primary/40 transition-all duration-300">
                                <div className="relative w-full aspect-square rounded-md overflow-hidden mb-2">
                                    <Image
                                        src={member.image || "https://placehold.co/400x600"}
                                        alt={"Photo de " + member.name}
                                        fill
                                        sizes="100%"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-0.5">
                                    <h3 className="font-title text-text-primary text-sm">{member.name}</h3>
                                    <p className="text-text-primary/80 text-xs">{member.character}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
} 