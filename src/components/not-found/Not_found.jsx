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
    <div className="  bg-[#040816] text-[#9e9ea4] min-h-screen p-3 pt-0 overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <Navbar/>
        <div className='min-h-[calc(100vh_-_165px)] flex justify-center flex-col items-center'>
        <h1 className="text-5xl bg-white  text-black rounded-lg cursor-not-allowed"><BiError/></h1>
      <h1 className='text-2xl mt-3 text-white font-bold'>404 | Page Not Found</h1>
      <p className='text-sm mt-2'>This page has been moved or was never created.</p>
      <button onClick={gotohomepage} className=' animate-pulse  text-black rounded-md font-bold px-2 mt-2 bg-green-300'>Go To Home Page </button>
      </div>
      <Footer/>
    </div>
    </div>
  )
}

export default Not_found
