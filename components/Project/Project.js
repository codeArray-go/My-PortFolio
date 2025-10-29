import React from 'react'
import ProjectCard from './ProjectCard'

const PorjectData = [
  {
    image: "AllLinks.webp",
    dis: "AllLinks is a responsive web application that lets users create a single, customizable page to display multiple links. Each user can sign and create a profile that includes their name, profile picture, and a list of personal or professional links (e.g., social media, portfolios, or websites). The frontend is built with Next.js and styled using Tailwind CSS to ensure mobile-friendly and clean layouts across devices.",
    heading: "AllLinks",
    src: "https://all-link-f.vercel.app/",
    id: 1
  },
  {
    image: "MP3_player.webp",
    dis: "This MP3 player is a front-end application built using Js logics, designed to play audio files retrieved from the browser's local storage. It offers core features such as play, pause, skip, and track navigation. By utilizing local storage, the application ensures fast access to stored songs and provides a smooth, music experience for users, all within an intuitive and responsive interface.",
    heading: "Mp3 Player",
    src: "https://github.com/codeArray-go/Mp3_Player",
    id: 2
  },
  {
    image: "URl_Shortner.webp",
    dis: "URL Shortener is a web application designed to simplify long, complex URLs into short, shareable links. Built using modern web technologies, it features a clean, responsive interface where users can input any valid URL and receive a compact version that redirects seamlessly to the original address. The application securely stores each shortened URL in a MongoDB database, allowing for easy management and scalability. This project demonstrates practical use of backend logic, database integration, and user-friendly design — making it both a functional tool and a showcase of full-stack development skills.",
    heading: "URL shortner",
    src: "https://github.com/codeArray-go/Url_Shortener",
    id: 3
  },
]

const Project = () => {
  return (
    <main className="w-full flex flex-col items-center h-full">
      <h1 id='Projects' className="text-white text-5xl my-8 font-black">PROJECTS</h1>
      {PorjectData.map((item) => {
        return (<ProjectCard key={item.id} items={item} />)
      })
      }
    </main>
  )
}

export default Project
