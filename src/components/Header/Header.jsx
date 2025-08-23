import React from "react";
import logo from "/Images/Logo.png";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Header() {
  const { isDark } = useTheme();

  return (
    <header className="relative mb-12 md:mt-6 lg:mt-8">
      {/* Debug theme indicator */}
      <div className={`absolute top-0 right-0 p-2 text-xs rounded ${
        isDark ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
      }`}>
        Theme: {isDark ? 'Dark' : 'Light'}
      </div>
      
      {/* Background decoration */}
      <div className={`absolute inset-0 rounded-3xl opacity-5 ${
        isDark ? 'bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6]' : 'bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6]'
      }`}></div>
      
      <div className={`relative p-8 rounded-3xl border transition-all duration-300 hover:shadow-blue-500/10 ${
        isDark 
          ? 'border-[#272627] bg-[#151212] shadow-blue-500/5' 
          : 'border-[#e2e8f0] bg-white shadow-lg'
      }`}>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-8">
          {/* Profile Image */}
          <div className="relative group">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
            <div className={`relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 transition-all duration-300 ${
              isDark 
                ? 'border-[#3b82f6]/30 shadow-blue-500/20 group-hover:border-[#3b82f6]/50 group-hover:shadow-blue-500/30' 
                : 'border-[#3b82f6]/20 shadow-blue-500/10 group-hover:border-[#3b82f6]/40 group-hover:shadow-blue-500/20'
            }`}>
              <img
                src={logo}
                alt="Navin Chaudhary"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <h1 className={`text-2xl lg:text-4xl font-bold mb-2 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-[#1e293b]'
              }`}>
                Hey, I'm{" "}
                <span className={`bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent`}>
                  Navin Chaudhary
                </span>
              </h1>
              <p className={`text-lg lg:text-xl font-medium transition-colors duration-300 ${
                isDark ? 'text-[#CFE5FF]' : 'text-[#3b82f6]'
              }`}>
                Full Stack Developer @ <Link to="https://market.way2reach.in" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-green-200' : 'text-black'} hover:underline`}>Way2Reach</Link>
              </p>
              <p className={`text-sm lg:text-base mt-2 max-w-2xl transition-colors duration-300 ${
                isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
              }`}>
                Passionate about creating innovative web solutions with modern technologies. 
                Specializing in MERN stack and building scalable applications.
              </p>
            </div>

            {/* Contact & Social Links */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start lg:gap-6">
              {/* Contact Info */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <a 
                  href="mailto:heynavin.im@gmail.com" 
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-[#242323] text-[#c2c1c1] hover:bg-[#2d2c2c] hover:text-[#3b82f6] border border-[#272627]' 
                      : 'bg-gray-100 text-[#64748b] hover:bg-gray-200 hover:text-[#3b82f6] border border-[#e2e8f0]'
                  }`}
                >
                  <FaEnvelope className="text-[#3b82f6]" />
                  <span className="text-sm font-medium">heynavin.im@gmail.com</span>
                </a>
                <a 
                  href="tel:+919157154504" 
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-[#242323] text-[#c2c1c1] hover:bg-[#2d2c2c] hover:text-[#3b82f6] border border-[#272627]' 
                      : 'bg-gray-100 text-[#64748b] hover:bg-gray-200 hover:text-[#3b82f6] border border-[#e2e8f0]'
                  }`}
                >
                  <FaPhone className="text-[#3b82f6]" />
                  <span className="text-sm font-medium">+91 9157154504</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
