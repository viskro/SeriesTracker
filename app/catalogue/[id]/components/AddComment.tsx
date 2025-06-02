'use client'

import { Label } from "@/components/shadcn/label";
import { Textarea } from "@/components/shadcn/textarea";
import { createComment } from "../actions/AddCommentAction";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/shadcn/button";
import { useState } from "react";
import { useUIStore } from "@/lib/stores/uiStore";
import { NOTIFICATION_DURATION, NOTIFICATION_TYPES, NOTIFICATION_MESSAGES } from "@/lib/constants/notifications";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    idUser: string;
    idShow: number;
}



export default function AddComment({ idUser, idShow }: Props) {
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { addNotification } = useUIStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;

        setIsLoading(true);
        try {
            await createComment(content, idUser, idShow,);

            setContent("");
            addNotification({
                id: uuidv4(),
                type: NOTIFICATION_TYPES.SUCCESS,
                message: NOTIFICATION_MESSAGES.COMMENT.ADDED,
                duration: NOTIFICATION_DURATION
            });

        } catch (error) {
            addNotification({
                id: uuidv4(),
                type: NOTIFICATION_TYPES.ERROR,
                message: `${NOTIFICATION_MESSAGES.COMMENT.ERROR} : ${error}`,
                duration: NOTIFICATION_DURATION
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full bg-gradient-to-br from-background-secondary to-background-primary p-8 rounded-2xl border border-border-primary">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <Label
                    htmlFor="content"
                    className="text-xl font-title text-accent-primary"
                >
                    Ajouter un commentaire
                </Label>
                <Textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="resize-none bg-border-primary border-border-primary text-text-primary placeholder:text-text-primary/50 focus:border-accent-primary/40 transition-colors duration-300"
                    placeholder="Écrivez votre commentaire ici..."
                    rows={4}
                />
                <button
                    type="submit"
                    disabled={isLoading || !content.trim()}
                    className={cn(
                        buttonVariants({ variant: "default" }),
                        "bg-accent-primary hover:bg-accent-primary/90 text-white transition-all duration-300 w-fit self-end",
                        isLoading && "opacity-50 cursor-not-allowed"
                    )}
                >
                    {isLoading ? "Envoi en cours..." : "Publier"}
                </button>
            </form>
        </div>
    );
}