'use client'

import { Label } from "@/components/shadcn/label";
import { Textarea } from "@/components/shadcn/textarea";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/shadcn/button";
import { useCommentActions } from "../hooks/useCommentActions";
import { useAuthStore } from "@/lib/stores/authStore";

interface Props {
    idShow: number;
}

export default function AddComment({ idShow }: Props) {
    // const { userId, isAuthenticated } = useAuth();
    const { user } = useAuthStore();
    const { content, setContent, isLoading, handleSubmit } = useCommentActions(user?.id || "", idShow);

    if (!user) {
        return null;
    }

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