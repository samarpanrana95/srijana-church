import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import NavigationBar from "./navigationBar";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-bebas-neue',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srijana Church",
  description: "Srijana Church located in Bagdole, Lalitpur, Nepal is a christian church spreading love and kindness.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={bebasNeue.variable}>
      <body className="flex flex-col min-h-screen w-full">
        <header className="font-bebas px-4 py-2 md:px-18 md:py-5 sticky top-0 z-50 w-full flex justify-between items-center bg-white text-blue-400 border-solid border-b-4 border-b-blue-200">
          <span className="text-3xl leading-0 md:text-2xl cursor-pointer font-bold">
            <Link href="/">Srijana</Link>
          </span>
          <NavigationBar />
        </header>
        <div className="main grow">
          {children}
        </div>
        <footer className="bg-white p-1  w-full text-center text-blue-300 font-bebas fixed bottom-0 z-50">@srijanachurch2026</footer>
      </body>
    </html>
  )
}
