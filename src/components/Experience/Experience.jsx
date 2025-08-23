import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  const { isDark } = useTheme();

  const experiences = [
    {
      company: "WAY2REACH (Vesio Energy Pvt Ltd.)",
      position: "Full Stack Developer", 
      duration: "Feb 2025 – Present",
      location: "Gandhinagar, India",
      description: "Building dynamic web applications using the MERN stack with a focus on scalable and secure solutions.",
      responsibilities: [
        "Built dynamic web apps using React.js, Node.js, Express.js, and MongoDB",
        "Implemented JWT authentication and session management with role-based access control",
        "Integrated payment gateways (Cashfree & Stripe) for seamless transactions",
        "Optimized application performance and identified bottlenecks for better reliability",
        "Collaborated in agile teams and documented implementations for scalability"
      ]
    }
  ];

  return (
    <section className="mb-12">
      <div className="mb-8 text-center">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-[#1e293b]'
        }`}>
          Work Experience
        </h2>
        <p className={`text-lg transition-colors duration-300 ${
          isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
        }`}>
          My professional journey in web development and software engineering
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-blue-500/20 ${
              isDark 
                ? 'border-[#272627] bg-[#151212] hover:border-[#3b82f6] shadow-blue-500/10' 
                : 'border-[#e2e8f0] bg-white shadow-blue-500/20 hover:border-[#3b82f6]'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg hidden md:block ${
                isDark ? 'bg-[#3b82f6]/20' : 'bg-[#3b82f6]/10'
              }`}>
                <FaBriefcase className={`text-2xl ${
                  isDark ? 'text-[#3b82f6]' : 'text-[#3b82f6]'
                }`} />
              </div>
              
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-[#1e293b]'
                }`}>
                  {exp.position}
                </h3>
                
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-[#CFE5FF]' : 'text-[#3b82f6]'
                }`}>
                  {exp.company}
                </h4>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className={`flex items-center gap-2 transition-colors duration-300 ${
                    isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                  }`}>
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                  <div className={`flex items-center gap-2 transition-colors duration-300 ${
                    isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                  }`}>
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className={`mb-4 transition-colors duration-300 ${
                  isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                }`}>
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  <h5 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-[#1e293b]'
                  }`}>
                    Key Responsibilities:
                  </h5>
                  <ul className={`space-y-1 transition-colors duration-300 ${
                    isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                  }`}>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          isDark ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'
                        }`}></span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
