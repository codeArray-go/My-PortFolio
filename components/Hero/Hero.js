import React from "react";
import Image from "next/image";
import CodeProfile from "./CodeProfile";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";

const robotoslab = Roboto_Slab({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center w-full px-4 sm:px-6 md:px-10 my-8 font-poppins">
      {/* Left Portion */}
      <div
        id="left"
        className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-[600px]"
      >
        {/* Heading */}
        <h1
          className={`text-white font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide ${robotoslab.className}`}
        >
          A, <span className="text-yellow-300">MERN</span> STACK DEVELOPER
        </h1>

        {/* Practices */}
        <div className="my-6 text-white">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Practices include:
          </h2>
          <div
            id="Buttons"
            className="mt-4 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {["Learning Java", "Clean Code", "Learn AI"].map((label, i) => (
              <button
                key={i}
                className="text-white bg-[rgba(101,101,101,0.2)] border border-gray-500 rounded-full py-2.5 px-5 text-sm sm:text-base cursor-pointer hover:bg-[rgba(255,255,255,0.15)] hover:scale-105 transition duration-300"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Interests */}
        <p className="w-full text-gray-400 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base leading-relaxed">
          Love JavaScript
          <Image
            className="mx-1"
            src={`${process.env.NEXT_PUBLIC_URL}/Logo/javascript.svg`}
            width={20}
            height={20}
            alt="javascript"
          />
          <span className="hidden sm:inline text-lg sm:text-2xl font-light">
            |
          </span>
          Eager to learn new technology
          <span className="hidden sm:inline text-lg sm:text-2xl font-light">
            |
          </span>
          Always use modern and updated tech.
        </p>

        {/* Buttons */}
        <div
          id="Resume_More_Button"
          className="text-white mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
        >
          <button className="px-5 py-3 bg-cyan-600 rounded-xl hover:scale-105 cursor-pointer transition duration-300">
            Learn More
          </button>
          <button className="px-5 py-3 border border-gray-400 rounded-xl cursor-pointer hover:bg-[rgba(57,58,68,0.52)] hover:scale-105 transition duration-300">
            Get Resume
          </button>
          <Link href="#Projects" className="ease-in px-5 py-3 bg-cyan-600 rounded-xl hover:scale-105 cursor-pointer transition duration-300">
            Learn More
          </Link>
          <Link href="https://codearray-go.github.io/My_resume/" target="_blank" className="px-5 py-3 border border-gray-400 rounded-xl cursor-pointer hover:bg-[rgba(57,58,68,0.52)] hover:scale-105 transition duration-300">
            Get Resume
          </Link>
        </div>
      </div>

      {/* Right Portion */}
      <div
        id="right"
        className="mt-10 lg:mt-0 max-w-[600px] text-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <CodeProfile />
      </div>
    </main>
  );
};

export default Hero;
