"use client";

import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akhil-singh-bhandari-4267a4310/",
    icon: "/linkedin.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/codeArray-go",
    icon: "/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_bhayiya_ji/",
    icon: "/Instagram.svg",
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#Projects" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-extrabold Nunito">
            Akhil Singh Bhandari
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Web developer focused on building clean, functional, and scalable
            web applications using modern JavaScript frameworks.
          </p>
          <p className="text-gray-500 text-xs">
            Based in India · Open to opportunities
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Tech */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-6">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL_LOGO}${social.icon}`}
                    width={32}
                    height={32}
                    alt={social.name}
                    className="opacity-80 hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
            <p className="text-gray-400 text-sm">
              HTML · CSS · JavaScript · React · Node.js · MongoDB · Java
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-zinc-700 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Akhil Singh Bhandari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
