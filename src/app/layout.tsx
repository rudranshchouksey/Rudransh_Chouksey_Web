import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GradientMenu from "@/components/navbar/gradient-menu";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudransh Chouksey - Portfolio",
  description: "Full-stack developer and designer crafting digital experiences",
  icons: {
    icon: "/rudransh-v1.png",
    apple: "/rudransh-v1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        
        <main className="relative bg-black z-10 overflow-x-hidden"> 
                {/* pt-20 added to push content below fixed navbar */}
          <GradientMenu />
            {children}
        </main>
      </body>
    </html>
  );
}