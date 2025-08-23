import React from 'react';
import Header from './components/Header/Header';
import About from './components/HomeAbout/HomeAbout';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import CallToAction from './components/CallToAction/CallToAction';
import './index.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import { Analytics } from "@vercel/analytics/react"
import { useTheme } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();
  
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
    <div className={`main min-h-screen p-3 pt-16 overflow-x-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-[#09080A]' 
        : 'bg-[#f8fafc]'
    }`}>
       <Analytics />
    {loading ? (
      <Loader />
    ) : (
      <div className="max-w-3xl mx-auto ">
        <Navbar />
      
        <Header />
        <Experience />
        <Services />
        <Projects />
        <CallToAction />
        
        <Footer />
      </div>
    )}
    <Chatbot />
  </div>
  );
}

export default App;