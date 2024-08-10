import React from 'react';
import './Loader.css'
const Loader = () => {
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" inline-block w-8 h-8  rounded-full" >
      <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;