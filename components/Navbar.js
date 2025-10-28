import Image from "next/image"
import react from "react"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins-mono",
  subsets: ["latin"],
  weight: ['200', '500', '700']
});

const Navbar = () => {

  return (
    <nav className={`${poppins.className} w-screen flex items-center justify-center sm:justify-between gap-3 px-10 py-4`} >
      {/* Certification */}
      <div className="text-white hidden sm:flex flex-col items-center justify-center">
        <Image src="/AWS.png" width="50" height="50" alt="Amazon certificate" />
        <Image src={`${process.env.NEXT_PUBLIC_URL}/AWS.webp`} width="50" height="50" alt="Amazon certificate" />
        <p className="text-center text-[10px]">CERTIFICATION:<br/>SOLUTIONS ARCHITECTURE<br/>JOB SIMULATION</p>
      </div>

      {/* Social Media Handles */}
      <div id="Socialmedia_handles" className="flex gap-3">
        <a href="https://github.com/codeArray-go" target="_blank" className="h-10 w-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[rbga(255,255,255,0.07)] hover:scale-110 ease-in-out duration-300" >
          <Image src="/Logo/github.svg" width="24" height="24" alt="Github" className="invert" />
        </a>

        <a href="https://www.linkedin.com/in/akhil-singh-bhandari-4267a4310/" target="_blank" className="h-10 w-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[rbga(255,255,255,0.07)] hover:scale-110 ease-in-out duration-300" >
          <Image src="/Logo/linkedin.svg" width="24" height="24" alt="LinkedIn" className="invert" />
        </a>

        <a href="https://wa.me/+918882601382" target="_blank" className="h-10 w-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[rbga(255,255,255,0.07)] hover:scale-110 ease-in-out duration-300" >
          <Image src="/Logo/whatsapp.svg" width="24" height="24" alt="Whatsapp" className="invert" />
          <Image src={`${process.env.NEXT_PUBLIC_URL}/Logo/github.svg`} width="24" height="24" alt="Github" className="invert" />
        </a>

        <a href="https://www.linkedin.com/in/akhil-singh-bhandari-4267a4310/" target="_blank" className="h-10 w-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[rbga(255,255,255,0.07)] hover:scale-110 ease-in-out duration-300" >
          <Image src={`${process.env.NEXT_PUBLIC_URL}/Logo/linkedin.svg`} width="24" height="24" alt="LinkedIn" className="invert" />
        </a>

        <a href="https://wa.me/+918882601382" target="_blank" className="h-10 w-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[rbga(255,255,255,0.07)] hover:scale-110 ease-in-out duration-300" >
          <Image src={`${process.env.NEXT_PUBLIC_URL}/Logo/whatsapp.svg`} width="24" height="24" alt="Whatsapp" className="invert" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar