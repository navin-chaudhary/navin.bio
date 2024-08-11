import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";

function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((el) => {
      if (!el) return;

      const handleMouseMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        el.style.transform = `perspective(1000px) rotateX(${deltaY * 10}deg) rotateY(${-deltaX * 10}deg) translateZ(20px)`;
      };

      const handleMouseLeave = () => {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      };

      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

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
      title: "CoffeWeb",
      url: "https://coffeweb.navin.bio",
      description: "News is a React app where you will find news highlights. This data is provided by the NYT API and you can sort news by category and you can also search for articles. This app showcases my skills in React, Tailwind and JavaScript."
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="border-t-[1px] border-b-[1px] border-[#939396] p-4 rounded-lg project_card bg-[#0f0d0d] hover:border-l-[1px] hover:bg-[#211f1f] hover:border-t-[0px] transition-all duration-300"
          >
            <Link
              to={project.url}
              className="font-bold border-b-[1px] tracking-wider flex items-center gap-1 transition-all duration-300 hover:border-gray-500 w-max text-lg text-white cursor-pointer "
            >
              {project.title}
              <span className="hover:translate-y-[-2px] hover:text-blue-500 transition-all duration-300">
                <FaExternalLinkAlt />
              </span>
            </Link>
            <p className="text-[#c2c1c1] capitalize mt-3 hover:scale-1 ">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;