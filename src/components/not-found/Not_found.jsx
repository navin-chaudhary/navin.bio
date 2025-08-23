import React from 'react';
import { BiError } from "react-icons/bi";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

function Not_found() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  
  const goToHomePage = () => {
    navigate('/');
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={`min-h-screen p-3 pt-0 overflow-x-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#09080A] text-[#9e9ea4]' : 'bg-[#f8fafc] text-[#64748b]'
    }`}>
      <div className="max-w-3xl mx-auto">
        <Navbar/>
        <div className='min-h-[calc(100vh_-_100px)] flex justify-center flex-col items-center'>
          {/* Error Icon */}
          <div className={`relative mb-8 ${
            isDark ? 'text-red-400' : 'text-red-500'
          }`}>
            <div className="text-8xl animate-bounce">
              <BiError/>
            </div>
            <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full animate-ping ${
              isDark ? 'bg-red-400' : 'bg-red-500'
            }`}></div>
          </div>

          {/* Error Message */}
          <div className="text-center mb-8">
            <h1 className={`text-6xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-[#1e293b]'
            }`}>
              404
            </h1>
            <h2 className={`text-2xl font-semibold mb-3 transition-colors duration-300 ${
              isDark ? 'text-red-400' : 'text-red-500'
            }`}>
              Page Not Found
            </h2>
            <p className={`text-lg transition-colors duration-300 max-w-md ${
              isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
            }`}>
              Oops! The page you're looking for seems to have wandered off into the digital wilderness.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={goToHomePage} 
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-lg hover:shadow-xl' 
                  : 'bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-lg hover:shadow-xl'
              }`}
            >
              <FaHome size={16} />
              Go to Home
            </button>
            
            <button 
              onClick={goBack} 
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-[#242323] text-[#c2c1c1] hover:bg-[#2d2c2c] border border-[#272627]' 
                  : 'bg-gray-100 text-[#64748b] hover:bg-gray-200 border border-[#e2e8f0]'
              }`}
            >
              <FaArrowLeft size={16} />
              Go Back
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex space-x-4">
            <div className={`w-3 h-3 rounded-full animate-pulse ${
              isDark ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'
            }`}></div>
            <div className={`w-3 h-3 rounded-full animate-pulse ${
              isDark ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'
            }`} style={{ animationDelay: '0.2s' }}></div>
            <div className={`w-3 h-3 rounded-full animate-pulse ${
              isDark ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'
            }`} style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Not_found;
