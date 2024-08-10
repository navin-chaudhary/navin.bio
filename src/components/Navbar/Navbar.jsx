import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    
    <div className="flex items-center justify-between   sticky top-0  h-16 z-50 bg-[#040816] ">
      <div>
        <Link
          to="/"
          className="text-xl hover:text-white transition-all duration-300"
        >
          navin.
        </Link>
      </div>

      <ul className="flex gap-3 text-lg ">
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
        }>
          contact
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
