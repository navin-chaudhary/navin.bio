import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaCode } from 'react-icons/fa';
import './Loader.css';

const Loader = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`flex flex-col justify-center items-center h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#09080A]' : 'bg-[#f8fafc]'
    }`}>
      <div className="relative">
        {/* Main loading animation */}
        <div className={`w-16 h-16 rounded-full border-4 border-t-transparent animate-spin ${
          isDark ? 'border-[#3b82f6]' : 'border-[#3b82f6]'
        }`}></div>
        
        {/* Center icon */}
        <div className={`absolute inset-0 flex items-center justify-center ${
          isDark ? 'text-[#3b82f6]' : 'text-[#3b82f6]'
        }`}>
          <FaCode className="text-xl animate-pulse" />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="mt-6 text-center">
        <h2 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-[#1e293b]'
        }`}>
          Loading Portfolio
        </h2>
        <p className={`text-sm transition-colors duration-300 ${
          isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
        }`}>
          Preparing amazing content for you...
        </p>
      </div>
      
      {/* Progress dots */}
      <div className="flex space-x-2 mt-4">
        <div className={`w-2 h-2 rounded-full animate-bounce ${
          isDark ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'
        }`} style={{ animationDelay: '0ms' }}></div>
        <div className={`w-2 h-2 rounded-full animate-bounce ${
          isDark ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'
        }`} style={{ animationDelay: '150ms' }}></div>
        <div className={`w-2 h-2 rounded-full animate-bounce ${
          isDark ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'
        }`} style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default Loader;