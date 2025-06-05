"use client"

import { Section } from "@/features/layout/components/Section";
import { SignInForm } from "@/features/auth/components/SignInForm";
import { useSession } from "@/lib/auth-client";
import { useAuthStore } from "@/lib/stores/authStore";
import { useUIStore } from "@/lib/stores/uiStore";
import { NOTIFICATION_DURATION, NOTIFICATION_TYPES, NOTIFICATION_MESSAGES } from "@/lib/constants/notifications";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);
    const { addNotification } = useUIStore();
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user) {
            setUser(session.user);
            addNotification({
                id: uuidv4(),
                type: NOTIFICATION_TYPES.SUCCESS,
                message: NOTIFICATION_MESSAGES.AUTH.LOGIN_SUCCESS,
                duration: NOTIFICATION_DURATION
            });
            router.push("/dashboard");
        }
    }, [session, setUser, router, addNotification]);

    return (
        <main className="w-full min-h-screen bg-background-primary flex items-center justify-center">
            <Section className="w-full max-w-md px-4">
                <SignInForm />
            </Section>
        </main>
    );
}