import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub, FaCode } from "react-icons/fa";
import "./Work.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useTheme } from "../../context/ThemeContext";
import Chatbot from "../Chatbot/Chatbot";
import eshop from "/Images/e-shop.png";
import eshop2 from "/Images/e-shop2.png";
import eshop3 from "/Images/e-shop3.png";
import eshop4 from "/Images/e-shop4.png";
import eshop5 from "/Images/e-shop5.png";
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
import home1 from "/Images/home1.png";
import home2 from "/Images/home2.png";
import home3 from "/Images/home3.png";
import home4 from "/Images/home4.png";

function Work() {
  const { isDark } = useTheme();
  
  useEffect(() => {
    document.title = "navin .work";
  }, []);

  const projects = [
    {
     giturl:"https://github.com/navin-chaudhary/e-commerce",
      title: "E-Commerce",
      url: "https://e-shop-new-2.vercel.app",
      description:
        "The e-commerce site provides a  responsive design, email/password and Google authentication, smooth navigation, and an organized product catalog. Users can easily  add items to their cart, save favorites, and enjoy seamless functionality on all devices.",
      images: [`${eshop}`,`${eshop3}`, `${eshop2}`,`${eshop4}`,`${eshop5}`],
    },
    {
     giturl:"https://github.com/navin-chaudhary/GitUser",
      title: "Gituser",
      url: "https://git-user-liart.vercel.app",
      description:
        "Gituser is a website that allows you to enter a username and get all relevant information about a GitHub user or organization, including their followers, following, and repositories.",
      images: [`${git1}`, `${git2}`],
    },
    {
        giturl:"https://github.com/navin-chaudhary/Weather_App",
      title: "Weather App",
      url: "https://weatherapp-git-main-navins-projects-a2362119.vercel.app",
      description:
        "Weather app is a website where you will find multiple tools on a single page, which includes week's forecast, Temperature, Weather mode, UV, Wind, Pressure, Humidity, Sunset/sunrise time and much more.",
      images: [`${weather1}`, `${weather2}`],
    },
    {
        giturl:"https://github.com/navin-chaudhary/CoffeWeb",
      title: "Coffee Website",
      url: "https://coffe-web-two.vercel.app",
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
      url: "https://news-theta-puce.vercel.app",
      description:
        "News is a React app where you will find news highlights. This data is provided by the NYT API and you can sort news by category and you can also search for articles.",
      images: [`${news1}`, `${news2}`, `${news3}`, `${news4}`],
    },
    {
        giturl:"https://github.com/navin-chaudhary/Todo-List",
      title: "To-do List",
      url: "https://todo-list-gamma-wheat.vercel.app",
      description:
        "These projects highlight my ability to create dynamic and responsive user interfaces, manage state efficiently and implement create, read, delete operations. This app showcases my skills in HTML, CSS and JavaScript.",
      images: [`${todo1}`, `${todo2}`],
    },
    {
        giturl:"https://github.com/navin-chaudhary/Home-Finder",
      title: "Home Finder",
      url: "https://home-finder-pasi-black.vercel.app/",
      description:
        "Discover your ideal home with HomeFinder. Browse thousands of quality listings with detailed photos and floor plans. Smart search tools help you filter by price, location, and amenities. Whether you want a city apartment or suburban house, find your perfect match today.",
      images: [`${home1}`, `${home2}`, `${home3}`, `${home4}`],
    },
  ];

  return (
    <>
      <div className={`min-h-screen pt-0 p-3 overflow-hidden font main transition-colors duration-300 ${
        isDark ? 'bg-[#09080A] text-[#c0c0c6]' : 'bg-[#f8fafc] text-[#64748b]'
      }`}>
      <div className="max-w-3xl mx-auto">
        <Navbar />
        
        {/* Header Section */}
        <div className="pt-16 pb-8 text-center">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-[#1e293b]'
          }`}>
            My Projects
          </h1>
          <p className={`text-lg lg:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
          }`}>
            Explore my collection of web applications and projects. Each project showcases different skills and technologies, from simple frontend applications to complex full-stack solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 pb-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`border-t-[1px] border-b-[1px] p-4 rounded-lg project_card transition-all duration-300 overflow-hidden hover:scale-[1.02] ${
                  isDark 
                    ? 'border-[#272627] bg-[#151212] shadow-blue-500/10 hover:shadow-blue-500/20 hover:border-[#3b82f6]' 
                    : 'border-[#e2e8f0] bg-white shadow-blue-500/20 hover:shadow-blue-500/30 hover:border-[#3b82f6]'
                }`}
              >
                <div className="flex justify-center">
                  <div className="w-[96%]">
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
                            className="object-cover w-full rounded-lg"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <Link
                  to={project.url}
                  className={`font-bold mt-4 tracking-wider flex items-center gap-1 transition-all duration-300 w-max text-lg cursor-pointer uppercase hover:scale-105 ${
                    isDark ? 'text-[#CFE5FF] hover:text-white' : 'text-[#1e293b] hover:text-[#3b82f6]'
                  }`}
                >
                  {project.title}
                </Link>
                <p className={`capitalize mt-3 hover:scale-1 lg:h-40 sm:h-36 overflow-hidden transition-colors duration-300 ${
                  isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                }`}>
                  {project.description}
                </p>
                <div className="flex items-center justify-around mt-2">
                  <Link
                    to={project.giturl}
                    area-message="not open sourced yet"
                    aria-disabled="false"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                                         <div className={`flex items-center gap-3 font-bold text-xl transition-all duration-300 hover:scale-105 ${
                       isDark ? 'text-[#c2c1c1] hover:text-[#3b82f6]' : 'text-[#1e293b] hover:text-[#3b82f6]'
                     }`}>
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
                                         <div className={`flex items-center gap-3 font-bold text-xl transition-all duration-300 hover:scale-105 ${
                       isDark ? 'text-[#c2c1c1] hover:text-[#3b82f6]' : 'text-[#1e293b] hover:text-[#3b82f6]'
                     }`}>
                       <span className="font-bold hover:translate-y-[-2px] duration-300">
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

        {/* Call to Action Section */}
        <div className={`text-center py-12 border-t rounded-xl mb-8 max-w-3xl mx-auto ${
          isDark ? 'border-[#272627] bg-[#151212]' : 'border-[#e2e8f0] bg-white shadow-lg'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-[#1e293b]'
          }`}>
            Interested in Working Together?
          </h2>
          <p className={`text-lg mb-6 transition-colors duration-300 ${
            isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
          }`}>
            Let's discuss your next project and bring your ideas to life! I'm always excited to take on new challenges and collaborate on innovative solutions.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-lg hover:shadow-xl'
                  : 'bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-lg hover:shadow-xl'
              }`}
            >
              <FaCode size={16} />
              Start a Project
            </Link>
            <a
              href="mailto:heynavin.im@gmail.com"
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-[#242323] text-[#c2c1c1] hover:bg-[#2d2c2c] border border-[#272627]'
                  : 'bg-gray-100 text-[#64748b] hover:bg-gray-200 border border-[#e2e8f0]'
              }`}
            >
              📧 Get in Touch
            </a>
          </div>
        </div>

        <Footer />
      </div>
      <Chatbot />
    </>
  );
}

export default Work;
