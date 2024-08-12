import type { Metadata } from "next";
import localFont from "next/font/local";

import { Outfit } from "next/font/google";
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
      <body className={outfit.className}>
        <div className="flex flex-col min-h-[100dvh]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
