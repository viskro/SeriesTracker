import { DashboardUserData } from "../types";

interface Props {
    userData: DashboardUserData
}

export const ArchivesCard = ({ userData }: Props) => {
    return (
        <div className="bg-gradient-to-br from-background-secondary to-background-primary p-6 rounded-2xl border border-border-primary hover:border-accent-primary/40 transition-all duration-300">
            <h3 className="text-lg font-title text-accent-primary mb-4">Archives</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                    <p className="text-sm text-text-primary/80">
                        <span className="text-accent-primary">{userData.archivedShowsCount}</span> série{userData.archivedShowsCount !== 1 ? 's' : ''} archivée{userData.archivedShowsCount !== 1 ? 's' : ''}
                    </p>
                </div>
                {userData.archivedShowsCount > 0 && (
                    <button
                        className="w-full mt-4 px-4 py-2 bg-accent-primary/10 hover:bg-accent-primary/20 text-accent-primary rounded-lg hover:cursor-pointer transition-colors duration-200 text-sm font-medium"
                    >
                        Voir les archives
                    </button>
                )}
            </div>
        </div>
    );
}; 