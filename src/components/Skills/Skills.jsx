import React from 'react';
import reactlogo from '/Images/skill-icons--react-dark.svg';
import jslogo from '/Images/js-official.svg';
import tailwindlogo from '/Images/tailwindcss-dark.svg';
import htmllogo from '/Images/skill-icons--html.svg';
import csslogo from '/Images/skill-icons--css.svg';
import morelogo from '/Images/octicon--plus-circle-16.svg';
import nextlogo from '/Images/logos--nextjs.svg';
import typelogo from '/Images/skill-icons--typescript.svg';
import { useTheme } from '../../context/ThemeContext';

function Skills() {
  const { isDark } = useTheme();
  
  const skillItemClasses = `border-[1px] flex gap-1 text-lg p-2 pr-5 rounded-lg cursor-default transition-all duration-300 ${
    isDark 
      ? 'border-[#272627] bg-[#151212] text-[#c2c1c1]' 
      : 'border-[#e2e8f0] bg-white text-[#64748b] shadow-sm'
  }`;

  return (
    <section className='pt-2'>
      <h2 className={`text-xl lg:text-2xl font-bold mb-5 transition-colors duration-300 ${
        isDark ? 'text-white' : 'text-[#1e293b]'
      }`}>Skills</h2>
      <div className={`flex flex-wrap gap-2 border-[1px] p-3 rounded-lg transition-all duration-300 ${
        isDark 
          ? 'text-white border-[#272627]' 
          : 'text-[#334155] border-[#e2e8f0] bg-white shadow-sm'
      }`}>
        <ul className='flex flex-wrap gap-2'>
          <li className={skillItemClasses}>
            <img src={nextlogo} alt="" className='h-full' />
            <p className='text-nowrap'>Next Js</p> 
          </li>
          <li className={skillItemClasses}>
            <img src={reactlogo} alt="" className='h-full' />
            React
          </li>
          <li className={skillItemClasses}>
            <img src={typelogo} alt="" className='h-full' />
            Typescript
          </li>
          <li className={skillItemClasses}>
            <img src={jslogo} alt="" className='h-full' />
            Javascript
          </li>
          <li className={skillItemClasses}>
            <img src={tailwindlogo} alt="" className='h-full' />
            Tailwind
          </li>
          <li className={skillItemClasses}>
            <img src={htmllogo} alt="" className='h-full' />
            HTML
          </li>
          <li className={skillItemClasses}>
            <img src={csslogo} alt="" className='h-full' />
            CSS
          </li>
          <li className={skillItemClasses}>
            <img src={morelogo} alt="" className='h-full bg-green-500 rounded-full' />
            More
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;