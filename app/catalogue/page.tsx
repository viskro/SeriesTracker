import { CardSerieCatalogue } from "@/components/Cards/CardSerieCatalogue";
import Filter from "@/components/Filters/Filter";
import Sort from "@/components/Filters/Sort";
import { Section } from "@/components/Layout/Section";
import { Pagination } from "@/components/shared/Pagination";
import prisma from "@/lib/prisma";
import { buildOrderBy, buildWhereClause, FilterType } from "@/lib/types/filters";

const ITEMS_PER_PAGE = 12;

type ShowWithRelations = {
    show_id: number;
    title: string;
    image: string | null;
    summary: string | null;
    seasons: {
        episodes: {
            airdate: string | null;
        }[];
    }[];
    platforms: {
        platforms: {
            name: string;
        };
    }[];
    genres: {
        genres: {
            name: string;
        };
    }[];
};

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{
        page?: string;
        platform?: string;
        category?: string;
        rating?: string;
        initial?: string;
        sort?: string;
        order?: string;
    }>;
}) {
    const { page, platform, category, initial, sort, order, rating } = await searchParams;
    const currentPage = await Number(page) || 1;
    const skip = (currentPage - 1) * ITEMS_PER_PAGE;

    // Construire les filtres
    const filters: Partial<Record<FilterType, string[]>> = {};
    if (platform) filters.platform = platform.split(',').filter(Boolean);
    if (category) filters.category = category.split(',').filter(Boolean);
    if (rating) filters.rating = rating.split(',').filter(Boolean);
    if (initial) filters.initial = initial.split(',').filter(Boolean);

    // Construire la clause where
    const whereClause = buildWhereClause(filters as Record<FilterType, string[]>);

    // Construire l'ordre de tri
    const orderBy = buildOrderBy(sort as any, order as any);

    const showCount = await prisma.shows.count({
        where: whereClause
    });

    const shows = await prisma.shows.findMany({
        where: whereClause,
        skip,
        take: ITEMS_PER_PAGE,
        // @ts-ignore
        orderBy,
        select: {
            show_id: true,
            title: true,
            image: true,
            summary: true,
            seasons: {
                select: {
                    episodes: {
                        select: {
                            airdate: true,
                        }
                    }
                }
            },
            platforms: {
                select: {
                    platforms: {
                        select: {
                            name: true,
                        }
                    }
                }
            },
            genres: {
                select: {
                    genres: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    }) as ShowWithRelations[];

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