import { Avatar, AvatarImage } from "@/components/shadcn/avatar";
import { CommentType } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Comment({ className, user, postedAt, content }: CommentType) {
    return (
        <div className={cn("w-full p-6 rounded-2xl border border-border-primary transition-all duration-300 hover:border-accent-primary/40", className)}>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-accent-primary/20">
                        <AvatarImage
                            src={`https://ui-avatars.com/api/?name=${user.name}&background=6C63FF&color=fff`}
                            alt={`Avatar de ${user.name}`}
                        />
                    </Avatar>
                    <div className="flex flex-col gap-1">
                        <span className="font-title text-text-primary">{user.name}</span>
                        <span className="text-text-primary/60 text-sm">
                            Posté le {new Date(postedAt).toLocaleDateString("fr-FR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                    </div>
                </div>
                <p className="text-text-primary/90 leading-relaxed pl-16">
                    {content}
                </p>
            </div>
        </div>
    );
}