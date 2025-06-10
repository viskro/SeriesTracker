import { Section } from "@/features/layout/components/Section";

export default function EpisodeDetailsSkeleton() {
    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-10 sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className='flex flex-col flex-1 p-4 sm:p-8'>
                    {/* Bouton retour skeleton */}
                    <div className="h-6 bg-background-secondary rounded w-32 mb-6 animate-pulse" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Image de l'épisode */}
                        <div className="lg:col-span-1">
                            <div className="relative w-full lg:w-[400px] aspect-video rounded-2xl overflow-hidden bg-background-secondary animate-pulse" />
                        </div>

                        {/* Informations principales */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Titre */}
                            <div className="h-10 bg-background-secondary rounded w-3/4 animate-pulse" />

                            {/* Numéro d'épisode */}
                            <div className='space-y-2'>
                                <div className="h-6 bg-background-secondary rounded w-24 animate-pulse" />
                                <div className="h-4 bg-background-secondary rounded w-16 animate-pulse" />
                            </div>

                            {/* Date de diffusion */}
                            <div className='space-y-2'>
                                <div className="h-6 bg-background-secondary rounded w-32 animate-pulse" />
                                <div className="h-4 bg-background-secondary rounded w-24 animate-pulse" />
                            </div>

                            {/* Synopsis */}
                            <div className='space-y-2'>
                                <div className="h-6 bg-background-secondary rounded w-32 animate-pulse" />
                                <div className="space-y-2">
                                    <div className="h-4 bg-background-secondary rounded w-full animate-pulse" />
                                    <div className="h-4 bg-background-secondary rounded w-5/6 animate-pulse" />
                                    <div className="h-4 bg-background-secondary rounded w-4/6 animate-pulse" />
                                </div>
                            </div>

                            {/* Bouton marquer comme vu */}
                            <div className='mt-auto'>
                                <div className="h-10 bg-background-secondary rounded-lg w-48 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Commentaires */}
            <Section className="mt-10 sm:mt-20 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
                    <div className="h-8 bg-background-secondary rounded w-40 mb-6 animate-pulse" />
                    <div className="space-y-4">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="w-full p-6 rounded-2xl border border-border-primary">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 bg-background-secondary rounded-full animate-pulse" />
                                        <div className="space-y-2">
                                            <div className="h-4 bg-background-secondary rounded w-32 animate-pulse" />
                                            <div className="h-3 bg-background-secondary rounded w-24 animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="space-y-2 pl-16">
                                        <div className="h-4 bg-background-secondary rounded w-full animate-pulse" />
                                        <div className="h-4 bg-background-secondary rounded w-5/6 animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}