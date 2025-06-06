"use client"

import { StarRating } from "@/shared/components/StarRating"
import BadgeSerie from "@/shared/components/BadgeSerie"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface CardSerieCatalogueProps {
  title: string
  image?: string
  airdate: string
  showId: number
  averageRating: number
  platforms: {
    platforms: {
      name: string
    }
  }[]
  genres: string[] | null
}

export function CardSerieCatalogue({ title, image, airdate, showId, averageRating, platforms, genres }: CardSerieCatalogueProps) {
  const router = useRouter();
  return (
    <div
      className="bg-gradient-to-br from-background-secondary to-background-primary w-full rounded-2xl border border-border-primary shadow-lg p-4 flex flex-col gap-4 hover:cursor-pointer group transition-all duration-300 hover:border-accent-primary/40 hover:shadow-accent-primary/10 hover:-translate-y-1"
      onClick={() => router.push(`/catalogue/${showId}`)}
    >
      <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Image de la série ${title}`}
            blurDataURL={image}
            fill
            sizes="100%"
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-background-primary flex items-center justify-center">
            <p className="text-accent-primary font-bold">Aucune image disponible</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-title text-text-primary group-hover:text-accent-primary transition-colors duration-200">{title}</h3>
          <div className="flex items-center gap-2">
            <StarRating rating={averageRating} size="sm" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {genres?.map((genre, index) => (
            <BadgeSerie key={index} text={genre} variant="category" />
          ))}
        </div>
        <div className="space-y-1">
          <p className="text-sm text-text-primary/80">
            {platforms ? `Plateforme(s) : ` : 'Plateforme(s) non disponible(s)'}
            {platforms && <span className="text-accent-primary">{platforms.map(p => p.platforms.name).join(', ')}</span>}
          </p>
          <p className="text-sm text-text-primary/80">Date de sortie : <span className="text-accent-primary">{airdate}</span></p>
        </div>
      </div>
    </div>
  )
}