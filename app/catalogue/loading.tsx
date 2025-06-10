import { Section } from "@/features/layout/components/Section";

export default function ShowsGridSkeleton() {
    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-10 sm:mt-20 mx-auto max-w-7xl px-4">
                <div className="bg-gradient-to-br from-background-secondary to-background-primary p-4 sm:p-8 rounded-3xl border border-border-primary shadow-lg">
                    {/* En-tête */}
                    <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-title text-primary">
                                Toutes les séries à regarder
                            </h2>
                        </div>
                        <p className="text-primary/60 text-base sm:text-lg max-w-2xl">
                            Découvrez notre collection de séries et trouvez votre prochaine série préférée
                        </p>
                    </div>

                    {/* Contrôles du catalogue */}
                    <div className="mb-8 sm:mb-12">
                        <div className="bg-background-primary/50 rounded-xl p-4 animate-pulse">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-10 bg-background-secondary/50 rounded-lg" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Grille des séries */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-background-secondary rounded-2xl p-4 animate-pulse">
                                {/* Image skeleton */}
                                <div className="aspect-[2/3] bg-background-primary/50 rounded-xl mb-4" />

                                {/* Title skeleton */}
                                <div className="h-6 bg-background-primary/50 rounded w-3/4 mb-3" />

                                {/* Date skeleton */}
                                <div className="h-4 bg-background-primary/50 rounded w-1/3 mb-3" />

                                {/* Rating skeleton */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-4 w-4 bg-background-primary/50 rounded-full" />
                                    <div className="h-4 bg-background-primary/50 rounded w-1/4" />
                                </div>

                                {/* Platforms skeleton */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {[...Array(3)].map((_, j) => (
                                        <div key={j} className="h-6 bg-background-primary/50 rounded w-16" />
                                    ))}
                                </div>

                                {/* Genres skeleton */}
                                <div className="flex flex-wrap gap-2">
                                    {[...Array(2)].map((_, j) => (
                                        <div key={j} className="h-5 bg-background-primary/50 rounded w-20" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination skeleton */}
                    <div className="mt-8 sm:mt-12">
                        <div className="flex justify-center gap-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-10 w-10 bg-background-primary/50 rounded-lg animate-pulse" />
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}