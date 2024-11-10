import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import './Footer.css';

function Navbar() {
  const links = [
    { icon: <MdEmail />, url: "mailto:hello@navin.bio", label: "Email" },
    { icon: <IoLogoGithub />, url: "https://github.com/navin-chaudhary", label: "Github" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/navinchaudhary9", label: "LinkedIn" },
    { icon: <SiPeerlist />, url: "https://peerlist.io/navinchaudhary", label: "Peerlist" },
    { icon: <FaXTwitter />, url: "https://x.com/NavinDeveloper", label: "X/Twitter" },
  ];

  const commonClasses =
    "text-muted-foreground hover:text-white bg-[#2d2c2c] p-[2px] lg:p-1 md:p-1 sm:p-1 rounded-md border-t-[1px] border-b-[1px] hover:border-t-[0px] hover:border-l-[1px] transition-all duration-300 border-[#686666] hover:bg-[#191919]";

  return (
    <div className="bg-[#09080A] text-[#cfcfd5] mt-7 pt-4 pb-1">
      <div className="w-full flex justify-between">
        <div>
          <Link
            to="/"
            className="text-lg sm:text-xl hover:text-white transition-all duration-300"
          >
            Navin Chaudhary
          </Link>
        </div>

        <ul className="flex gap-1 md:gap-2 items-center links">
          {links.map((link, index) => (
            <li key={index} className={commonClasses}>
              
              <Link
                className="flex items-center px-1 tooltip"
                to={link.url}
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
