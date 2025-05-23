import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import PageClient from "./PageClient";
import { getUser } from "@/lib/auth-session";
import { trad } from "@/lib/utils";

type PageProps = {
    params: Promise<{ id: string }>
};

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const user = await getUser();
    const showId = parseInt(id);
    console.log(await getUser());

    if (isNaN(showId)) {
        notFound();
    }

    const show = await prisma.shows.findUnique({
        where: {
            show_id: showId,
        },
        include: {
            _count: {
                select: {
                    seasons: true,
                    comments: true,
                },
            },
            comments: {
                include: {
                    user: {
                        select: {
                            name: true,
                        },
                    },
                },
                orderBy: {
                    postedAt: "desc",
                },
            },
            seasons: {
                select: {
                    season_id: true,
                    show_id: true,
                    summary: true,
                    image: true,
                },
                orderBy: {
                    season_id: 'asc',
                },
            },
            show_cast: {
                select: {
                    person_id: true,
                    character_name: true,
                },
            },
        },
    });

    if (!show) {
        notFound();
    }

    // Récupérer la moyenne des notes et le nombre total de notes
    const ratingStats = await prisma.userShows.aggregate({
        where: {
            id_show: showId,
            rating: {
                not: null
            }
        },
        _avg: {
            rating: true
        },
        _count: {
            rating: true
        }
    });

    const averageRating = ratingStats._avg.rating ? Math.round(ratingStats._avg.rating) : 0;
    const totalRatings = ratingStats._count.rating;

    let isInList = false;
    let isFavorite = false;
    let currentRating = null;

    if (user?.id) {
        const userShow = await prisma.userShows.findUnique({
            where: {
                id_user_id_show: {
                    id_user: user.id,
                    id_show: show.show_id,
                },
            },
        });

        if (userShow) {
            isInList = true;
            isFavorite = userShow.is_favorite ?? false;
            currentRating = userShow.rating;
        }
    }

    const castRaw = await prisma.showCast.findMany({
        where: { show_id: showId },
        include: { cast: true },
    });
    const cast = castRaw.map((item) => ({
        id: item.cast.person_id,
        name: item.cast.name,
        image: item.cast.image,
        character: item.character_name,
    }));

    const seasons = show.seasons.map(season => ({
        id: season.season_id,
        image: season.image,
    }));

    const synopsis = await trad(show.summary);

    return (
        <PageClient
            show={show}
            isInList={isInList}
            isFavorite={isFavorite}
            currentRating={currentRating}
            averageRating={averageRating}
            totalRatings={totalRatings}
            cast={cast}
            seasons={seasons}
            synopsis={synopsis}
        />
    );
}