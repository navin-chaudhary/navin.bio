import React from 'react';



function Skills() {
  return (
    <section className=' pt-5'>
      <h2 className="text-xl lg:text-2xl font-bold  text-white mb-5">Skills</h2>
      <div className="flex flex-wrap gap-2 text-white">
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default">
        React
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default">
        Javascript
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default">
        Tailwind
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default">
          HTML
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default">
         CSS
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default">
        SASS
        </span>
        <span  className="border-2 border-[#666d8e] text-lg px-3 py-1 rounded-lg cursor-default">
         More
        </span>
        
      </div>
    </section>
  );
}

export default Skills;