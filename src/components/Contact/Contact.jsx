import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Chatbot from "../Chatbot/Chatbot";
import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { SiPeerlist } from "react-icons/si";
import './Contact.css'

function Contact() {
  const { isDark } = useTheme();

  
  useEffect(()=>{
    document.title = "navin .contact"
  },[])





  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "heynavin.im@gmail.com",
      link: "mailto:heynavin.im@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+91 9157154504",
      link: "tel:+919157154504"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Gandhinagar, India",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <IoLogoGithub />, url: "https://github.com/navin-chaudhary", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/navinchaudhary9", label: "LinkedIn" },
    { icon: <SiPeerlist />, url: "https://peerlist.io/navinchaudhary", label: "Peerlist" },
    { icon: <FaXTwitter />, url: "https://x.com/NavinDeveloper", label: "X/Twitter" },
  ];
  
  return (
    <>
      <div className={`min-h-screen pt-0 p-3 overflow-hidden font main transition-colors duration-300 ${
        isDark ? 'bg-[#09080A] text-[#c0c0c6]' : 'bg-[#f8fafc] text-[#64748b]'
      }`}>
        <div className="max-w-4xl mx-auto">
          <Navbar />
          
          {/* Header Section */}
          <div className="pt-16 pb-8 text-center">
            <h1 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-[#1e293b]'
            }`}>
              Get In Touch
            </h1>
            <p className={`text-lg lg:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
            }`}>
              Have a question, want to collaborate, or just want to say hello? 
              I'd love to hear from you. Let's make something great together!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 pb-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-blue-500/20 ${
                isDark 
                  ? 'border-[#272627] bg-[#151212] shadow-blue-500/10' 
                  : 'border-[#e2e8f0] bg-white shadow-blue-500/20'
              }`}>
                <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-[#1e293b]'
                }`}>
                  Let's Connect
                </h2>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        isDark ? 'bg-[#3b82f6]/20' : 'bg-[#3b82f6]/10'
                      }`}>
                        <div className={`${
                          isDark ? 'text-[#3b82f6]' : 'text-[#3b82f6]'
                        }`}>
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-[#1e293b]'
                        }`}>
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className={`text-sm transition-colors duration-300 hover:text-[#3b82f6] ${
                              isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                            }`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className={`text-sm transition-colors duration-300 ${
                            isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                          }`}>
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-[#1e293b]'
                  }`}>
                    Follow Me
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                          isDark 
                            ? 'bg-[#242323] text-[#c2c1c1] hover:bg-[#2d2c2c] hover:text-[#3b82f6] border border-[#272627]' 
                            : 'bg-gray-100 text-[#64748b] hover:bg-gray-200 hover:text-[#3b82f6] border border-[#e2e8f0]'
                        }`}
                        aria-label={social.label}
                      >
                        <div className="text-xl">{social.icon}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-blue-500/20 ${
                isDark 
                  ? 'border-[#272627] bg-[#151212] shadow-blue-500/10' 
                  : 'border-[#e2e8f0] bg-white shadow-blue-500/20'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-[#1e293b]'
                }`}>
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className={`flex justify-between items-center ${
                    isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                  }`}>
                    <span>Response Time:</span>
                    <span className="font-semibold text-[#3b82f6]">Within 24 hours</span>
                  </div>
                  <div className={`flex justify-between items-center ${
                    isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                  }`}>
                    <span>Availability:</span>
                    <span className="font-semibold text-[#3b82f6]">Open to opportunities</span>
                  </div>
                  <div className={`flex justify-between items-center ${
                    isDark ? 'text-[#c2c1c1]' : 'text-[#64748b]'
                  }`}>
                    <span>Preferred Contact:</span>
                    <span className="font-semibold text-[#3b82f6]">Email</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-blue-500/20 ${
              isDark 
                ? 'border-[#272627] bg-[#151212] shadow-blue-500/10' 
                : 'border-[#e2e8f0] bg-white shadow-blue-500/20'
            }`}>
              <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-[#1e293b]'
              }`}>
                Send Message
              </h2>
              
                             <form className="space-y-6" action="https://submit-form.com/jDpS4oYub">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-[#64748b]'
                    }`}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    
                    className={`block w-full p-3 rounded-lg border transition-all duration-300 outline-none focus:ring-2 focus:ring-[#3b82f6] ${
                      isDark 
                        ? 'bg-[#242323] text-white border-[#272627] focus:border-[#3b82f6]' 
                        : 'bg-gray-50 text-[#1e293b] border-[#e2e8f0] focus:border-[#3b82f6]'
                    }`}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-[#64748b]'
                    }`}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    
                    className={`block w-full p-3 rounded-lg border transition-all duration-300 outline-none focus:ring-2 focus:ring-[#3b82f6] ${
                      isDark 
                        ? 'bg-[#242323] text-white border-[#272627] focus:border-[#3b82f6]' 
                        : 'bg-gray-50 text-[#1e293b] border-[#e2e8f0] focus:border-[#3b82f6]'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-[#64748b]'
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    
                    rows="5"
                    className={`block w-full p-3 rounded-lg border transition-all duration-300 outline-none focus:ring-2 focus:ring-[#3b82f6] resize-none ${
                      isDark 
                        ? 'bg-[#242323] text-white border-[#272627] focus:border-[#3b82f6]' 
                        : 'bg-gray-50 text-[#1e293b] border-[#e2e8f0] focus:border-[#3b82f6]'
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                    required
                  ></textarea>
                </div>

                                 <button
                   type="submit"
                   className="flex justify-center px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-[#3b82f6] border border-transparent rounded-lg shadow-sm outline-none focus:outline-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] hover:bg-[#2563eb] hover:scale-105"
                 >
                   Submit
                 </button>
              </form>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
      <Chatbot />
    </>
  );
}

export default Contact;
