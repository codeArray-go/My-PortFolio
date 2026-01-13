import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "500", "700"],
});

const Navbar = () => {
  return (
    <nav
      className={`${poppins.className} w-full flex flex-col sm:flex-row items-center sm:justify-between gap-6 px-4 sm:px-10 py-4`}
    >
      {/* Certification */}
      <div className="text-white hidden sm:flex flex-col items-center Nunito font-black text-3xl">
        <Link
          href="/"
          className="cursor-pointer"
        >
          &lt;ASB &#8725;&gt;
        </Link>
      </div>

      {/* Blog Menu */}
      <div className="relative bg-[rgba(255,255,255,0.06)] py-5 px-6 sm:px-16 rounded-2xl">
        <span className="absolute -top-2.5 left-3 bg-[#9b9b9bf8] px-4 py-0.5 text-xs rounded-full border border-gray-700">
          My Blogs
        </span>

        <ul className="flex flex-wrap justify-center items-center gap-4 text-white text-sm sm:text-base">
          <Link
            href="/"
            className="cursor-pointer p-2 bg-[rgba(255,255,255,0.1)] rounded-full"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}/Home.svg`}
              alt="home"
              height={25}
              width={25}
            />
          </Link>
          <Link
            href="/blogs/Java"
            className="cursor-pointer hover:underline underline-offset-4"
          >
            Java
          </Link>
          <Link
            href="/blogs/JavaScript"
            className="cursor-pointer hover:underline underline-offset-4"
          >
            JavaScript
          </Link>
          <Link
            href="/blogs/TypeScript"
            className="cursor-pointer hover:underline underline-offset-4"
          >
            TypeScript
          </Link>
        </ul>
      </div>

      {/* Social Media Handles */}
      <div id="Socialmedia_handles" className="flex gap-3 justify-center">
        {[
          {
            href: "https://github.com/codeArray-go",
            icon: "github.svg",
            alt: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/akhil-singh-bhandari-4267a4310/",
            icon: "linkedin.svg",
            alt: "LinkedIn",
          },
          {
            href: "https://wa.me/+918882601382",
            icon: "whatsapp.svg",
            alt: "WhatsApp",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[rgba(255,255,255,0.07)] hover:scale-110"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}/Logo/${item.icon}`}
              width={24}
              height={24}
              alt={item.alt}
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
