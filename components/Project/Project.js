import React from "react";
import ProjectCard from "./ProjectCard";
import { link } from "framer-motion/client";

const PorjectData = [
  {
    image: "AllLinks.webp",
    dis: "AllLinks is a responsive web application that lets users create a single, customizable page to display multiple links. Each user can sign and create a profile that includes their name, profile picture, and a list of personal or professional links (e.g., social media, portfolios, or websites). The frontend is built with Next.js and styled using Tailwind CSS to ensure mobile-friendly and clean layouts across devices.",
    heading: "AllLinks",
    tech: ["Next.js", "Tailwind css", "Mongodb", "Node.js", "express.js"],
    link: "https://github.com/codeArray-go/AllLinks_f.git",
    src: "https://all-links-f.vercel.app/",
    id: 1,
  },
  {
    image: "Linphase_Technology.png",
    dis: "Linphase Technology is a frontend-focused company website created to present the brand, services, and basic information in a clear and structured way. The project was built with the goal of responsiveness, and UI structure. The website includes multiple sections,with fully responsive layout and adaptiveness properly across different screen sizes.",
    tech: ["Next.js", "Tailwind css", "JavaScript", "motion"],
    heading: "Linphase Technology",
    link: "https://github.com/codeArray-go/Linphase-Technology.git",
    src: "http://linphasetechnology.com/",
    id: 2,
  },
];

const Project = () => {
  return (
    <main className="w-full flex flex-col items-center h-full">
      <h1
        id="Projects"
        className="text-white text-[33px] my-8 font-black uppercase "
      >
        &nbsp;PROJECTS DONE&nbsp;
      </h1>
      {PorjectData.map((item) => {
        return <ProjectCard key={item.id} items={item} tech={item.tech}/>;
      })}
    </main>
  );
};

export default Project;
