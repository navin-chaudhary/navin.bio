import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";
import { HoverEffect } from "./card-hover-effect";
function Projects() {


  const projects = [
    {
      title: "Gituser",
      url: "https://gituser.navin.bio",
      description: "Gituser is a website that allows you to enter a username and get all relevant information about a GitHub user or organization, including their followers, following, and repositories."
    },
    {
      title: "Weather App",
      url: "https://weatherapp.navin.bio",
      description: "Weather app is a website where you will find multiple tools on a single page, which includes week's forecast, Temperature, Weather mode, UV, Wind, Pressure, Humidity, Sunset/sunrise time and much more."
    },
    {
      title: "Coffee Website",
      url: "https://coffeweb.navin.bio",
      description: "I developed a website for a coffee shop, showcasing their menu, story, and brand identity. . I used React JavaScript , Tailwind ,Html  to build the website, and implemented responsive design to ensure a seamless experience across various devices."
    },
    {
      title: "To-do List",
      url: "https://to-do.navin.bio",
      description: "These projects highlight my ability to create dynamic and responsive user interfaces, manage state efficiently and implement create, read, delete operations. This app showcases my skills in HTML, CSS and JavaScript."
    },
    {
      title: "News",
      url: "https://news.navin.bio",
      description: "News is a React app where you will find news highlights. This data is provided by the NYT API and you can sort news by category and you can also search for articles."
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl lg:text-2xl text-white font-bold mb-7">
        Projects
      </h2>
      
      <HoverEffect items={projects} />
      
    </section>
  );
}

export default Projects;
