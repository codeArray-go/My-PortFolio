import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 text-white Poppins">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-8 flex flex-wrap items-center gap-2">
        <Image
          height={30}
          width={30}
          alt="Java logo"
          src={`${process.env.NEXT_PUBLIC_URL_LOGO}/javascript.svg`}
          className="shrink-0"
        />
        JavaScript:-
      </h1>

      {/* Introduction */}
      <div className="mb-6">
        <h2 className="font-bold text-lg sm:text-xl mb-2">Intoduction:-</h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          JavaScript is one of the most important programming languages in
          today’s software ecosystem. It is the backbone of interactive websites
          and modern web applications. From simple animations on a webpage to
          complex full-stack applications, JavaScript plays a central role. For
          beginners, JavaScript is often the first language they learn because
          it is easy to start with and immediately rewarding. At the same time,
          it is powerful enough to build large-scale applications used by
          millions of users.
        </p>
      </div>

      {/* What is */}
      <div className="mb-6">
        <h2 className="font-bold text-lg sm:text-xl mb-2">What is Java:-</h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          JavaScript is a high-level, interpreted programming language primarily
          used to make web pages interactive. Unlike HTML, which defines
          structure, and CSS, which controls styling, JavaScript adds behavior
          to web applications. JavaScript runs directly in the browser, allowing
          developers to create dynamic content such as form validation,
          animations, live updates, and user interactions without reloading the
          page.
        </p>
      </div>

      {/* History */}
      <div>
        <h2 className="font-bold text-lg sm:text-xl mb-2">History :-</h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          JavaScript was created in 1995 to make web pages more dynamic. Over
          time, it evolved from a simple scripting language into a full-fledged
          programming language capable of running both in browsers and on
          servers. Today, JavaScript is used not only for frontend development
          but also for backend systems, mobile apps, desktop applications, and
          even game development.
        </p>
      </div>
    </section>
  );
};

export default page;
