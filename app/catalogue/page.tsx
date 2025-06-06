import { CardSerieCatalogue } from "@/features/catalogue/components/CardSerieCatalogue";
import { Section } from "@/features/layout/components/Section";
import { Pagination } from "@/features/catalogue/components/Pagination";
import { CatalogueControls } from "@/features/catalogue/components/CatalogueControls";
import { getShows } from "@/features/catalogue/actions/getShows";
import { parseFilters } from "@/features/catalogue/actions/parseFilters";
import { SearchParams } from "@/features/catalogue/types";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const { page, sort, order, q } = await searchParams;
    const currentPage = Number(page) || 1;

    const filters = parseFilters(await searchParams);
    const { shows, showCount, ratingMap, totalPages } = await getShows(
        filters,
        q,
        currentPage,
        sort,
        order
    );

    return (
        <main className="w-full min-h-screen bg-background-primary">
            <Section className="mt-20 mx-auto max-w-7xl px-4">
                <div className="bg-gradient-to-br from-background-secondary to-background-primary p-8 rounded-3xl border border-border-primary shadow-lg">
                    <h2 className="text-3xl font-title text-center text-primary mb-2">
                        Toutes les séries à regarder
                    </h2>
                    <p className="text-primary/60 text-center mb-8">
                        Découvrez notre collection de {showCount} séries
                    </p>

                    <CatalogueControls />

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                                    genres={show.genres.map(g => g.genres.name)}
                                />
                            );
                        })}
                    </div>

                    <div className="mt-8">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            baseUrl="/catalogue"
                        />
                    </div>
                </div>
            </Section>
        </main>
    );
}