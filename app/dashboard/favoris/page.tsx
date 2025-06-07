import { getFavorisData } from "@/features/listeFavorisPage/actions/getFavorisData";
import FavorisClient from "@/features/listeFavorisPage/components/FavorisClient";

export default async function Liste() {
    const userShows = await getFavorisData();
    return <FavorisClient userShows={userShows} />;
}
