import { CheckCircle, XCircle, Info, AlertCircle } from "lucide-react";

export const getNotificationStyles = (
    type: "success" | "error" | "info" | "warning"
) => {
    const baseStyles =
        "p-4 rounded-xl shadow-lg transform transition-all duration-300 flex items-start gap-3 max-w-md";
    const typeStyles = {
        success:
            "bg-accent-primary/10 text-accent-primary border border-accent-primary/20",
        error: "bg-red-500/10 text-red-500 border border-red-500/20",
        warning: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
        info: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
    };
    return `${baseStyles} ${typeStyles[type]}`;
};

export const getNotificationIcon = (
    type: "success" | "error" | "info" | "warning"
) => {
    switch (type) {
        case "success":
            return <CheckCircle className="w-5 h-5 flex-shrink-0" />;
        case "error":
            return <XCircle className="w-5 h-5 flex-shrink-0" />;
        case "warning":
            return <AlertCircle className="w-5 h-5 flex-shrink-0" />;
        case "info":
            return <Info className="w-5 h-5 flex-shrink-0" />;
    }
}; 