import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
      isDark ? 'bg-[#09080A]' : 'bg-white/80'
    }`}>
      
      <div className="max-w-3xl mx-auto px-3 lg:px-0 md:p-0">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link
              to="/"
              className={`text-xl transition-all duration-300 ${
                isDark 
                  ? 'text-white hover:text-[#CFE5FF]' 
                  : 'text-[#1e293b] hover:text-[#3b82f6]'
              }`}
            >
              navin.
            </Link>
          </div>

          {/* Desktop menu with theme toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ul className="flex gap-3 text-lg">
              <NavItem to="/about" text="about" />
              <NavItem to="/work" text="work" />
              <NavItem to="/contact" text="contact" />
              <NavItem to="/Resume.pdf" text="resume" isExternal={true} />
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={toggleMenu} className={`${
              isDark ? 'text-white' : 'text-[#1e293b]'
            }`}>
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Right side toggle */}
      <div className={`fixed top-0 right-0 h-full w-64 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden ${
        isDark ? 'bg-[#09080A]' : 'bg-white'
      }`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className={`${
            isDark ? 'text-white' : 'text-[#1e293b]'
          }`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className={`flex flex-col gap-3 text-lg p-4 items-center shadow-sm rounded-lg ${
          isDark 
            ? 'bg-[#09080A] shadow-[#d9d9dd]' 
            : 'bg-white shadow-gray-200'
        }`}>
          <div className="fixed left-2 top-[58px] text-xl">
            <Link to="/" className="h-4">
              <FaHome className={isDark ? 'text-white' : 'text-[#1e293b]'} />
            </Link>
          </div>
          <NavItem to="/about" text="about" onClick={toggleMenu} />
          <NavItem to="/work" text="work" onClick={toggleMenu} />
          <NavItem to="/contact" text="contact" onClick={toggleMenu} />
          <NavItem to="/Resume.pdf" text="resume" isExternal={true} onClick={toggleMenu} />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ to, text, isExternal, onClick }) {
  const { isDark } = useTheme();
  
  const commonClasses = `cursor-pointer transition-all duration-300 ${
    isDark 
      ? 'text-[#c2c1c1] hover:text-white' 
      : 'text-[#64748b] hover:text-[#3b82f6]'
  }`;
  
  if (isExternal) {
    return (
      <NavLink
        target="_blank"
        to={to}
        className={commonClasses}
        onClick={onClick}
      >
        {text}
      </NavLink>  
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? isDark ? "text-[#CFE5FF]" : "text-[#3b82f6]"
          : commonClasses
      }
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
}

export default Navbar;