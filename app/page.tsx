import Image from "next/image"
import catalogueImage from "../public/images/catalogue_serie.jpg"
import PrimaryButton from "@/shared/components/PrimaryButton"
import { CalendarDays, MessageCircleMore, UserCheck } from "lucide-react"
import { CardSerieIndex } from "@/features/index/components/CardSerieIndex"
import { Section } from "@/features/layout/components/Section"
import { GetPopularShows } from "@/features/index/actions/getPopularShows"

export default async function Home() {

  const popularShows = await GetPopularShows();

  return (
    <main className="w-full h-full flex flex-col items-center bg-background-primary">
      <Section className="mt-0 relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden z-5">
        <div className="absolute inset-0 bg-gradient-to-r from-background-primary via-background-primary/90 to-transparent z-10" />
        <Image
          src={catalogueImage || "/placeholder.svg"}
          alt="Image catalogue"
          height={700}
          priority
          className="absolute right-0 z-0 object-cover mask-b-from-60% mask-b-to-90% w-full h-full transform scale-105 transition-transform duration-700 hover:scale-110"
        />
        <div className="overlay z-20 absolute top-1/2 -translate-y-1/2 left-[5%] sm:left-[10%] w-[90%] sm:w-[600px] h-auto p-4 sm:p-8 flex flex-col gap-4 sm:gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-title text-text-primary leading-tight animate-fade-in">
            Rejoignez la communauté des sériephiles.
          </h1>
          <p className="font-text text-text-primary/90 text-base sm:text-lg leading-relaxed animate-fade-in-delay">
            Discutez, partagez vos avis, et suivez votre progression avec des milliers d&apos;autres passionnés de
            séries. Ne regardez plus jamais une série seul·e !
          </p>
          <PrimaryButton
            text="Rejoindre la communauté"
            to="/auth/signup"
            className="w-full sm:w-fit transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Section>

      <Section className="mt-10 sm:mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
        <div className="flex flex-col items-center gap-8 sm:gap-16 py-10 sm:py-20 px-4">
          <div className="text-center max-w-3xl">
            <h2 className="font-title text-accent-primary text-2xl sm:text-3xl md:text-4xl mb-4">Que pouvez-vous faire ?</h2>
            <p className="text-text-primary/80 text-base sm:text-lg">
              Découvrez toutes les fonctionnalités qui rendront votre expérience de sériephile unique
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 w-full max-w-7xl">
            {/* Première fonctionnalité */}
            <div className="bg-gradient-to-br from-background-secondary to-background-primary p-6 sm:p-8 rounded-3xl border border-border-primary hover:shadow-xl hover:border-accent-primary/40 transition-all duration-500 group hover:-translate-y-2">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/30 transition-all duration-500 group-hover:rotate-6">
                  <MessageCircleMore size={28} className="text-accent-primary sm:w-8 sm:h-8" />
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-accent-primary text-xl sm:text-2xl font-text font-medium">Partager vos impressions</h3>
                  <p className="text-text-primary/90 text-sm sm:text-base leading-relaxed">
                    Commentez les épisodes, notez vos séries et échangez avec les autres fans.
                  </p>
                </div>
              </div>
            </div>

            {/* Deuxième fonctionnalité */}
            <div className="bg-gradient-to-br from-background-secondary to-background-primary p-6 sm:p-8 rounded-3xl border border-border-primary hover:shadow-xl hover:border-accent-primary/40 transition-all duration-500 group hover:-translate-y-2">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/30 transition-all duration-500 group-hover:rotate-6">
                  <CalendarDays size={28} className="text-accent-primary sm:w-8 sm:h-8" />
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-accent-primary text-xl sm:text-2xl font-text font-medium">Suivre votre progression</h3>
                  <p className="text-text-primary/90 text-sm sm:text-base leading-relaxed">
                    Marquez les épisodes vus, organisez vos saisons et ne perdez jamais le fil.
                  </p>
                </div>
              </div>
            </div>

            {/* Troisième fonctionnalité */}
            <div className="bg-gradient-to-br from-background-secondary to-background-primary p-6 sm:p-8 rounded-3xl border border-border-primary hover:shadow-xl hover:border-accent-primary/40 transition-all duration-500 group hover:-translate-y-2">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/30 transition-all duration-500 group-hover:rotate-6">
                  <UserCheck size={28} className="text-accent-primary sm:w-8 sm:h-8" />
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-accent-primary text-xl sm:text-2xl font-text font-medium">Suivre vos amis</h3>
                  <p className="text-text-primary/90 text-sm sm:text-base leading-relaxed">
                    Voyez ce que vos amis regardent en temps réel et découvrez de nouvelles pépites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="mt-10 sm:mt-20 mb-10 sm:mb-20">
        <div className="flex flex-col gap-8 sm:gap-12">
          <h2 className="font-title text-accent-primary text-2xl sm:text-3xl">Séries populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {popularShows.map((show) => (
              <CardSerieIndex key={show.show_id} show={show} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
