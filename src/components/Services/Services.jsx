import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaCode, FaMobile, FaDatabase, FaCogs, FaPalette, FaRocket } from "react-icons/fa";

function Services() {
  const { isDark } = useTheme();

  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Web Development",
      description: "Building responsive, modern web applications using React, Node.js, and the latest technologies. From simple landing pages to complex web applications.",
      color: "text-blue-500"
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "Responsive Design",
      description: "Creating mobile-first, responsive designs that work seamlessly across all devices and screen sizes. Ensuring optimal user experience everywhere.",
      color: "text-green-500"
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Database Design",
      description: "Designing and implementing efficient database solutions using MongoDB and SQL. Optimizing data structures for performance and scalability.",
      color: "text-purple-500"
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: "API Development",
      description: "Building robust RESTful APIs with Node.js and Express. Creating secure, scalable backend services for web and mobile applications.",
      color: "text-orange-500"
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces using modern design principles. Focusing on user experience and accessibility.",
      color: "text-pink-500"
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed and efficiency. Implementing best practices for faster loading times and better user experience.",
      color: "text-red-500"
    }
  ];

  return (
    <section className="mb-12">
      <div className="mb-8 text-center">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-[#1e293b]'
        }`}>
          Services Offer
        </h2>
        <p className={`text-lg transition-colors duration-300 ${
          isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
        }`}>
          Comprehensive web development solutions tailored to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-blue-500/20 ${
              isDark 
                ? 'border-[#272627] bg-[#151212] hover:border-[#3b82f6] shadow-blue-500/10' 
                : 'border-[#e2e8f0] bg-white shadow-blue-500/20 hover:border-[#3b82f6]'
            }`}
          >
            <div className={`mb-4 ${service.color}`}>
              {service.icon}
            </div>
            <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-[#1e293b]'
            }`}>
              {service.title}
            </h3>
            <p className={`text-sm leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
            }`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
