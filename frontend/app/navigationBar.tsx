'use client'
import Link from "next/link"
import { useState } from "react"

export default function NavigationBar () {
    const [navClicked, setNavClicked] = useState(false)

    return (
        <ul className={`flex gap-12 font-bold items-center`}>
            <li className="text-6xl md:hidden" onClick={() => setNavClicked(!navClicked)}>≡</li>
            <li className = {`text-2xl cursor-pointer md:inline hidden ${navClicked ? "inline absolute top-20 right-0 left-0 bg-white text-center" : ""}`}>
              <Link href="/gallery">GALLERY</Link>
            </li>
            <li className={`text-2xl cursor-pointer md:inline hidden ${navClicked ? "inline absolute top-28 right-0 left-0 bg-white text-center" : ""}`}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={`text-2xl cursor-pointer md:inline hidden ${navClicked ? "inline absolute top-36 right-0 left-0 bg-white text-center" : ""}`}>
              <Link href="/contact">CONTACT</Link>
            </li> 
        </ul>
    )
}