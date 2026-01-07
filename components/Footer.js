"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full rounded-lg py-16 flex flex-col gap-3 items-center bg-zinc-900 text-white">
      {/* Heading */}
      <h1 className="text-lg sm:text-xl md:text-3xl font-black mb-6 text-center Nunito">
        Check Out My Social Media
      </h1>

      {/* Social Icons */}
      <div className="mb-10 flex flex-wrap gap-6 items-center justify-center">
        <Link
          href="https://www.linkedin.com/in/akhil-singh-bhandari-4267a4310/"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}/Logo/linkedin.svg`}
            className="invert"
            width={36}
            height={36}
            alt="LinkedIn"
          />
        </Link>

        <Link
          href="/"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}/Logo/Twitter.svg`}
            className="invert"
            width={36}
            height={36}
            alt="Twitter"
          />
        </Link>

        <Link
          href="https://github.com/codeArray-go"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}/Logo/github.svg`}
            width={36}
            height={36}
            className="invert"
            alt="Github"
          />
        </Link>

        <Link
          href="https://www.instagram.com/_bhayiya_ji/"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}/Logo/Instagram.svg`}
            width={36}
            height={36}
            className="invert"
            alt="Instagram"
          />
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-[11px] sm:text-xs text-center px-4">
        &copy; 2025 Akhil&apos;s Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
