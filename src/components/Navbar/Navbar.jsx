import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09080A] backdrop-blur-md">
      
      <div className="max-w-3xl mx-auto px-3 lg:px-0 md:p-0">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link
              to="/"
              className="text-xl hover:text-white transition-all duration-300"
            >
              navin.
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
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

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-3 text-lg">
            <NavItem to="/about" text="about" />
            <NavItem to="/work" text="work" />
            <NavItem to="/contact" text="contact" />
            <NavItem to="/Resume.pdf" text="resume" isExternal={true} />
          </ul>
        </div>
      </div>

      {/* Mobile menu - Right side toggle */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#09080A] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-3 text-lg p-4 bg-[#09080A] items-center shadow-sm shadow-[#d9d9dd] rounded-lg">
          <div className="fixed left-2 top-[58px] text-xl">
          <Link to="/"
          className="h-4"
          >
        
          <FaHome />
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
  const commonClasses = "cursor-pointer hover:text-white   transition-all duration-300";
  
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
          ? "text-blue-300 "
          : commonClasses
      }
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
}

export default Navbar;