import React from "react";
import { useTheme } from "../../context/ThemeContext";

function About() {
  const { isDark } = useTheme();
  
  return (
    <section className="mb-8">
      <h2 className={`mb-4 text-xl font-bold lg:text-2xl transition-colors duration-300 ${
        isDark ? 'text-white' : 'text-[#1e293b]'
      }`}>About me</h2>
      <p className={`border-[1px] p-3 rounded-lg transition-all duration-300 ${
        isDark 
          ? 'text-[#c2c1c1] border-[#272627]' 
          : 'text-[#64748b] border-[#e2e8f0] bg-white shadow-sm'
      }`}>
        Hey everyone👋! I'm Navin Chaudhary, a passionate Full Stack Developer currently working at WAY2REACH. I specialize in the MERN stack and love building scalable web applications. When I'm not coding, you'll find me exploring new technologies and contributing to open-source projects. I'm always excited to take on new challenges and collaborate on innovative solutions!
      </p>
    </section>
  );
}

export default About;
