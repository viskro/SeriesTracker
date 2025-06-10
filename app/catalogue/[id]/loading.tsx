import { Section } from "@/features/layout/components/Section";

export default function ShowDetailsSkeleton() {
    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-10 sm:mt-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent rounded-3xl -z-10" />
                <div className='flex flex-col flex-1 p-4 sm:p-8'>
                    {/* Bouton retour skeleton */}
                    <div className="h-6 bg-background-secondary rounded w-32 mb-6 animate-pulse" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Image de la série */}
                        <div className="lg:col-span-1">
                            <div className="relative w-full lg:w-[400px] aspect-[2/3] rounded-2xl overflow-hidden bg-background-secondary animate-pulse" />
                        </div>

                        {/* Informations principales */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Titre */}
                            <div className="h-10 bg-background-secondary rounded w-3/4 animate-pulse" />

                            {/* Genres */}
                            <div className='space-y-2'>
                                <div className="h-6 bg-background-secondary rounded w-24 animate-pulse" />
                                <div className="flex flex-wrap gap-2">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="h-6 bg-background-secondary rounded-full w-20 animate-pulse" />
                                    ))}
                                </div>
                            </div>

                            {/* Note */}
                            <div className='space-y-2'>
                                <div className="h-6 bg-background-secondary rounded w-20 animate-pulse" />
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="h-6 w-6 bg-background-secondary rounded-full animate-pulse" />
                                        ))}
                                    </div>
                                    <div className="h-4 bg-background-secondary rounded w-16 animate-pulse" />
                                </div>
                            </div>

                            {/* Nombre de saisons */}
                            <div className='space-y-2'>
                                <div className="h-6 bg-background-secondary rounded w-40 animate-pulse" />
                                <div className="h-4 bg-background-secondary rounded w-8 animate-pulse" />
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

                            {/* Plateformes */}
                            <div className='space-y-2'>
                                <div className="h-6 bg-background-secondary rounded w-32 animate-pulse" />
                                <div className="flex flex-wrap gap-2">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="h-6 bg-background-secondary rounded-full w-24 animate-pulse" />
                                    ))}
                                </div>
                            </div>

                            {/* Boutons d'action */}
                            <div className='mt-auto flex flex-col gap-4'>
                                <div className="flex gap-4">
                                    <div className="h-10 bg-background-secondary rounded-lg w-48 animate-pulse" />
                                    <div className="h-10 bg-background-secondary rounded-lg w-48 animate-pulse" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-6 bg-background-secondary rounded w-24 animate-pulse" />
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="h-6 w-6 bg-background-secondary rounded-full animate-pulse" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Saisons */}
            <Section className='mx-auto mt-10 sm:mt-20'>
                <div className="w-full max-w-7xl mx-auto">
                    <div className="h-8 bg-background-secondary rounded w-32 mx-auto mb-8 animate-pulse" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="aspect-[2/3] bg-background-secondary rounded-xl animate-pulse" />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Cast */}
            <Section className='mx-auto mt-10 sm:mt-20'>
                <div className="w-[80%] mx-auto">
                    <div className="h-8 bg-background-secondary rounded w-24 mx-auto mb-4 animate-pulse" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="bg-gradient-to-br from-background-secondary to-background-primary p-2 rounded-lg border border-border-primary">
                                <div className="aspect-square bg-background-secondary rounded-md mb-2 animate-pulse" />
                                <div className="space-y-1">
                                    <div className="h-4 bg-background-secondary rounded w-3/4 animate-pulse" />
                                    <div className="h-3 bg-background-secondary rounded w-1/2 animate-pulse" />
                                </div>
                            </div>
                        ))}
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