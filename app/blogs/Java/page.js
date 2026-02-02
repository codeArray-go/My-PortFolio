import React from "react";
import Image from "next/image";
import CodeBlock from "@/components/BlogComponents/CodeBlock";

const Data = [
  {
    head: "int",
    desc: "A 32-bit signed integer and the most commonly used data type for whole numbers. Range is approximately -2 billion to +2 billion.",
  },
  {
    head: "byte",
    desc: "An 8-bit signed integer used to save memory in large arrays. Range is -128 to 127.",
  },
  {
    head: "short",
    desc: "A 16-bit signed integer, also used for memory-saving purposes when a byte is insufficient. Range is -32,768 to 32,767.",
  },
  {
    head: "long",
    desc: "A 64-bit signed integer for when the range of int is not large enough. Values typically end with an L literal (e.g., 100L).",
  },
  {
    head: "float",
    desc: "A single-precision 32-bit floating-point type for fractional numbers, sufficient for 6 to 7 decimal digits of precision. Values typically end with an f literal (e.g., 0.0f).",
  },
  {
    head: "double",
    desc: "A double-precision 64-bit floating-point type, generally the default choice for decimal values, offering 15 to 16 decimal digits of precision.",
  },
  {
    head: "boolean",
    desc: "Represents one of two logical values: true or false. It is used for conditional logic and flow control.",
  },
  {
    head: "char",
    desc: "A single 16-bit Unicode character (e.g., 'A', '#'). It stores values as single characters enclosed in single quotes.",
  },
];

const ExampleVariable = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full rounded-xl">
        {/* Code Line */}
        <div className="flex justify-center gap-4 sm:gap-8 text-2xl sm:text-4xl font-bold text-green-400 relative">
          {/* Data Type */}
          <div className="relative flex flex-col items-center">
            <span>Int</span>
            <span className="w-px h-6 bg-purple-400 mt-2"></span>
            <span className="mt-1 text-xs sm:text-sm text-purple-400 font-medium">
              Data Type
            </span>
          </div>

          {/* Variable Name */}
          <div className="relative flex flex-col items-center">
            <span>age</span>
            <span className="w-px h-6 bg-purple-400 mt-2"></span>
            <span className="mt-1 text-xs sm:text-sm text-purple-400 font-medium">
              Variable_name
            </span>
          </div>

          {/* Value */}
          <div className="relative flex flex-col items-center">
            <span>= 20;</span>
            <span className="w-px h-6 bg-purple-400 mt-2"></span>
            <span className="mt-1 text-xs sm:text-sm text-purple-400 font-medium">
              Value
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 text-white Poppins">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-8 flex flex-wrap items-center gap-2">
        <Image
          height={30}
          width={30}
          alt="Java logo"
          src={`${process.env.NEXT_PUBLIC_URL_LOGO}/java.svg`}
          className="shrink-0"
        />
        Java:-
      </h1>

      {/* Introduction */}
      <div className="mb-6">
        <h2 className="font-bold text-lg sm:text-xl mb-2">Intoduction:-</h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          Java a high-level, object-oriented programming language, it is one of
          the most popular and reliable programming languages in the world. Even
          after decades, it continues to power millions of applications across
          banking systems, enterprise software, mobile apps, and backend
          servers. For beginners, Java offers a strong foundation in programming
          concepts while also opening doors to long-term career opportunities.
          It is designed to be platform-independent, this means a java prgram
          can run on different operating system without modification, as long as
          JRE (java runtime environment) is available.
        </p>
      </div>

      {/* History */}
      <div>
        <h2 className="font-bold text-lg sm:text-xl mb-2">History :-</h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          Java was developed in 1995 with the goal of creating a language that
          could run on multiple devices and platforms. The first public release
          of Java (JDK 1.0) was on January 23, 1996, though it was first
          announced as an alpha in May 1995; it was developed by Sun
          Microsystems with James Gosling as the lead, later acquired by Oracle.
        </p>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200 italic mt-1">
          ** The language was initially called Oak after an oak tree that stood
          outside Gosling's office. But due to licensing issues it was named
          Java, the name 'java' was inspired by a type of coffee grown on the
          Indonesian island of Java **
        </p>
      </div>

      <section className="mt-5">
        <h2 className="font-bold text-lg sm:text-xl mb-2">Java Variables:-</h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-gray-200">
          Variables are those containers which are used to store data in memory,
          to define how data is stored, accessed, and manipulated .In java
          variables declaration involves specifying the data type and variable
          name, and ends with a semicolon. You can also assign value to a
          variable during its declaration using '=' operator.
        </p>
        <CodeBlock
          language="java"
          code={`public class Main {
    public static void main(String[] args) {
        int a = 12;
    }
}`}
        />

        <div className="mt-5 text-sm sm:text-[15px] leading-relaxed text-gray-200">
          A <span className="text-white font-bold">Variable</span> in java
          consist of three main things:-
          <ol className="list-disc mx-5">
            <li>
              <span className="text-white font-bold">Data type:</span> Defines
              the kind of data stored (e.g., int, String, float).
            </li>
            <li>
              <span className="text-white font-bold">Variable name:</span> A
              unique identifier following Java naming rules.
            </li>
            <li>
              <span className="text-white font-bold">value:</span> The actual
              data assigned to the variable.
            </li>
          </ol>
        </div>

        <ExampleVariable />

        {/* Data Type */}
        <p className="mt-8 text-sm sm:text-[15px] leading-relaxed text-gray-200">
          Java has two main categories of data types: primitive and
          non-primitive
        </p>
        <div className="mt-5 text-sm sm:text-[15px] leading-relaxed text-gray-200">
          <h1 className="font-bold text-lg sm:text-xl mb-1">Primitive :- </h1>
          <p>
            A set of predefined types defined by java and named as keyword.{" "}
          </p>
          <ol className="mt-4 list-disc ms-4">
            {Data.map((item, idx) => {
              return (
                <li key={idx} className="leading-6 my-2">
                  <span className="py-1 px-2 bg-[rgba(255,255,255,0.08)] rounded-sm">
                    {item.head} :
                  </span>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>

        <CodeBlock
          language="java"
          code={`public class Main {
    public static void main(String[] args) {
        int a = 12;
        byte b = 10;
        short c = 1000;
        long d = 100L;
        float e = 10.12f;
        double f = 20.12445773887;
        boolean g = true;   //or could be false
        char h = 'A';
    }
}`}
        />
      </section>
    </section>
  );
};

export default page;
