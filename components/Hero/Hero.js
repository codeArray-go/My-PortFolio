"use client";

import React from "react";
import Image from "next/image";
import CodeProfile from "./CodeProfile";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const robotoslab = Roboto_Slab({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const Practices = [
  { text: "Learn New Tech", src: "learn.svg" },
  { text: "Clean Coding", src: "code.svg" },
  { text: "Using Ai", src: "ai.svg" },
];

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center w-full px-4 sm:px-6 md:px-10 my-8 font-poppins">
      {/* Left Portion */}

      <motion.div
        initial={{ opacity: 0.3, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        id="left"
        className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-150"
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
            {Practices.map((item, i) => (
              <button
                key={i}
                className="text-white bg-[rgba(101,101,101,0.2)] border border-gray-500 rounded-full py-2.5 px-5 text-sm sm:text-base hover:scale-105 transition duration-300 flex gap-2"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL_PRACTICE}/${item.src}`}
                  alt="img"
                  height={20}
                  width={20}
                />
                {item.text}
              </button>
            ))}
          </div>
        </div>

        {/* Interests */}
        <p className="w-full text-gray-400 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base leading-relaxed">
          Love Java
          <Image
            className="mx-1"
            src={`${process.env.NEXT_PUBLIC_URL}/Logo/java.svg`}
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
          className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
        >
          {/* Hire Me */}
          <Link
            href="https://wa.me/918882601382"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-cyan-600 text-white rounded-xl
               transition-all duration-300
               hover:scale-105 hover:bg-cyan-700
               active:scale-95"
          >
            To Hire Me
          </Link>

          {/* Resume */}
          <Link
            href="https://codearray-go.github.io/My_resume/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3
               border border-gray-400 rounded-xl text-white
               transition-all duration-300
               hover:scale-105 hover:bg-[rgba(57,58,68,0.52)]
               active:scale-95"
          >
            Get Resume
            <DotLottieReact
              src="https://lottie.host/07a63149-b014-4aef-9d6a-015cf0866ff7/Nttw3xTPaf.lottie"
              loop
              autoplay
              style={{ width: 30, height: 30 }}
            />
          </Link>
        </div>
      </motion.div>

      {/* Right Portion */}
      <motion.div
        initial={{ opacity: 0.3, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        id="right"
        className="mt-10 lg:mt-0 max-w-150 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <CodeProfile />
      </motion.div>
    </main>
  );
};

export default Hero;
