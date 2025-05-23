"use client";

import { useEffect } from "react";
import { useUIStore } from "@/lib/stores/uiStore";
import { CheckCircle, XCircle, Info, AlertCircle, X } from "lucide-react";

const getNotificationStyles = (type: "success" | "error" | "info" | "warning") => {
    const baseStyles = "p-4 rounded-xl shadow-lg transform transition-all duration-300 flex items-start gap-3 max-w-md";
    const typeStyles = {
        success: "bg-accent-primary/10 text-accent-primary border border-accent-primary/20",
        error: "bg-red-500/10 text-red-500 border border-red-500/20",
        warning: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
        info: "bg-blue-500/10 text-blue-500 border border-blue-500/20"
    };
    return `${baseStyles} ${typeStyles[type]}`;
};

const getNotificationIcon = (type: "success" | "error" | "info" | "warning") => {
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

export function Notifications() {
    const { notifications, removeNotification } = useUIStore();

    useEffect(() => {
        notifications.forEach((notification) => {
            if (notification.duration) {
                setTimeout(() => {
                    removeNotification(notification.id);
                }, notification.duration);
            }
        });
    }, [notifications, removeNotification]);

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className={getNotificationStyles(notification.type)}
                >
                    {getNotificationIcon(notification.type)}
                    <p className="flex-1 font-text text-sm">{notification.message}</p>
                    <button
                        onClick={() => removeNotification(notification.id)}
                        className="flex-shrink-0 hover:opacity-70 transition-opacity"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ))}
        </div>
    );
}