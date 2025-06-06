import { DashboardUserData } from "../types";

interface Props {
    userData: DashboardUserData
    countShowsOngoing: number;
    countShowsFinished: number;
    totalCatalogueShows: number;
    totalUserListShows: number;
    timeSpent: string;
    timeTowatch: string;
}

export const ProgressionCard = ({ countShowsFinished, countShowsOngoing, totalCatalogueShows, totalUserListShows, timeSpent, timeTowatch }: Props) => {

    const ongoingPercentage = totalCatalogueShows > 0 ? (countShowsOngoing / totalCatalogueShows) * 100 : 0;
    const finishedPercentage = totalUserListShows > 0 ? (countShowsFinished / totalUserListShows) * 100 : 0;

    return (
        <div className="bg-gradient-to-br from-background-secondary to-background-primary p-6 rounded-2xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300">
            <h3 className="text-lg font-title text-accent-primary mb-4">
                Progression
            </h3>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-sm text-text-primary/80 mb-1">
                        <span>Séries en cours</span>
                        <span className="text-accent-primary">
                            {countShowsOngoing} / {totalCatalogueShows}
                        </span>
                    </div>
                    <div className="h-2 bg-border-primary rounded-full overflow-hidden">
                        <div
                            className="h-full bg-accent-primary rounded-full"
                            style={{ width: `${ongoingPercentage}%` }}
                        ></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm text-text-primary/80 mb-1">
                        <span>Séries terminées</span>
                        <span className="text-accent-primary">
                            {countShowsFinished} / {totalUserListShows}
                        </span>
                    </div>
                    <div className="h-2 bg-border-primary rounded-full overflow-hidden">
                        <div
                            className="h-full bg-accent-primary rounded-full"
                            style={{ width: `${finishedPercentage}%` }}
                        ></div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 text-sm text-text-primary/80 mb-2">
                    <span>Temps passé à regarder</span>
                    <span className="text-accent-primary text-sm">{timeSpent}</span>
                </div>
                <div className="flex flex-col gap-1 text-sm text-text-primary/80 mb-1">
                    <span>Temps restant à regarder</span>
                    <span className="text-accent-primary text-sm">{timeTowatch}</span>
                </div>
            </div>
        </div>
    );
}; 