import React from 'react'
import { BiError } from "react-icons/bi";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
function Not_found() {
  const navigate = useNavigate();
  const gotohomepage=()=>{
    navigate('/')
  }
  return (
    <div className="  bg-[#09080A] text-[#9e9ea4] min-h-screen p-3 pt-0 overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <Navbar/>
        <div className='min-h-[calc(100vh_-_100px)] flex justify-center flex-col items-center'>
        <h1 className="text-5xl bg-white  text-black rounded-lg cursor-not-allowed"><BiError/></h1>
      <h1 className='text-2xl mt-3 text-red-400 font-bold'>Error 404</h1>
      <p className='text-base mt-2 text-white '>I really tried, but couldn't find the page!</p>
      <button onClick={gotohomepage} className=' animate-pulse  text-black rounded-md font-bold px-2 mt-2 bg-green-300 uppercase'>Go To Home Page </button>
      </div>
      <Footer/>
    </div>
    </div>
  )
}

export default Not_found
