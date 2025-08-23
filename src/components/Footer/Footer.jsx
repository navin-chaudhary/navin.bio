import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import { useTheme } from "../../context/ThemeContext";
import './Footer.css';

function Footer() {
  const { isDark } = useTheme();
  
  const links = [
    { icon: <MdEmail />, url: "mailto:heynavin.im@gmail.com", label: "Email" },
    { icon: <IoLogoGithub />, url: "https://github.com/navin-chaudhary", label: "Github" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/navinchaudhary9", label: "LinkedIn" },
    { icon: <SiPeerlist />, url: "https://peerlist.io/navinchaudhary", label: "Peerlist" },
    { icon: <FaXTwitter />, url: "https://x.com/NavinDeveloper", label: "X/Twitter" },
  ];

  const commonClasses = `text-muted-foreground p-[2px] lg:p-1 md:p-1 sm:p-1 rounded-md border-t-[1px] border-b-[1px] hover:border-t-[0px] hover:border-l-[1px] transition-all duration-300 ${
    isDark
      ? 'hover:text-white bg-[#2d2c2c] border-[#686666] hover:bg-[#191919]'
      : 'hover:text-[#3b82f6] bg-white border-[#cbd5e1] hover:bg-gray-50 shadow-sm'
  }`;

  return (
    <div className={`mt-7 pt-4 pb-1 transition-colors duration-300 ${
      isDark ? 'bg-[#09080A] text-[#cfcfd5]' : 'bg-[#f8fafc] text-[#64748b]'
    }`}>
      <div className="max-w-3xl mx-auto w-full flex justify-between">
        <div>
          <Link
            to="/"
            className={`text-lg sm:text-xl transition-all duration-300 ${
              isDark ? 'hover:text-white' : 'hover:text-[#3b82f6]'
            }`}
          >
            Navin Chaudhary
          </Link>
        </div>

        <ul className="flex gap-1 md:gap-2 items-center links">
          {links.map((link, index) => (
            <li key={index} className={commonClasses}>
              <a
                className="flex items-center px-1 tooltip"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
