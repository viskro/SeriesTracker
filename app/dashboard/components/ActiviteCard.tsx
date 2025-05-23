import { DashboardUserData } from "../DashboardClient";

interface Props {
    userData: DashboardUserData;
}

export const ActiviteCard = ({ userData }: Props) => {
    return (
        <div className="bg-gradient-to-br from-background-secondary to-background-primary p-6 rounded-2xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300">
            <h3 className="text-lg font-title text-accent-primary mb-4">
                Activité
            </h3>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                    <p className="text-sm text-text-primary/80">
                        Vous avez regardé un épisode de Breaking Bad
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                    <p className="text-sm text-text-primary/80">
                        Dernière série ajoutée :{" "}
                        {userData.users_shows[0]?.shows.title || "Aucune série"}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                    <p className="text-sm text-text-primary/80">
                        Nombre de commentaires : {userData.countComments}
                    </p>
                </div>
            </div>
        </div>
    );
};