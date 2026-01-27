import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor, ScrollProgress } from "@/components/ui";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rahul Prasad Shaw | Senior Systems Architect",
  description: "Senior Backend & Systems Engineer specializing in AI automation and scalable cloud architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${space.variable} ${inter.variable} font-sans bg-obsidian text-white`}>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
