import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-3xl mx-auto px-3 lg:px-0 backdrop-blur-3xl">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link
              to="/"
              className="text-xl hover:text-white transition-all duration-300"
            >
              navin.
            </Link>
          </div>

          <ul className="flex gap-3 text-lg">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "cursor-pointer hover:text-white transition-all duration-300"
              }
            >
              about
            </NavLink>
            <NavLink
              target="_blank"
              to="/Resume.pdf"
              className="cursor-pointer hover:text-white transition-all duration-300"
            >
              resume
            </NavLink>
            <NavLink 
              to='/contact'
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "cursor-pointer hover:text-white transition-all duration-300"
              }
            >
              contact
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;