import { Section } from "@/features/layout/components/Section";

// Composant Skeleton pour le tableau de bord
export default function DashboardSkeleton() {
    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-10 sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                    <h1 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-title text-text-primary">
                        Votre espace personnel
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
                        {/* Sidebar Skeleton */}
                        <div className="space-y-6 lg:col-span-1">
                            {/* ProgressionCard Skeleton */}
                            <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary rounded-2xl p-4 animate-pulse">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-6 bg-background-primary/50 rounded w-1/3" />
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-background-primary/50 rounded w-full" />
                                    <div className="h-4 bg-background-primary/50 rounded w-2/3" />
                                    <div className="h-4 bg-background-primary/50 rounded w-1/2" />
                                    <div className="h-4 bg-background-primary/50 rounded w-3/4" />
                                </div>
                            </div>

                            {/* ActiviteCard Skeleton */}
                            <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary rounded-2xl p-4 animate-pulse">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-6 bg-background-primary/50 rounded w-1/4" />
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-background-primary/50 rounded w-full" />
                                    <div className="h-4 bg-background-primary/50 rounded w-3/4" />
                                    <div className="h-4 bg-background-primary/50 rounded w-1/2" />
                                </div>
                            </div>

                            {/* ArchivesCard Skeleton */}
                            <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary rounded-2xl p-4 animate-pulse">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-6 bg-background-primary/50 rounded w-1/3" />
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-background-primary/50 rounded w-full" />
                                    <div className="h-4 bg-background-primary/50 rounded w-2/3" />
                                </div>
                            </div>
                        </div>

                        {/* Main Content Skeleton */}
                        <div className="space-y-6 sm:space-y-8 lg:col-span-3">
                            {/* Liste des séries Skeleton */}
                            <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary rounded-2xl p-4 sm:p-6 animate-pulse">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-6 bg-background-primary/50 rounded w-1/4" />
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="aspect-[2/3] bg-background-primary/50 rounded-xl" />
                                    ))}
                                </div>
                                <div className="mt-4 text-right">
                                    <div className="h-4 bg-background-primary/50 rounded w-16 inline-block" />
                                </div>
                            </div>

                            {/* Favoris Skeleton */}
                            <div className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary rounded-2xl p-4 sm:p-6 animate-pulse">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-6 bg-background-primary/50 rounded w-1/4" />
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="aspect-[2/3] bg-background-primary/50 rounded-xl" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}