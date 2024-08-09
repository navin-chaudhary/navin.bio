import React from 'react';
import Header from './components/Header/Header';
import About from './components/HomeAbout/HomeAbout';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './index.css'
import Navbar from './components/Navbar/Navbar';
// import { Outlet } from'react-router-dom';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    document.title='navin .home'
  },[])
  return (
    <div className="bg-[#040816] text-[#9e9ea4] min-h-screen p-4 pt-0">
      <div className="max-w-3xl mx-auto">
        <Navbar/>
        <Header />
        <About />
        <Projects/>
        <Skills />
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;