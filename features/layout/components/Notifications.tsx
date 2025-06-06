"use client";

import { useEffect } from "react";
import { useUIStore } from "@/shared/stores/uiStore";
import { getNotificationStyles, getNotificationIcon } from "../actions/getNotification";
import { X } from "lucide-react";



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