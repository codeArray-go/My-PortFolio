import React from "react";
import ProjectCard from "./ProjectCard";

const PorjectData = [
  {
    image: "AllLinks.webp",
    dis: "AllLinks is a responsive web application that lets users create a single, customizable page to display multiple links. Each user can sign and create a profile that includes their name, profile picture, and a list of personal or professional links (e.g., social media, portfolios, or websites). The frontend is built with Next.js and styled using Tailwind CSS to ensure mobile-friendly and clean layouts across devices.",
    heading: "AllLinks",
    tech: ["Next.js", "Tailwind css", "JavaScript", "motion"],
    src: "https://all-link-f.vercel.app/",
    id: 1,
  },
  {
    image: "Linphase_Technology.png",
    dis: "Linphase Technology is a frontend-focused company website created to present the brand, services, and basic information in a clear and structured way. The project was built with the goal of practicing real-world website layout, responsiveness, and UI structure without relying on backend logic. The website includes multiple sections such as a landing page, company overview, services, and contact information. The layout is fully responsive and adapts properly across different screen sizes. Emphasis was placed on clean design, readable content structure, and smooth user interaction.This project does not include backend development. All content is static and handled on the client side, making it lightweight and fast to load.",
    tech: ["Next.js", "Tailwind css", "JavaScript", "motion"],
    heading: "Linphase Technology",
    src: "http://linphasetechnology.com/",
    id: 2,
  },
];

const Project = () => {
  return (
    <main className="w-full flex flex-col items-center h-full">
      <h1
        id="Projects"
        className="text-white text-5xl my-8 font-black uppercase underline underline-offset-8"
      >
        &nbsp;PROJECTS DONE&nbsp;
      </h1>
      {PorjectData.map((item) => {
        return <ProjectCard key={item.id} items={item} tech={item.tech} />;
      })}
    </main>
  );
};

export default Project;
