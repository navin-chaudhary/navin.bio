import React, { useState, useEffect } from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Chatbot from "../Chatbot/Chatbot";
import { useTheme } from "../../context/ThemeContext";

function About() {
  const { isDark } = useTheme();
  
  useEffect(() => {
    document.title = "navin .about";
  }, []);

  return (
    <>
      <div className={`min-h-screen pt-10 p-3 overflow-hidden font transition-colors duration-300 ${
        isDark ? 'bg-[#09080A] text-[#babac3]' : 'bg-[#f8fafc] text-[#64748b]'
      }`}>
        <div className="max-w-3xl mx-auto ">
          <div className="main">
          <Navbar />
          </div>
          <div className="min-h-[calc(100vh_-_160px)] ">
            <section className="mb-8 pt-8">
              <div className={`p-6 rounded-lg border transition-all duration-300 ${
                isDark ? 'border-[#272627] bg-[#151212]' : 'border-[#e2e8f0] bg-white shadow-sm'
              }`}>
                <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-[#CFE5FF]' : 'text-[#3b82f6]'
                }`}>
                  Full Stack Developer
                </h2>
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                }`}>
                  Full Stack Developer with strong expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and proficiency in JavaScript, TypeScript, and RESTful APIs. Skilled in developing scalable, secure, and responsive web applications with robust back-end systems and dynamic front-end interfaces. Experienced in Generative AI, building AI-driven solutions that enhance automation, personalization, and intelligent workflows. Adept at database management, API integration, and performance optimization, with a passion for delivering innovative, high-quality software solutions in agile, collaborative environments.
                </p>
              </div>
            </section>
            {/* Skills Section */}
            <div className="mb-8">
              <h1 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white border-b-2 border-white w-max' : 'text-[#1e293b] border-b-2 border-[#3b82f6] w-max'
              }`}>
                Skills
              </h1>
              <div className={`p-6 rounded-lg border transition-all duration-300 ${
                isDark ? 'border-[#272627] bg-[#151212]' : 'border-[#e2e8f0] bg-white shadow-sm'
              }`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-[#CFE5FF]' : 'text-[#3b82f6]'
                    }`}>
                      Frontend
                    </h3>
                    <p className={`transition-colors duration-300 ${
                      isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                    }`}>
                      React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-[#CFE5FF]' : 'text-[#3b82f6]'
                    }`}>
                      Backend & APIs
                    </h3>
                    <p className={`transition-colors duration-300 ${
                      isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                    }`}>
                      Node.js, Express.js, Python, RESTful API Design & Integration, Server-side
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-[#CFE5FF]' : 'text-[#3b82f6]'
                    }`}>
                      UI & Frameworks
                    </h3>
                    <p className={`transition-colors duration-300 ${
                      isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                    }`}>
                      Bootstrap, Material-UI, ShadCN, Responsive UI/UX Design, Component-driven Development
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-[#CFE5FF]' : 'text-[#3b82f6]'
                    }`}>
                      Database & Tools
                    </h3>
                    <p className={`transition-colors duration-300 ${
                      isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                    }`}>
                      MongoDB, SQL basics, VS Code, Git/GitHub, Postman
                    </p>
                  </div>
                </div>
              </div>
            </div>



            {/* Education Section */}
            <div className="mb-8">
              <h1 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white border-b-2 border-white w-max' : 'text-[#1e293b] border-b-2 border-[#3b82f6] w-max'
              }`}>
                Education
              </h1>
              <div className={`p-6 rounded-lg border transition-all duration-300 ${
                isDark ? 'border-[#272627] bg-[#151212]' : 'border-[#e2e8f0] bg-white shadow-sm'
              }`}>
                <h2 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-[#CFE5FF]' : 'text-[#3b82f6]'
                }`}>
                  LDRP Institute of Technology and Research
                </h2>
                <p className={`text-lg font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-[#1e293b]'
                }`}>
                  Bachelor of Engineering, Computer Engineering
                </p>
                <p className={`mb-4 transition-colors duration-300 ${
                  isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                }`}>
                  <span className="inline-block mr-2">📍</span>
                  Gandhinagar, India
                </p>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                }`}>
                  <span className="inline-block mr-2">⏳</span>
                  Jul 2023 – Apr 2024 (did not complete)
                </p>
                <div className="mt-4">
                  <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-[#1e293b]'
                  }`}>
                    Self-Learning
                  </h3>
                  <ul className={`space-y-1 transition-colors duration-300 ${
                    isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                  }`}>
                    <li>• Learned MERN stack fully via YouTube tutorials</li>
                    <li>• Built real-world projects covering frontend, backend, APIs</li>
                    <li>• Gained practical knowledge in Next.js, TypeScript, Bootstrap, Material-UI, responsive design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Chatbot />
    </>
  );
}

export default About;
