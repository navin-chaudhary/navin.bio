import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

function CallToAction() {
  const { isDark } = useTheme();

  return (
    <section>
      <div className={`p-3 sm:p-8 rounded-2xl border transition-all duration-300 ${
        isDark 
          ? 'border-[#272627] bg-gradient-to-br from-[#151212] to-[#242323]' 
          : 'border-[#e2e8f0] bg-gradient-to-br from-white to-gray-50 shadow-xl'
      }`}>
        <div className="text-center">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-[#1e293b]'
          }`}>
            Let's Work Together!
          </h2>
          <p className={`text-lg mb-8 transition-colors duration-300 ${
            isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
          }`}>
            Ready to bring your ideas to life? I'm always excited to take on new projects and collaborate on innovative solutions.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row">
            <Link 
              to="/contact" 
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isDark 
                  ? 'bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-lg hover:shadow-xl' 
                  : 'bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-lg hover:shadow-xl'
              }`}
            >
              <FaEnvelope size={16} />
              Get In Touch
              <FaArrowRight size={14} />
            </Link>
            
            <Link 
              to="/work" 
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isDark 
                  ? 'bg-[#242323] text-[#c2c1c1] hover:bg-[#2d2c2c] border border-[#272627]' 
                  : 'bg-gray-100 text-[#64748b] hover:bg-gray-200 border border-[#e2e8f0]'
              }`}
            >
              View All Projects
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
