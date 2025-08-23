import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";
import "./Project.css";
import { HoverEffect } from "./card-hover-effect";
import { useTheme } from "../../context/ThemeContext";

function Projects() {
  const { isDark } = useTheme();

  const projects = [
    {
      title: "E-Commerce",
      url: "https://e-shop-new-2.vercel.app",
      gitUrl: "https://github.com/navin-chaudhary/e-commerce",
      description: "Full-featured online store with authentication, payment integration, and responsive design. Built with MERN stack and modern UI/UX principles.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Full Stack"
    },
    {
      title: "Home Finder",
      url: "https://home-finder-pasi-black.vercel.app/",
      gitUrl: "https://github.com/navin-chaudhary/Home-Finder",
      description: "Discover your ideal home with HomeFinder. Browse thousands of quality listings with detailed photos and floor plans. Smart search tools help you filter by price, location, and amenities.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      category: "Frontend"
    },
    {
      title: "Gituser",
      url: "https://git-user-liart.vercel.app",
      gitUrl: "https://github.com/navin-chaudhary/GitUser",
      description: "GitHub profile viewer with real-time data fetching. Search any GitHub user and get detailed information about their repositories and activity.",
      technologies: ["React", "JavaScript", "GitHub API", "Tailwind CSS"],
      category: "Frontend"
    },
    {
      title: "Weather App",
      url: "https://weatherapp-git-main-navins-projects-a2362119.vercel.app",
      gitUrl: "https://github.com/navin-chaudhary/Weather_App",
      description: "Comprehensive weather application with forecasts, UV index, wind data, and beautiful weather animations. Features location-based weather updates.",
      technologies: ["React", "Weather API", "JavaScript", "CSS3"],
      category: "Frontend"
    },
    {
      title: "Coffee Website",
      url: "https://coffe-web-two.vercel.app",
      gitUrl: "https://github.com/navin-chaudhary/CoffeWeb",
      description: "Elegant coffee shop website showcasing menu, story, and brand identity. Responsive design with smooth animations and modern UI.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML5"],
      category: "Frontend"
    },
    {
      title: "To-do List",
      url: "https://todo-list-gamma-wheat.vercel.app",
      gitUrl: "https://github.com/navin-chaudhary/Todo-List",
      description: "Dynamic task management application with CRUD operations. Clean interface with local storage and responsive design.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      category: "Frontend"
    },
    {
      title: "News",
      url: "https://news-theta-puce.vercel.app",
      gitUrl: "https://github.com/navin-chaudhary/News",
      description: "News aggregator powered by NYT API with category filtering and search functionality. Real-time news updates with clean presentation.",
      technologies: ["React", "NYT API", "JavaScript", "CSS3"],
      category: "Frontend"
    }
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      'React': <FaReact className="text-blue-500" />,
      'Node.js': <FaNodeJs className="text-green-600" />,
      'MongoDB': <FaDatabase className="text-green-500" />,
      'JavaScript': <SiJavascript className="text-yellow-400" />,
      'TypeScript': <SiTypescript className="text-blue-600" />,
      'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
      'Express': <FaNodeJs className="text-gray-600" />,
      'Stripe': <div className="w-4 h-4 bg-purple-600 rounded"></div>,
      'GitHub API': <FaGithub className="text-gray-800" />,
      'Weather API': <div className="w-4 h-4 bg-blue-400 rounded"></div>,
      'NYT API': <div className="w-4 h-4 bg-red-600 rounded"></div>,
      'HTML5': <div className="w-4 h-4 bg-orange-500 rounded"></div>,
      'CSS3': <div className="w-4 h-4 bg-blue-500 rounded"></div>,
      'Local Storage': <div className="w-4 h-4 bg-gray-500 rounded"></div>
    };
    return iconMap[tech] || <div className="w-4 h-4 bg-gray-400 rounded"></div>;
  };

  return (
    <section className="mb-12">
      <div className="mb-8 text-center">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-[#1e293b]'
        }`}>
          Featured Projects
        </h2>
        <p className={`text-lg transition-colors duration-300 ${
          isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
        }`}>
          Here are some of my recent projects showcasing my skills and passion for web development
        </p>
      </div>
      
      <HoverEffect items={projects} getTechIcon={getTechIcon} />     
    </section>
  );
}

export default Projects;
