import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="mb-8 border-t-[1px] border-[#939396] pt-5">
      <h2 className="text-xl lg:text-2xl text-white font-bold mb-5">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="bg-gray-900 p-4 rounded-lg ">
          <Link
            to="https://git-user-liart.vercel.app"
            className="font-bold border-b-2 tracking-widest hover:text-blue-500 transition-all duration-300 border-gray-500  w-max text-lg text-white cursor-pointer"
          >
            Gituser
          </Link>
          <p className="text-[#c2c1c1] capitalize mt-3">
            Gituser is a website that allows you to enter a username and get all
            relevant information about a GitHub user or organization, including
            their followers, following, and repositories.
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <Link
            to="https://weatherapp-navin-projects.vercel.app/"
            className="font-bold border-b-2 text-lg tracking-widest hover:text-blue-500 transition-all duration-300 border-gray-500 w-max text-white cursor-pointer"
          >
            Weather App
          </Link>
          <p className="text-[#c2c1c1] capitalize mt-3">
            weather app is a website where you will find multiple tools on a
            single page, which includes week's forecast, Temperature, Weather
            mode,uv, Wind, Pressure, Humidity, Sunset/sunrise time and much
            more.
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <Link
            to="https://news-theta-puce.vercel.app"
            className="font-bold border-b-2  hover:text-blue-500 transition-all duration-300border-gray-500 w-max text-lg tracking-widest text-white cursor-pointer"
          >
            News
          </Link>
          <p className="text-[#c2c1c1] capitalize mt-3">
            News is a React app where you will find news highlights. This data
            is provided by the NYT API and you can sort news by category and you
            can also search for articles.
          </p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          <Link
            to="https://todo-list-gamma-wheat.vercel.app"
            className="font-bold border-b-2 tracking-widest hover:text-blue-500 transition-all duration-300 border-gray-500 w-max text-lg text-white cursor-pointer"
          >
            To-do List
          </Link>
          <p className="text-[#c2c1c1] capitalize mt-3">
            These projects highlight my ability to create dynamic and responsive
            user interfaces, manage state efficiently and implement create,
            read, delete operations.This app showcases my skills in HTML, CSS
            and JavaScript
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
