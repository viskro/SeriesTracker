// app/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";
import { LayoutClient } from "./LayoutClient";
import { Roboto, Poppins, Space_Mono } from "next/font/google";
import { Notifications } from "@/components/Layout/Notifications";

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: "600" });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: "400" });
const spaceMono = Space_Mono({ variable: "--font-space-mono", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "TV Shows App",
  description: "Une application pour suivre vos séries préférées",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${roboto.variable} ${spaceMono.variable} font-text bg-background-primary text-primary antialiased`}>
        <LayoutClient>
          {children}
        </LayoutClient>
        <Notifications />
      </body>
    </html>
  );
}
