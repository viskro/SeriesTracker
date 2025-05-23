export interface UserData {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null;
}

export interface CommentType {
    className?: string;
    user: {
        name: string;
    };
    postedAt: Date;
    content: string;
}

interface Season {
    show_id: number;
    summary: string | null;
    image: string | null;
}

interface Cast {
    person_id: number;
    character_name: string;
}

export interface Show {
    show_id: number;
    title: string;
    image: string | null;
    summary: string | null;
    seasons: Season[];
    show_cast: Cast[];
    comments: CommentType[];
    _count: {
        seasons: number;
        comments: number;
    };
}

export interface UsersShows {
    id_user: UserData["id"];
    id_show: Show["show_id"];
    is_favorite: boolean | null;
    is_archived: boolean | null;
    status: "to_watch" | "ongoing" | "finished" | null;
    added_at: Date | null;
}