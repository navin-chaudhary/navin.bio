import Cn from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={Cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ", className)}>
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
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
         
          <Card link={item.url} className='border-[1px] border-[#272627]'>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  link
}) => {
  return (
    <div
      className={Cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-[#09080A] border border-transparent   dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">
          {React.Children.map(children, child => {
            if (React.isValidElement(child) && child.type === CardTitle) {
              return React.cloneElement(child, { link });
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  link
}) => {
  return (
    <Link 
      to={link}
      className={Cn("font-bold border-b-[2px] border-blue-400 hover:border-blue-600 tracking-wider flex items-center gap-1 transition-all duration-300  w-max text-lg text-white cursor-pointer", className)}
    >
      {children}
    </Link>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={Cn("text-[#c2c1c1] capitalize mt-3 hover:scale-1 text-sm ", className)}>
      {children}
    </p>
  );
};