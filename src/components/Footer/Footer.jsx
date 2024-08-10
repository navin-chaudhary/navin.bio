import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import'./Footer.css'
function Navbar() {
  return (
    <div className="bg-[#040816] text-[#9e9ea4]   mt-7  pt-4 pb-1">
      <div className="w-full  flex justify-between  ">
      <div>
        <Link
          to="/"
          className="text-xl hover:text-white transition-all duration-300"
        >
          Navin Chaudhary
        </Link>
      </div>
      
      <ul className="flex gap-1 md:gap-2 items-center links">
        <li className="text-muted-foreground hover:text-white ">
          <Link
            className="flex items-center px-1  tooltip"
            to='mailto:hello@navin.bio'
            aria-label={"Email"}
          >
            <MdEmail />
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1 tooltip"
            to='https://github.com/Navin-Chaudhary'
            aria-label={"Github"}
          >
            <IoLogoGithub/>
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1 tooltip"
            to='https://www.linkedin.com/in/navin-chaudhary09/'
            aria-label={"LinkedIn"}
          >
            <FaLinkedin/>
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1 tooltip"
            to='https://peerlist.io/navinhaudhary'
            aria-label={"Peerlist"}
          >
            <SiPeerlist/>
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center pl-1 tooltip"
            to='https://x.com/NavinChaud24674'
            aria-label={"X/Twitter"}
          >
            <FaXTwitter />
          </Link>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
