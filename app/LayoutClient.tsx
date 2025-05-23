"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "sonner";
import { useSessionSync } from "@/lib/hooks/useSession";

export function LayoutClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname.startsWith("/auth");
    useSessionSync();

    return (
        <>
            {!isAuthPage && <Header />}
            <Toaster />
            {children}
            {!isAuthPage && <Footer />}
        </>
    );
}
