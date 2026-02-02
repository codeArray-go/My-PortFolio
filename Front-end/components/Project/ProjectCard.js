"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ items, tech }) => {
  const side = items.id % 2 === 0 ? "left" : "right";

  const directionImg = () => {
    return side === "left" ? -100 : 100;
  };

  const directionTxt = () => {
    return side === "left" ? 100 : -100;
  };

  return (
    <section className="w-full text-white my-10">
      <main
        className={`flex flex-col md:flex-row ${
          side === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } flex-wrap items-center justify-around gap-3`}
      >
        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, x: directionImg() }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          style={{
            WebkitMaskImage: `url(${process.env.NEXT_PUBLIC_URL}/MaskPaint.png)`,
            WebkitMaskSize: "cover",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: `url(${process.env.NEXT_PUBLIC_URL}/MaskPaint.png)`,
            maskSize: "cover",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
          className="relative w-full max-w-155 h-55 sm:h-75 md:h-100"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_PROJECTIMG}/${items.image}`}
            alt={items.heading}
            fill
            sizes="1000px"
            className="object-contain hover:scale-105 ease-in-out duration-500"
          />
        </motion.div>

        {/* Project Text */}
        <motion.div
          initial={{ opacity: 0, x: directionTxt() }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-start text-sm sm:text-[15px] w-full max-w-125 px-4 md:px-0 mt-4 md:mt-0">
            <h2 className="mb-2 text-xl sm:text-2xl font-bold underline text-amber-500">
              {items.heading} :-
            </h2>
            <p className="ms-1 sm:ms-3 my-2 tracking-wider">{items.dis}</p>

            {/* Tech stack */}
            <div className="ms-1 sm:ms-3">
              <h2 className="my-2 font-bold text-lg underline underline-offset-4 text-amber-500">
                Tech Stack:-{" "}
              </h2>
              <ol>
                {tech.map((item, idx) => {
                  return (
                    <li key={idx} className="list-decimal mx-7">
                      {item}
                    </li>
                  );
                })}
              </ol>
            </div>

            <li className="mt-4 text-[15px] list-disc mx-5">
              <span className="font-bold">Code Link:-</span>{" "}
              <Link
                href={items.link}
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                {items.link}
              </Link>
            </li>

            <button
              onClick={() => window.open(items.src, "_blank")}
              className="text-black text-sm cursor-pointer hover:scale-105 ease-in-out duration-300 bg-yellow-300 py-2.5 px-4 mt-3 rounded-lg flex items-center"
            >
              Visit project
              <Image
                className="ms-2"
                src={`${process.env.NEXT_PUBLIC_URL}/Arrow.svg`}
                height={20}
                width={20}
                alt="Arrow"
              />
            </button>
          </div>
        </motion.div>
      </main>

      {/* Divider line */}
      <div className="w-full h-px bg-white/10 mt-6"></div>
    </section>
  );
};

export default ProjectCard;
