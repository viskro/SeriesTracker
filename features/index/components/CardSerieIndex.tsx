import Image from "next/image";
import BadgeSerie from "@/shared/components/BadgeSerie";
import { Show } from "@/shared/types/types";

type Props = {
  show: Show;
}

export function CardSerieIndex({ show }: Props) {
  let genres;
  if (show.show_genres) {
    genres = show.show_genres
  } else return null;

  return (
    <div className="bg-gradient-to-br from-background-secondary to-background-primary border-border-primary text-text-primary w-full rounded-2xl border shadow-lg p-4 flex flex-col gap-4 group transition-all duration-300 hover:bg-border-primary hover:text-white hover:shadow-accent-primary/10 hover:-translate-y-1">
      <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
        {show.image ? (
          <Image
            src={show.image || "placehold"}
            alt="placeholder"
            fill
            sizes="100%"
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-background-primary flex items-center justify-center">
            <p className="text-accent-primary font-bold">Aucune image disponible</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-title text-text-primary group-hover:text-accent-primary transition-colors duration-200">{show.title}</h3>
        <div className="flex flex-wrap gap-2">
          {
            genres.map((genre) => (
              <BadgeSerie key={genre.genre_id} variant="category">
                <span>{genre.name}</span>
              </BadgeSerie>
            ))
          }
        </div>
      </div>
    </div>
  )
}