"use client";

import { usePathname } from "next/navigation";
import Header from "@/features/layout/components/Header";
import Footer from "@/features/layout/components/Footer";
import { Toaster } from "sonner";
import { useSessionSync } from "@/shared/hooks/useSession";

export function LayoutClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname.startsWith("/auth");
    const isPresentationPage = pathname.startsWith("/presentation");
    useSessionSync();

    return (
        <>
            {!isAuthPage || isPresentationPage && <Header />}
            <Toaster />
            {children}
            {!isAuthPage || isPresentationPage && <Footer />}
        </>
    );
}
