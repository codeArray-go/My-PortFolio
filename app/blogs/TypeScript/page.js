import React from "react";
import Image from "next/image";

const page = () => {fe
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 text-white Poppins">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-8 flex flex-wrap items-center gap-2">
        <Image
          height={30}
          width={30}
          alt="Java logo"
          src={`${process.env.NEXT_PUBLIC_URL_LOGO}/typescript.svg`}
          className="shrink-0"
        />
        TypeScript:-
      </h1>

      {/* Introduction */}
      <div className="mb-6">
        <h2 className="font-bold text-lg sm:text-xl mb-2">Intoduction:-</h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          As web applications grow in size and complexity, maintaining
          JavaScript code becomes increasingly challenging. Bugs related to
          unexpected data types, unclear function contracts, and poor tooling
          can slow development and introduce errors.TypeScript was created to
          solve these problems. It builds on top of JavaScript by adding static
          typing, better tooling, and improved code maintainability—without
          removing any of JavaScript’s flexibility.
        </p>
      </div>

      {/* What is */}
      <div className="mb-6">
        <h2 className="font-bold text-lg sm:text-xl mb-2">What is Java:-</h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          TypeScript is a superset of JavaScript, which means Every valid
          JavaScript code is valid TypeScript TypeScript adds extra features on
          top of JavaScript TypeScript code is compiled into plain JavaScript In
          simple terms, TypeScript helps developers catch errors early and write
          more predictable code.
        </p>
      </div>

      {/* History */}
      <div>
        <h2 className="font-bold text-lg sm:text-xl mb-2">History :-</h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          JavaScript is dynamically typed, which means type-related errors often
          appear only at runtime. In large projects, this can lead to bugs that
          are difficult to track.TypeScript addresses this by: Detecting errors
          during development Making code easier to understand Improving
          collaboration in teams Scaling better for large applications.
        </p>
      </div>
    </section>
  );
};

export default page;
