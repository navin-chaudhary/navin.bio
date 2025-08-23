import Cn from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export const HoverEffect = ({
  items,
  className,
  getTechIcon
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const { isDark } = useTheme();

  return (
    <div
      className={Cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 ", className)}>
      {items.map((item, idx) => (
        <div
          key={item?.url}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={`absolute inset-0 h-full w-full block rounded-3xl ${
                  isDark ? 'bg-slate-800/[0.8]' : 'bg-gray-200/[0.8]'
                }`}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
         
          <Card item={item} getTechIcon={getTechIcon} className={`border-[1px] ${
            isDark ? 'border-[#272627]' : 'border-[#e2e8f0]'
          }`}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardTechnologies technologies={item.technologies} getTechIcon={getTechIcon} />
            <CardCategory category={item.category} />
            <CardLinks item={item} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  item
}) => {
  const { isDark } = useTheme();
  
  return (
    <div
      className={Cn(
        `rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent group-hover:border-slate-700 relative z-20 transition-all duration-300 hover:shadow-blue-500/20 ${
          isDark ? 'bg-[#151212] shadow-blue-500/10' : 'bg-white shadow-blue-500/20'
        }`,
        className
      )}>
      <div className="relative z-50 h-full flex flex-col">
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  const { isDark } = useTheme();
  
  return (
    <h3 className={Cn(`font-bold tracking-wider text-xl mb-3 transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-[#1e293b]'
    }`, className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  const { isDark } = useTheme();
  
  return (
    <p
      className={Cn(`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
        isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
      }`, className)}>
      {children}
    </p>
  );
};

export const CardTechnologies = ({
  technologies,
  getTechIcon
}) => {
  const { isDark } = useTheme();
  
  return (
    <div className="mb-4">
      <p className={`text-xs font-semibold mb-2 transition-colors duration-300 ${
        isDark ? 'text-[#9e9ea4]' : 'text-[#94a3b8]'
      }`}>
        Technologies:
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies?.map((tech, index) => (
          <div
            key={index}
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
              isDark 
                ? 'bg-[#242323] text-[#c2c1c1] border border-[#272627]' 
                : 'bg-gray-100 text-[#64748b] border border-[#e2e8f0]'
            }`}
          >
            {getTechIcon && getTechIcon(tech)}
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CardCategory = ({
  category
}) => {
  const { isDark } = useTheme();
  
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'Full Stack':
        return isDark ? 'bg-blue-600/20 text-blue-400 border-blue-600/30' : 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Frontend':
        return isDark ? 'bg-green-600/20 text-green-400 border-green-600/30' : 'bg-green-50 text-green-700 border-green-200';
      case 'Backend':
        return isDark ? 'bg-purple-600/20 text-purple-400 border-purple-600/30' : 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return isDark ? 'bg-gray-600/20 text-gray-400 border-gray-600/30' : 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };
  
  return (
    <div className="mb-4">
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border transition-colors duration-300 ${getCategoryColor(category)}`}>
        {category}
      </span>
    </div>
  );
};

export const CardLinks = ({
  item
}) => {
  const { isDark } = useTheme();
  
  return (
    <div className="flex gap-3 mt-auto pt-4">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          isDark 
            ? 'bg-[#3b82f6] text-white hover:bg-[#2563eb]' 
            : 'bg-[#3b82f6] text-white hover:bg-[#2563eb]'
        }`}
      >
        <FaExternalLinkAlt size={14} />
        Live Demo
      </a>
      <a
        href={item.gitUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          isDark 
            ? 'bg-[#242323] text-[#c2c1c1] hover:bg-[#2d2c2c] border border-[#272627]' 
            : 'bg-gray-100 text-[#64748b] hover:bg-gray-200 border border-[#e2e8f0]'
        }`}
      >
        <FaGithub size={14} />
        Code
      </a>
    </div>
  );
};