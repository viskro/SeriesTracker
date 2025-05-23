import prisma from "@/lib/prisma";
import DashboardClient from "./DashboardClient";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth-session";

export default async function Dashboard() {
    const user = await getUser();

    if (!user) {
        redirect('/auth/signin');
    }

    const userData = await prisma.user.findUnique({
        where: {
            id: user.id
        },
        select: {
            id: true,
            ShowComments: {
                select: {
                    content: true,
                    postedAt: true,
                    user: {
                        select: {
                            name: true
                        }
                    }
                }
            },
            users_shows: {
                select: {
                    id_user: true,
                    id_show: true,
                    is_favorite: true,
                    is_archived: true,
                    status: true,
                    added_at: true,
                    shows: {
                        select: {
                            show_id: true,
                            title: true,
                            image: true,
                            summary: true
                        }
                    }
                },
                orderBy: {
                    added_at: "desc"
                }
            },
            _count: {
                select: {
                    users_shows: true
                }
            }
        }
    });

    const showComments = await prisma.showComments.count({
        where: {
            id_user: user.id
        }
    });
    const episodeComments = await prisma.episodesComments.count({
        where: {
            id_user: user.id
        }
    });

    const countComments = episodeComments + showComments;

    const archivedShowsCount = await prisma.userShows.count({
        where: {
            id_user: user.id,
            is_archived: true
        }
    });

    if (!userData) {
        redirect('/auth/signin');
    }

    return <DashboardClient userData={{ ...userData, archivedShowsCount, countComments }} />;
}