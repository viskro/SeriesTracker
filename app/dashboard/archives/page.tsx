import { getArchivesData } from "@/features/archivesPage/actions/getArchivesData";
import ArchivesClient from "@/features/archivesPage/components/ArchivesClient";

export default async function Archives() {
    const userShows = await getArchivesData();
    return <ArchivesClient userShows={userShows} />;
}
