import Link from "next/link"

export default function Contact() {
    return (
        <div className="flex justify-center items-center flex-col h-screen bg-linear-to-b from-cyan-100 to-blue-300  font-bebas">
            <div className="w-full px-20">
                <h2 className="text-6xl text-blue-500 text-left block w-full mb-20">Want to Contact Us?</h2>
                <h3 className="text-left text-3xl text-black ml-50 mb-8">Phone No: 98--------</h3>
                <h3 className="text-left text-3xl text-black ml-50 mb-8">Email: -------------@gmail.com</h3>
                <h3 className="text-left text-3xl text-black ml-50 mb-8">Location: Bagdole, Lalitpur (Near Toran School)</h3>
                <h3 className="text-left text-3xl text-black ml-50 mb-8">Google Maps :
                    <Link href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwiw5JWF2t-XAxUAAAAAHQAAAAAQBQ..i&udm&fvr=1&pvq=Cg0vZy8xMWp0MXN2eWd5IhQKDnNyaWphbmEgY2h1cmNoEAIYA4kBU12JlnrIs48&lqi=Cg5zcmlqYW5hIGNodXJjaEjd67Wc5LCAgAhaGBAAEAEYABgBIg5zcmlqYW5hIGNodXJjaJIBFmNodXJjaF9vZl90aGVfbmF6YXJlbmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTndiazFwZFRKQlJSQUL6AQQIABAU&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&ftid=0x39eb19b7ee98591f:0x8fb3c87a96895d53" className="underline" target="_blank"
  rel="noopener noreferrer"> Click here</Link>
                </h3>
                <h4 className="text-right text-blue-800 text-2xl">Thank you for visiting our page.</h4>
            </div>
        </div>
    )
}