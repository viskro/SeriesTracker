// app/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";
import { LayoutClient } from "./LayoutClient";
import { Roboto, Poppins, Space_Mono } from "next/font/google";
import { Notifications } from "@/features/layout/components/Notifications";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: "600" });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: "400" });
const spaceMono = Space_Mono({ variable: "--font-space-mono", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "SeriesTracker",
  description: "Une application pour garder la trace de vos séries préférées.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${roboto.variable} ${spaceMono.variable} font-text bg-background-primary text-primary antialiased`}>
        <LayoutClient>
          {children}
        </LayoutClient>
        <Notifications />
        <Analytics />
      </body>
    </html>
  );
}
