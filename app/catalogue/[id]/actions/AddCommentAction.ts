'use server'

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function createComment(content: string, idUser: string, idShow: number) {
    try {

        if (!content || typeof content !== "string") {
            throw new Error("Le contenu du commentaire est requis");
        }

        await prisma.showComments.create({
            data: {
                id_user: idUser,
                id_show: idShow,
                content,
                postedAt: new Date(),
            },
        });

        revalidatePath(`/catalogue/${idShow}`);
    } catch (error) {
        console.error("Erreur lors de la création du commentaire:", error);
        throw new Error("Impossible d'ajouter le commentaire");
    }
}