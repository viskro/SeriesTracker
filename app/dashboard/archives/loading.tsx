import { Section } from "@/features/layout/components/Section";

export default function ArchivesSkeleton() {
    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-10 sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                    {/* Bouton retour skeleton */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-4 bg-background-secondary rounded w-32 animate-pulse" />
                    </div>

                    <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary p-4 sm:p-6 rounded-2xl">
                        {/* Titre */}
                        <div className="h-10 bg-background-secondary rounded w-48 mx-auto mb-8 animate-pulse" />

                        {/* Barre de recherche et filtre */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="relative flex-1">
                                <div className="h-10 bg-background-secondary rounded w-full animate-pulse" />
                            </div>
                            <div className="w-full sm:w-48">
                                <div className="h-10 bg-background-secondary rounded w-full animate-pulse" />
                            </div>
                        </div>

                        {/* Grille des séries */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="bg-gradient-to-br from-background-secondary to-background-primary p-4 rounded-xl border border-border-primary">
                                    {/* Image */}
                                    <div className="aspect-[2/3] bg-background-secondary rounded-lg mb-4 animate-pulse" />

                                    {/* Titre */}
                                    <div className="h-6 bg-background-secondary rounded w-3/4 mb-2 animate-pulse" />

                                    {/* Statut */}
                                    <div className="h-4 bg-background-secondary rounded w-1/4 mb-4 animate-pulse" />

                                    {/* Progression */}
                                    <div className="space-y-2">
                                        <div className="h-2 bg-background-secondary rounded-full w-full animate-pulse" />
                                        <div className="h-4 bg-background-secondary rounded w-1/3 animate-pulse" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
