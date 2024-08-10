import React from 'react';
import Header from './components/Header/Header';
import About from './components/HomeAbout/HomeAbout';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './index.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    <Loader/>
    setTimeout(() => {
      setLoading(false)
    }, 500);  
  },[])
  useEffect(()=>{
    document.title='navin .home'
  },[])
  return (
    <div className="main bg-[#040816] text-[#9e9ea4] min-h-screen p-3 pt-0 overflow-x-hidden">
    {loading ? (
      <Loader />
    ) : (
      <div className="max-w-3xl mx-auto">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    )}
  </div>
  );
}

export default App;