import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Chatbox } from "@/components/Chatbox";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wild Dogs | Duo Portfolio",
  description:
    "Wild Dogs — a futuristic, clean duo portfolio by Kenno and Erana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} dark`}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative min-h-dvh">
          <div className="pointer-events-none absolute inset-0 fx-grid opacity-70" />
          <div className="pointer-events-none absolute inset-0 fx-scanline opacity-25" />
          <div className="pointer-events-none absolute inset-0 fx-noise" />
          <div className="relative">
            <Navbar />
            {children}
            <Chatbox />
          </div>
        </div>
      </body>
    </html>
  );
}
