import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muse",
  description: "Music app",
};

import { cn } from "@/lib/utils"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add the Inter font to the <head> section */}
        <link
          href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`}
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-inter antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
