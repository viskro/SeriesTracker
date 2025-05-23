import { CardSerieCatalogue } from "@/components/Cards/CardSerieCatalogue";
import Filter from "@/components/Filters/Filter";
import Sort from "@/components/Filters/Sort";
import { Section } from "@/components/Layout/Section";
import { Pagination } from "@/components/shared/Pagination";
import prisma from "@/lib/prisma";

const ITEMS_PER_PAGE = 12;

export default async function Page({
    searchParams,
}: {
    searchParams: { page?: string };
}) {
    const currentPage = Number(searchParams.page) || 1;
    const skip = (currentPage - 1) * ITEMS_PER_PAGE;

    const showCount = await prisma.shows.count();
    const shows = await prisma.shows.findMany({
        skip,
        take: ITEMS_PER_PAGE,
        select: {
            show_id: true,
            title: true,
            image: true,
            seasons: {
                select: {
                    episodes: {
                        select: {
                            airdate: true,
                        }
                    }
                }
            }
        }
    });

    // Récupérer les notes moyennes pour toutes les séries
    const ratingStats = await prisma.userShows.groupBy({
        by: ['id_show'],
        _avg: {
            rating: true
        },
        _count: {
            rating: true
        }
    });

    // Créer un map des notes moyennes pour un accès facile
    const ratingMap = new Map(
        ratingStats.map(stat => [
            stat.id_show,
            {
                average: stat._avg.rating ? Math.round(stat._avg.rating) : 0,
                count: stat._count.rating
            }
        ])
    );

    const totalPages = Math.ceil(showCount / ITEMS_PER_PAGE);

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

                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-background-secondary rounded-2xl border border-border-primary mb-8">
                        <Filter />
                        <Sort />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {shows.map((show) => {
                            const rating = ratingMap.get(show.show_id);
                            return (
                                <CardSerieCatalogue
                                    key={show.show_id}
                                    title={show.title}
                                    image={show.image || 'https://placehold.co/400x400'}
                                    airdate={show.seasons[0]?.episodes[0]?.airdate || 'Date inconnue'}
                                    showId={show.show_id}
                                    averageRating={rating?.average || 0}
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