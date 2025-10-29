"use client";

import React from "react";
import Image from "next/image";

const ProjectCard = ({ items }) => {
  return (
    <section className="w-full text-white my-10">
      <main
        className={`flex flex-col md:flex-row ${items.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } flex-wrap items-center justify-center gap-6`}
      >
        {/* Project Image */}
        <div
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
          className="relative w-full max-w-[620px] h-[220px] sm:h-[300px] md:h-[400px]"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_PROJECTIMG}/${items.image}`}
            alt={items.heading}
            fill
            sizes="1000px"
            className="object-contain hover:scale-105 ease-in-out duration-500"
          />
        </div>

        {/* Project Text */}
        <div className="flex flex-col items-start text-justify text-sm sm:text-[15px] w-full max-w-[500px] px-4 md:px-0 mt-4 md:mt-0">
          <h2 className="mb-2 text-xl sm:text-2xl font-bold underline text-blue-500">
            {items.heading} :-
          </h2>
          <p className="ms-1 sm:ms-3 my-2">{items.dis}</p>
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
      </main>

      {/* Divider line */}
      <div className="w-full h-px bg-white/10 mt-6"></div>
    </section>
  );
};

export default ProjectCard;
