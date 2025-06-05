"use client"

import { Heart, ListPlus, ListX } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { useListActions } from "../hooks/useListActions";
import { useAuth } from "../../../lib/hooks/useAuth";
import { useAuthStore } from "@/lib/stores/authStore";

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
                variant={isInList ? "destructive" : "default"}
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
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
                    variant={isFavorite ? "secondary" : "default"}
                    size="lg"
                    className="hover:scale-105 transition-transform duration-300"
                >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                    {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                </Button>
            )}
        </div>
    );
} 