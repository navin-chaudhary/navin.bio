import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import "./Work.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import git1 from "/Images/git1.png";
import git2 from "/Images/git2.png";
import weather1 from "/Images/weather1.png";
import weather2 from "/Images/weather2.png";
import coffe1 from "/Images/coffe1.png";
import coffe2 from "/Images/coffe2.png";
import coffe3 from "/Images/coffe3.png";
import coffe4 from "/Images/coffe4.png";
import coffe5 from "/Images/coffe5.png";
import coffe6 from "/Images/coffe6.png";
import coffe7 from "/Images/coffe7.png";
import coffe8 from "/Images/coffe8.png";
import news1 from "/Images/news1.png";
import news2 from "/Images/news2.png";
import news3 from "/Images/news3.png";
import news4 from "/Images/news4.png";
import todo1 from "/Images/todo1.png";
import todo2 from "/Images/todo2.png";

function Work() {
  useEffect(() => {
    document.title = "navin .work";
  }, []);

  const projects = [
    {
     giturl:"https://github.com/navin-chaudhary/GitUser",
      title: "Gituser",
      url: "https://gituser.navin.bio",
      description:
        "Gituser is a website that allows you to enter a username and get all relevant information about a GitHub user or organization, including their followers, following, and repositories.",
      images: [`${git1}`, `${git2}`],
    },
    {
        giturl:"https://github.com/navin-chaudhary/Weather_App",
      title: "Weather App",
      url: "https://weatherapp.navin.bio",
      description:
        "Weather app is a website where you will find multiple tools on a single page, which includes week's forecast, Temperature, Weather mode, UV, Wind, Pressure, Humidity, Sunset/sunrise time and much more.",
      images: [`${weather1}`, `${weather2}`],
    },
    {
        giturl:"https://github.com/navin-chaudhary/CoffeWeb",
      title: "Coffee Website",
      url: "https://coffeweb.navin.bio",
      description:
        "I developed a website for a coffee shop, showcasing their menu, story, and brand identity. . I used React JavaScript , Tailwind ,Html  to build the website, and implemented responsive design to ensure a seamless experience across various devices.",
      images: [
        `${coffe1}`,
        `${coffe2}`,
        `${coffe3}`,
        `${coffe4}`,
        `${coffe5}`,
        `${coffe6}`,
        `${coffe7}`,
        `${coffe8}`,
      ],
    },
    {
        giturl:"https://github.com/navin-chaudhary/News",
      title: "News",
      url: "https://news.navin.bio",
      description:
        "News is a React app where you will find news highlights. This data is provided by the NYT API and you can sort news by category and you can also search for articles.",
      images: [`${news1}`, `${news2}`, `${news3}`, `${news4}`],
    },
    {
        giturl:"https://github.com/navin-chaudhary/Todo-List",
      title: "To-do List",
      url: "https://to-do.navin.bio",
      description:
        "These projects highlight my ability to create dynamic and responsive user interfaces, manage state efficiently and implement create, read, delete operations. This app showcases my skills in HTML, CSS and JavaScript.",
      images: [`${todo1}`, `${todo2}`],
    },
  ];

  return (
    <div className="bg-[#09080A] text-[#c0c0c6] min-h-screen pt-0 p-3 overflow-hidden font main">
      <div className="max-w-3xl mx-auto">
        <Navbar />
        <div className="flex justify-center pt-16  ">
          <div className="    w-full   min-h-[calc(100vh_-_165px)]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border-t-[1px] border-b-[1px]    border-[#0d0d0d] p-4 rounded-lg project_card bg-[#e4dddd]  hover:border-t-[1px] transition-all duration-300 overflow-hidden"
              >
                <div className="flex justify-center">
                  <div className="w-[96%] ">
                    <Swiper
                      effect="cards"
                      grabCursor={true}
                      modules={[EffectCards, Pagination]}
                      className="mySwiper"
                    >
                      {project.images.map((image, imageIndex) => (
                        <SwiperSlide key={imageIndex} className="rounded-lg">
                          <img
                            src={image}
                            alt={`${project.title} - Image ${imageIndex + 1}`}
                            className="w-full object-cover rounded-lg "
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <Link
                  to={project.url}
                  className="font-bold  mt-4 tracking-wider flex items-center gap-1 transition-all duration-300  w-max text-lg text-black cursor-pointer uppercase "
                >
                  {project.title}
                </Link>
                <p className="text-[#060606] capitalize mt-3 hover:scale-1  lg:h-40 sm:h-36  overflow-hidden ">
                  {project.description}
                </p>
                <div className=" flex items-center justify-around mt-2">
                  <Link
                  to={project.giturl}
                    area-message="not open sourced yet"
                    aria-disabled="false"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    <div className="flex items-center gap-3 text-black font-bold text-xl">
                      <span>
                        <FaGithub />
                      </span>
                      <span>Code</span>
                    </div>
                  </Link>
                  <Link
                  to={project.url}
                    area-message="not open sourced yet"
                    aria-disabled="false"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    <div className="flex items-center gap-3 text-black font-bold text-xl">
                      <span className="font-bold hover:translate-y-[-2px] duration-300 hover:text-blue-600">
                      <BiLinkExternal />
                      </span>
                      <span>Visit</span>
                    </div>
                  </Link>
                </div>
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
