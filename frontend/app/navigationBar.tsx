'use client'
import Link from "next/link"
import { useState } from "react"



export default function NavigationBar () {
    const [navClicked, setNavClicked] = useState(false)

    function toggleNavSate() {
      setNavClicked(!navClicked)
    }

    return (
        <ul className={`flex gap-12 font-bold items-center`}>
            <li className="text-4xl md:hidden" onClick={toggleNavSate}>≡</li>
            <li className = {`text-2xl cursor-pointer md:inline hidden ${navClicked ? "inline absolute top-15 right-0 left-0 z-51 bg-white text-center" : ""}`}>
              <Link href="/gallery" onClick={toggleNavSate}>GALLERY</Link>
            </li>
            <li className={`text-2xl cursor-pointer md:inline hidden ${navClicked ? "inline absolute top-23 right-0 left-0 z-52 bg-white text-center" : ""}`}>
              <Link href="/about" onClick={toggleNavSate}>ABOUT</Link>
            </li>
            <li className={`text-2xl cursor-pointer md:inline hidden ${navClicked ? "inline absolute top-31 right-0 left-0 z-53 bg-white text-center" : ""}`}>
              <Link href="/contact" onClick={toggleNavSate}>CONTACT</Link>
            </li> 
        </ul>
    )
}