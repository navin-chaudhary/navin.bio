import React from 'react';
import logo from '/Images/Logo.png'
function Header() {
  return (
    <header className="flex items-center mb-8 md:mt-4 lg:mt-4 gap-4 lg:gap-5">
      <div className='bg-[#696868] lg:w-28 lg:h-28 md:w-24 md:h-24 w-24 h-20 rounded-full overflow-hidden'>
      <img src={logo} alt="Profile" className=" w-24 h-20 lg:w-28  lg:h-28 md:w-24 md:h-24 rounded-full mr-4 object-cover " />
      </div>
      <div>
        <h1 className=" text-xl lg:text-3xl text-[#FAFAFA] font-bold">Hello I'm</h1>
        <p className="text-[#CFE5FF] font-bold text-2xl lg:text-4xl">Navin Chaudhary</p>
        <p className="lg:text-lg text-sm text-[#ebebf1]">Frontend focused Full Stack Developer</p>
      </div>
    </header>
  );
}

export default Header;