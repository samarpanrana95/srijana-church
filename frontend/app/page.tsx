import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-[url('/images/backgroundOne.jpg')] bg-center bg-cover p-10 md:p-40 m-0 h-[90vh] relative font-bebas">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[3px] md:backdrop-blur-[2px] text-center px-10 py-30 flex items-center justify-evenly flex-col text-shadow-gray-700 text-shadow-sm gap-6">
          <h1 className="text-5xl md:text-4xl text-blue-200">Srijana Church</h1>
          <h2 className="text-5xl md:text-6xl text-blue-300">Welcomes you to</h2>
          <h3 className="text-5xl md:text-8xl text-blue-200">Youth Tihar Camp 2026</h3>
          <h4></h4>
        </div>
      </div>
      <div className="p-20 min-h-screen bg-linear-to-b from-blue-200 to-blue-500 font-bebas flex flex-col justify-center">
        <h2 className="text-6xl mb-4">Join Us on <span className="text-8xl text-red-500 underline">Nov 7 - Nov 9</span><span className="ml-4 text-4xl text-black">rs700 per person</span></h2>        
        <h2 className="text-6xl text-center">This time, with a fun theme of</h2>
        <h3 className="text-8xl text-right"><span className="text-red-600">Avengers: Age of God</span></h3>
        <h4 className="text-4xl text-right">Faith for the Impossible</h4>
      </div>
      <div className="p-20 bg-white text-black font-bebas">
        <div className="relative">
          <h2 className="text-8xl mb-10 text-center">Our Four Avengers <span className="absolute bottom-[-10] text-2xl text-purple-500">(SNEAK PEEK)</span></h2>
        </div>
        <div className="avenger text-6xl text-red-500">Daniel</div>
        <div className="avenger text-6xl text-blue-500">Paul Silas</div>
        <div className="avenger text-6xl text-green-500">Joshua Jericho Wall</div>
        <div className="avenger text-6xl text-yellow-500">Shadrach, Meshach and Abednego</div>
      </div>
      <div>
        <h5 className="text-2xl text-center p-2 underline text-blue-800 bg-gray-200 font-bebas">
          <Link href="/about">Click here for more info</Link>
        </h5>
        <div className="verse bg-black text-white
        text-center text-5xl px-10 py-40 font-bebas">
          “Not by might nor by power, but by my Spirit,” says the LORD Almighty. <span className="text-2xl">— Zechariah 4:6</span></div>
      </div>
    </div>
  )
}
