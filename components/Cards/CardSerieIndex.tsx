import Image from "next/image";
import BadgeSerie from "../shared/BadgeSerie";

export function CardSerieIndex() {
  return (
    <div className="bg-background-secondary border-border-primary text-text-primary w-full rounded-2xl border shadow-lg p-4 flex flex-col gap-4 group transition-all duration-300 hover:bg-border-primary hover:text-white hover:shadow-accent-primary/10 hover:-translate-y-1">
      <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
        <Image
          src={"https://placehold.co/400x400"}
          alt="placeholder"
          fill
          sizes="100%"
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-title text-text-primary group-hover:text-accent-primary transition-colors duration-200">Titre de la série</h3>
        <div className="flex flex-wrap gap-2">
          <BadgeSerie text="Catégorie" variant="category" />
          <BadgeSerie text="Catégorie" variant="category" />
        </div>
      </div>
    </div>
  )
}