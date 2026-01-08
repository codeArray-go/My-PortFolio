import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full text-gray-300 px-6 py-20 my-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}/Coder.gif`}
              alt="Akhil Singh Bhandari"
              className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover border border-gray-700"
            />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#121826] px-4 py-1 text-sm text-gray-400 rounded-full border border-gray-700">
              Web Developer
            </span>
          </div>
        </div>

        {/* Right Section - Content */}
        <div>
          <h2 className="text-4xl font-semibold text-white mb-4">
            My Story :-
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I’m Akhil Singh Bhandari. I started my coding journey in late 2024,
            exploring different technologies before deciding to focus on web
            development. My interest lies in building functional, clean, and
            maintainable applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I began with HTML, CSS, and JavaScript, then moved to React.js and
            the MERN stack. Alongside this, I revisited Java to strengthen my
            core programming fundamentals.
          </p>

          {/* Timeline */}
          <ul className="space-y-3 mb-6">
            {[
              "Started programming with Java",
              "Explored Blender and shifted focus to web development",
              "Built projects using HTML, CSS, and JavaScript",
              "Learned React.js and MERN stack",
              "Revisited and completed Java fundamentals",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                <span className="text-gray-400">{item}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3">
            {[
              "Java",
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 rounded-full text-sm bg-[#121826] border border-gray-700 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
