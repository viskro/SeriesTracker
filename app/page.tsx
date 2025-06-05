import Image from "next/image"
import catalogueImage from "../public/images/catalogue_serie.jpg"
import PrimaryButton from "@/components/Buttons/PrimaryButton"
import { CalendarDays, MessageCircleMore, UserCheck } from "lucide-react"
import { CardSerieIndex } from "@/features/index/components/CardSerieIndex"
import { Section } from "@/features/layout/components/Section"
import { GetPopularShows } from "@/features/index/actions/getPopularShows"

export default async function Home() {

  const popularShows = await GetPopularShows();

  return (
    <main className="w-full h-full flex flex-col items-center bg-background-primary">
      <Section className="mt-0 relative w-full h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background-primary via-background-primary/90 to-transparent z-10" />
        <Image
          src={catalogueImage || "/placeholder.svg"}
          alt="Image catalogue"
          height={700}
          priority
          className="absolute right-0 z-0 object-cover mask-b-from-60% mask-b-to-90% w-full h-full transform scale-105 transition-transform duration-700 hover:scale-110"
        />
        <div className="overlay z-20 absolute top-1/2 -translate-y-1/2 left-[10%] w-[600px] h-auto p-8 flex flex-col gap-8">
          <h1 className="text-5xl font-title text-text-primary leading-tight animate-fade-in">
            Rejoignez la communauté des sériephiles.
          </h1>
          <p className="font-text text-text-primary/90 text-lg leading-relaxed animate-fade-in-delay">
            Discutez, partagez vos avis, et suivez votre progression avec des milliers d&apos;autres passionnés de
            séries. Ne regardez plus jamais une série seul·e !
          </p>
          <PrimaryButton
            text="Rejoindre la communauté"
            to="/signup"
            className="w-fit transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Section>

      <Section className="mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
        <div className="flex flex-col items-center gap-16 py-20 px-4">
          <div className="text-center max-w-3xl">
            <h2 className="font-title text-accent-primary text-4xl mb-4">Que pouvez-vous faire ?</h2>
            <p className="text-text-primary/80 text-lg">
              Découvrez toutes les fonctionnalités qui rendront votre expérience de sériephile unique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
            {/* Première fonctionnalité */}
            <div className="bg-gradient-to-br from-background-secondary to-background-primary p-8 rounded-3xl border border-border-primary hover:shadow-xl hover:border-accent-primary/40 transition-all duration-500 group hover:-translate-y-2">
              <div className="flex flex-col gap-8">
                <div className="h-16 w-16 rounded-2xl bg-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/30 transition-all duration-500 group-hover:rotate-6">
                  <MessageCircleMore size={32} className="text-accent-primary" />
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-accent-primary text-2xl font-text font-medium">Partager vos impressions</h3>
                  <p className="text-text-primary/90 text-base leading-relaxed">
                    Commentez les épisodes, notez vos séries et échangez avec les autres fans.
                  </p>
                </div>
              </div>
            </div>

            {/* Deuxième fonctionnalité */}
            <div className="bg-gradient-to-br from-background-secondary to-background-primary p-8 rounded-3xl border border-border-primary hover:shadow-xl hover:border-accent-primary/40 transition-all duration-500 group hover:-translate-y-2">
              <div className="flex flex-col gap-8">
                <div className="h-16 w-16 rounded-2xl bg-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/30 transition-all duration-500 group-hover:rotate-6">
                  <CalendarDays size={32} className="text-accent-primary" />
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-accent-primary text-2xl font-text font-medium">Suivre votre progression</h3>
                  <p className="text-text-primary/90 text-base leading-relaxed">
                    Marquez les épisodes vus, organisez vos saisons et ne perdez jamais le fil.
                  </p>
                </div>
              </div>
            </div>

            {/* Troisième fonctionnalité */}
            <div className="bg-gradient-to-br from-background-secondary to-background-primary p-8 rounded-3xl border border-border-primary hover:shadow-xl hover:border-accent-primary/40 transition-all duration-500 group hover:-translate-y-2">
              <div className="flex flex-col gap-8">
                <div className="h-16 w-16 rounded-2xl bg-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/30 transition-all duration-500 group-hover:rotate-6">
                  <UserCheck size={32} className="text-accent-primary" />
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-accent-primary text-2xl font-text font-medium">Suivre vos amis</h3>
                  <p className="text-text-primary/90 text-base leading-relaxed">
                    Voyez ce que vos amis regardent en temps réel et découvrez de nouvelles pépites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="mt-20 mb-20">
        <div className="flex flex-col gap-12">
          <h2 className="font-title text-accent-primary text-3xl">Séries populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularShows.map((show) => (
              <CardSerieIndex key={show.show_id} show={show} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
