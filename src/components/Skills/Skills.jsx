import React from 'react';
import reactlogo from '/Images/skill-icons--react-dark.svg';
import jslogo from '/Images/js-official.svg';
import tailwindlogo from '/Images/tailwindcss-dark.svg';
import htmllogo from '/Images/skill-icons--html.svg';
import csslogo from '/Images/skill-icons--css.svg';
import morelogo from '/Images/octicon--plus-circle-16.svg';
import nextlogo from '/Images/logos--nextjs.svg';
import typelogo from '/Images/skill-icons--typescript.svg';
function Skills() {
  return (
    <section className=' pt-2'>
      <h2 className="text-xl lg:text-2xl font-bold  text-white mb-5">Skills</h2>
      <div className="flex flex-wrap gap-2 text-white border-[1px] p-3 border-[#272627] rounded-lg">
        <ul className='flex flex-wrap gap-2 text-white '>
        <li  className="border-[1px] flex gap-1  border-[#272627] text-lg p-2 pr-5 rounded-lg cursor-default bg-[#151212] text-[#c2c1c1] ">
          <img src={nextlogo} alt="" className='h-full' />
        <p className='text-nowrap'>Next Js</p> 
        </li>
        <li  className="border-[1px] flex gap-1  border-[#272627] text-lg p-2 pr-5 rounded-lg cursor-default bg-[#151212] text-[#c2c1c1] ">
          <img src={reactlogo} alt="" className='h-full' />
         React
        </li>
        <li  className="border-[1px] flex gap-1  border-[#272627] text-lg p-2 pr-5 rounded-lg cursor-default bg-[#151212] text-[#c2c1c1] ">
          <img src={typelogo} alt="" className='h-full' />
          Typescript
        </li>
        <li  className="border-[1px] flex gap-1  border-[#272627] text-lg p-2 pr-5 rounded-lg cursor-default bg-[#151212] text-[#c2c1c1] ">
          <img src={jslogo} alt="" className='h-full' />
          Javascript
        </li>
        <li  className="border-[1px] flex gap-1  border-[#272627] text-lg p-2 pr-5 rounded-lg cursor-default bg-[#151212] text-[#c2c1c1] ">
          <img src={tailwindlogo} alt="" className='h-full' />
          Tailwind
        </li>
        <li  className="border-[1px] flex gap-1  border-[#272627] text-lg p-2 pr-5 rounded-lg cursor-default bg-[#151212] text-[#c2c1c1] ">
          <img src={htmllogo} alt="" className='h-full' />
          HTML
        </li>
        <li  className="border-[1px] flex gap-1  border-[#272627] text-lg p-2 pr-5 rounded-lg cursor-default bg-[#151212] text-[#c2c1c1] ">
          <img src={csslogo} alt="" className='h-full' />
          CSS
        </li>
        <li  className="border-[1px] flex gap-1  border-[#272627] text-lg p-2 pr-5 rounded-lg cursor-default bg-[#151212] text-[#c2c1c1] ">
          <img src={morelogo} alt="" className='h-full bg-green-500 rounded-full' />
          More
        </li>
      
      </ul>
      </div>
    </section>
  );
}

export default Skills;