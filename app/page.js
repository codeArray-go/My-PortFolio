import Hero from "@/components/Hero/Hero";
import Project from "@/components/Project/Project";
import StatusLine from '@/components/StatusLine'
import { Poppins } from "next/font/google";


const poppins = Poppins({
  variable: "--font-poppins-mono",
  subsets: ["latin"],
  weight: ['200', '500', '700']
});

export default function Home() {
  return (
    <>
      <StatusLine />
      <main className={`${poppins.className} flex flex-col items-center justify-center `} >
        <h1
          className="text-white text-2xl sm:text-4xl font-black"
        >
          <span className="animate-wave text-2xl sm:text-4xl">
            👋🏻
          </span> Akhil Singh Bhandari.
        </h1>
        <Hero />
        <Project />
      </main>
    </>
  );
}
