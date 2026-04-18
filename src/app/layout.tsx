import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import { AppEffects } from "@/components/providers/AppEffects";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voxa Studio — AI Voice Cloning & Text-to-Speech",
  description:
    "Premium dark-glass SaaS landing experience: clone voices, generate expressive speech, and ship multilingual audio with buttery motion and real-time previews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AppEffects>{children}</AppEffects>
      </body>
    </html>
  );
}
