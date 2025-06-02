import { DashboardUserData } from "../DashboardClient";

interface Props {
    userData: DashboardUserData
    countShowsOngoing: number;
    countShowsFinished: number;
}

export const ProgressionCard = ({ countShowsFinished, countShowsOngoing }: Props) => {

    return (
        <div className="bg-gradient-to-br from-background-secondary to-background-primary p-6 rounded-2xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300">
            <h3 className="text-lg font-title text-accent-primary mb-4">Progression</h3>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-sm text-text-primary/80 mb-1">
                        <span>Séries en cours</span>
                        <span className="text-accent-primary">{countShowsOngoing}</span>
                    </div>
                    <div className="h-2 bg-border-primary rounded-full overflow-hidden">
                        <div className="h-full w-[60%] bg-accent-primary rounded-full"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm text-text-primary/80 mb-1">
                        <span>Séries terminées</span>
                        <span className="text-accent-primary">{countShowsFinished}</span>
                    </div>
                    <div className="h-2 bg-border-primary rounded-full overflow-hidden">
                        <div className="h-full w-[80%] bg-accent-primary rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};