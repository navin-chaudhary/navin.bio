import React from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiPeerlist } from "react-icons/si";
function Navbar() {
  return (
    <div className="bg-[#040816] text-[#9e9ea4] border-t-[1px] border-[#939396]  mt-7  pt-4 pb-2">
      <div className="w-full  flex justify-between  ">
      <div>
        <Link
          to="/"
          className="text-xl hover:text-white transition-all duration-300"
        >
          Navin Chaudhary
        </Link>
      </div>
      
      <ul className="flex gap-3 text-2xl">
        <li><CiMail /></li>
        <li><FaLinkedin /></li>
        <li><IoLogoGithub /></li>
        <li><SiPeerlist /></li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
