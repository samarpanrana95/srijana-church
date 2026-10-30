import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

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
      <body className="flex flex-col min-h-screen ">
        <header className="font-bebas w-screen flex px-18 py-5 justify-between bg-white text-blue-400 border-solid border-b-4 border-b-blue-200 sticky top-0 z-50">
          <span className="text-2xl cursor-pointer font-bold">
            <Link href="/">Srijana</Link>
          </span>
          <ul className="flex gap-12 font-bold">
            <li className="text-2xl cursor-pointer">
              <Link href="/gallery">GALLERY</Link>
            </li>
            <li className="text-2xl cursor-pointer">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="text-2xl cursor-pointer">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </header>
        <div className="main grow">
          {children}
        </div>
        <footer className="bg-white p-1  w-full text-center text-blue-300 font-bebas fixed bottom-0 z-50">@srijanachurch2026</footer>
      </body>
    </html>
  )
}
