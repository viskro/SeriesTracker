import { Suspense } from "react";
import { CardSerieCatalogue } from "@/features/catalogue/components/CardSerieCatalogue";
import { Section } from "@/features/layout/components/Section";
import { Pagination } from "@/features/catalogue/components/Pagination";
import { CatalogueControls } from "@/features/catalogue/components/CatalogueControls";
import { getShows } from "@/features/catalogue/actions/getShows";
import { parseFilters } from "@/features/catalogue/actions/parseFilters";
import { SearchParams } from "@/features/catalogue/types";

interface Show {
    show_id: number;
    title: string;
    image: string | null;
    seasons: Array<{
        episodes: Array<{
            airdate: string | null;
        }>;
    }>;
    platforms: Array<{
        platforms: {
            name: string;
        };
    }>;
    genres: Array<{
        genres: {
            name: string;
        };
    }>;
}

interface Rating {
    average: number;
}

// Composant de chargement pour la grille des séries
function ShowsGridSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-background-secondary rounded-2xl p-4 animate-pulse">
                    <div className="aspect-[2/3] bg-background-primary/50 rounded-xl mb-4" />
                    <div className="space-y-3">
                        <div className="h-6 bg-background-primary/50 rounded w-3/4" />
                        <div className="h-4 bg-background-primary/50 rounded w-1/2" />
                    </div>
                </div>
            ))}
        </div>
    );
}

// Composant pour la grille des séries
async function ShowsGrid({ shows, ratingMap }: { shows: Show[], ratingMap: Map<number, Rating> }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {shows.map((show) => {
                const rating = ratingMap.get(show.show_id);
                return (
                    <CardSerieCatalogue
                        key={show.show_id}
                        title={show.title}
                        image={show.image || undefined}
                        airdate={show.seasons[0]?.episodes[0]?.airdate || 'Date inconnue'}
                        showId={show.show_id}
                        averageRating={rating?.average || 0}
                        platforms={show.platforms}
                        genres={show.genres.map((g) => g.genres.name)}
                    />
                );
            })}
        </div>
    );
}

export const revalidate = 3600; // Revalider toutes les heures

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const params = await searchParams;
    const { page, sort, order, q } = params;
    const currentPage = Number(page) || 1;

    const filters = parseFilters(params);
    const { shows, showCount, ratingMap, totalPages } = await getShows(
        filters,
        q,
        currentPage,
        sort,
        order
    );

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
                            Découvrez notre collection de {showCount} séries et trouvez votre prochaine série préférée
                        </p>
                    </div>

                    {/* Contrôles du catalogue */}
                    <div className="mb-8 sm:mb-12">
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-lg font-medium text-primary">Filtres et recherche</h3>
                        </div>
                        <CatalogueControls key={`catalogue-controls-${currentPage}`} />
                    </div>

                    {/* Grille des séries avec Suspense */}
                    <Suspense fallback={<ShowsGridSkeleton />}>
                        <ShowsGrid shows={shows} ratingMap={ratingMap} />
                    </Suspense>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-8 sm:mt-12">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                baseUrl="/catalogue"
                            />
                        </div>
                    )}

                    {/* Message si aucun résultat */}
                    {shows.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-primary/60 text-lg">
                                Aucune série ne correspond à vos critères de recherche.
                            </p>
                        </div>
                    )}
                </div>
            </Section>
        </main>
    );
}