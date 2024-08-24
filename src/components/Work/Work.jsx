import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import './Work.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Work() {
    useEffect(()=>{
        document.title = "navin .work";
        
    },[])

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
    <div className="bg-[#09080A] text-[#c0c0c6] min-h-screen pt-0 p-3 overflow-hidden font main">
    <div className="max-w-3xl mx-auto">
    
      <Navbar />
      <div className="flex justify-center pt-16">
      <div className="   max-w-md w-full min-h-[calc(100vh_-_165px)]  form grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-t-[1px] border-b-[1px]  border-[#939396] p-4 rounded-lg project_card bg-[#0f0d0d] hover:border-l-[1px] hover:bg-[#211f1f] hover:border-t-[0px] transition-all duration-300"
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
        </div>
      <Footer />
     
    </div>
  </div>
  );
}

export default Work;