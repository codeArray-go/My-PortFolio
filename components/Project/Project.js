import React from "react";
import ProjectCard from "./ProjectCard";

const PorjectData = [
  {
    image: "chween.png",
    dis: "This is a real-time chat application with a responsive, mobile-friendly interface that supports user authentication and one-to-one messaging. It focuses on reliable message delivery, simple UI design, and smooth performance across devices.",
    heading: "Chween",
    tech: [
      "React.js",
      "Tailwind css",
      "PostgreSQL",
      "Node.js",
      "express.js",
      "Socket.io",
      "Cloudinary",
    ],
    link: "https://github.com/codeArray-go/Chat_App",
    src: "https://chat-app-one-tau-18.vercel.app/",
    id: 1,
  },
  {
    image: "AllLinks.webp",
    dis: "AllLinks is a responsive web application that lets users create a single, customizable page to display multiple links. Each user can sign and create a profile that includes their name, profile picture, and a list of personal or professional links (e.g., social media, portfolios, or websites). The frontend is built with Next.js and styled using Tailwind CSS to ensure mobile-friendly and clean layouts across devices.",
    heading: "AllLinks",
    tech: ["Next.js", "Tailwind css", "Mongodb", "Node.js", "express.js"],
    link: "https://github.com/codeArray-go/AllLinks_f.git",
    src: "https://all-links-f.vercel.app/",
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

      <div className="w-full h-px bg-white/10 mt-6"></div>
      {PorjectData.map((item) => {
        return <ProjectCard key={item.id} items={item} tech={item.tech} />;
      })}
    </main>
  );
};

export default Project;
