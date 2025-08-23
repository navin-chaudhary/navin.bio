import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
        isDark
          ? 'bg-[#242323] text-[#CFE5FF] hover:bg-[#2d2c2c] border border-[#7a7878]'
          : 'bg-white text-[#3b82f6] hover:bg-gray-50 border border-[#cbd5e1] shadow-md'
      }`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <FaSun className="w-5 h-5" />
      ) : (
        <FaMoon className="w-5 h-5" />
      )}
    </button>
  );
}

export default ThemeToggle;
