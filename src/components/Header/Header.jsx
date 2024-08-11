import React from "react";
import logo from "/Images/Logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex items-center mb-8 md:mt-4 lg:mt-4 gap-4 lg:gap-5">
      <div className="bg-[#696868] lg:w-28 lg:h-28 md:w-24 md:h-24 w-20 h-20 rounded-full overflow-hidden">
        <img
          src={logo}
          alt="Profile"
          className=" w-24 h-20 lg:w-28  lg:h-28 md:w-24 md:h-24 rounded-full mr-4 object-cover bg-slate-600"
        />
      </div>
      <div>
        <h1 className=" text-xl lg:text-3xl text-[#FAFAFA] font-bold ">
          Hey I'm
        </h1>
        <p className="text-[#CFE5FF] font-bold text-2xl lg:text-3xl">
          Navin Chaudhary
        </p>
        <p className="lg:text-lg text-sm text-[#ebebf1] ">
          Frontend focused Full Stack Developer
        </p>
        <Link to="/contact" >
        <div className="flex items-center bg-[#242323] border-t-[1px] border-b-[1px] border-[#7a7878] w-44 justify-center rounded-md mt-[3px] cursor-pointer">
        <span class="relative flex h-2 w-2 mr-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
        </span>
        <p className="lg:text-md  text-md text-[#eff5f1] ">
          Available for Work!
        </p>
        </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
