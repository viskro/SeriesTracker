import { getListeData } from "@/features/listePage/actions/getListeData";
import ListeClient from "@/features/listePage/components/ListeClient";

export default async function Liste() {
    const userShows = await getListeData();
    return <ListeClient userShows={userShows} />;
}
