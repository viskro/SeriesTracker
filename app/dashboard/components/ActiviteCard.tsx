import { DashboardUserData } from "../DashboardClient";

interface Props {
    userData: DashboardUserData;
    lastEpisodeWatched: {
        shows: {
            title: string;
        };
    } | null;
}

export const ActiviteCard = ({ userData, lastEpisodeWatched }: Props) => {
    return (
        <div className="bg-gradient-to-br from-background-secondary to-background-primary p-6 rounded-2xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300">
            <h3 className="text-lg font-title text-accent-primary mb-4">
                Activité
            </h3>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                    {!lastEpisodeWatched ? (
                        <p className="text-sm text-text-primary/80">
                            Vous n&apos;avez pas encore regardé d&apos;épisodes.
                        </p>
                    ) : (
                        <p className="text-sm text-text-primary/80">
                            Vous avez regardé un épisode de <span className="text-accent-primary">{lastEpisodeWatched?.shows.title}</span>
                        </p>
                    )
                    }
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                    <p className="text-sm text-text-primary/80">
                        Dernière série ajoutée :{" "}
                        <span className="text-accent-primary">{userData.users_shows[0]?.shows.title || "Aucune série"}</span>
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                    <p className="text-sm text-text-primary/80">
                        Nombre de commentaires : <span className="text-accent-primary">{userData.countComments}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};