import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter as FontSans } from "next/font/google"

import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heavenly Lanka Vacations",
  description:
    "Crafting Unforgettable Journeys to Sri Lanka.",
  icons: {
    icon: ["/assets/favicon.ico"],
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <div className="flex flex-col min-h-[100dvh]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
