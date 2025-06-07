"use client"

import { Heart, ListPlus, ListX } from "lucide-react";
import { Button } from "@/shared/components/shadcn/button";
import { useListActions } from "../hooks/useListActions";
import { useAuthStore } from "@/shared/stores/authStore";

interface Props {
    showId: number;
    isInList: boolean;
    isFavorite: boolean;
}

export default function ListButtons({ showId, isInList, isFavorite }: Props) {
    // const { userId, isAuthenticated } = useAuth();
    const { user } = useAuthStore();
    const { isLoading, handleListAction, handleFavoriteAction } = useListActions(
        showId,
        user?.id || "",
        isInList,
        isFavorite
    );

    if (!user) {
        return null;
    }

    return (
        <div className="flex gap-4">
            <Button
                onClick={handleListAction}
                disabled={isLoading}
                size="lg"
                className={`flex items-center gap-2 hover:scale-105 transition-all duration-300 ${isInList
                    ? "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20"
                    : "bg-gradient-to-br from-accent-primary to-accent-primary/90 text-white hover:from-accent-primary/90 hover:to-accent-primary"
                    }`}
            >
                {isInList ? (
                    <>
                        <ListX className="w-5 h-5" />
                        Retirer de ma liste
                    </>
                ) : (
                    <>
                        <ListPlus className="w-5 h-5" />
                        Ajouter à ma liste
                    </>
                )}
            </Button>

            {isInList && (
                <Button
                    onClick={handleFavoriteAction}
                    disabled={isLoading}
                    size="lg"
                    className={`flex items-center gap-2 hover:scale-105 transition-all duration-300 ${isFavorite
                        ? "bg-accent-primary/10 text-accent-primary hover:bg-accent-primary/20 border border-accent-primary/20"
                        : "bg-gradient-to-br from-background-secondary to-background-primary text-primary hover:border-accent-primary/40 border border-border-primary"
                        }`}
                >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-accent-primary" : ""}`} />
                    {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                </Button>
            )}
        </div>
    );
} 