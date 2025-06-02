"use client"

import { Heart, ListPlus, ListX } from "lucide-react";
import { addToList, removeFromList, toggleFavorite } from "../actions/ListActions";
import { useState } from "react";
import { useUIStore } from "@/lib/stores/uiStore";
import { NOTIFICATION_DURATION, NOTIFICATION_TYPES, NOTIFICATION_MESSAGES } from "@/lib/constants/notifications";
import { Button } from "@/components/shadcn/button";

interface Props {
    showId: number;
    userId: string;
    isInList: boolean;
    isFavorite: boolean;
}

export default function ListButtons({ showId, userId, isInList, isFavorite }: Props) {
    const [isLoading, setIsLoading] = useState(false);
    const { addNotification } = useUIStore();

    const handleListAction = async () => {
        setIsLoading(true);
        try {
            if (isInList) {
                const result = await removeFromList(showId, userId);
                if (result.success) {
                    addNotification({
                        id: Date.now().toString(),
                        type: NOTIFICATION_TYPES.INFO,
                        message: NOTIFICATION_MESSAGES.SHOW.REMOVED_FROM_FAVORITES,
                        duration: NOTIFICATION_DURATION
                    });
                } else {
                    throw new Error(result.error);
                }
            } else {
                const result = await addToList(showId, userId);
                if (result.success) {
                    addNotification({
                        id: Date.now().toString(),
                        type: NOTIFICATION_TYPES.SUCCESS,
                        message: NOTIFICATION_MESSAGES.SHOW.ADDED_TO_FAVORITES,
                        duration: NOTIFICATION_DURATION
                    });
                } else {
                    throw new Error(result.error);
                }
            }
        } catch (error) {
            addNotification({
                id: Date.now().toString(),
                type: NOTIFICATION_TYPES.ERROR,
                message: `${NOTIFICATION_MESSAGES.SHOW.ERROR} : ${error}`,
                duration: NOTIFICATION_DURATION
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleFavoriteAction = async () => {
        if (!isInList) return;
        setIsLoading(true);
        try {
            const result = await toggleFavorite(showId, userId);
            if (result.success) {
                addNotification({
                    id: Date.now().toString(),
                    type: NOTIFICATION_TYPES.SUCCESS,
                    message: isFavorite
                        ? NOTIFICATION_MESSAGES.SHOW.REMOVED_FROM_FAVORITES
                        : NOTIFICATION_MESSAGES.SHOW.ADDED_TO_FAVORITES,
                    duration: NOTIFICATION_DURATION
                });
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            addNotification({
                id: Date.now().toString(),
                type: NOTIFICATION_TYPES.ERROR,
                message: `${NOTIFICATION_MESSAGES.SHOW.ERROR} : ${error}`,
                duration: NOTIFICATION_DURATION
            });
        } finally {
            setIsLoading(false);
        }
    };

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