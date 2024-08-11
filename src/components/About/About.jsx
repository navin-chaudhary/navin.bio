import React, { useState, useEffect } from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function About() {
  useEffect(() => {
    document.title = "navin .about";
  }, []);

  return (
    <>
      <div className="bg-[#09080A] text-[#babac3] min-h-screen  pt-10 p-3 overflow-hidden font">
        <div className="max-w-3xl mx-auto ">
          <Navbar />
          <div className="min-h-[calc(100vh_-_160px)] ">
            <section className="mb-8  pt-8 ">
              <p className="text-[#c2c1c1] text-lg capitalize ">
                Hey everyone👋! I'm Navin Chaudhary, a passionate and driven
                software engineer currently in my second year of college
                pursuing a Bachelor's degree in Computer engineering. With a
                keen interest in technology and a dedication to learning and
                growth, I strive to make meaningful contributions in the field
                of software engineering.Beyond my academic and professional
                endeavors, I have a keen interest in Frontend Web Devlopment.
              </p>
              <p className=" mt-4 text-[#c2c1c1] capitalize">
                I'm mostly focused on frontend engineer, but I aspire to become
                a full-stack engineer. I'm excited about the prospect of
                handling end-to-end feature development, taking ownership of
                features, and shipping them in the best possible way.
              </p>
            </section>
            <div class="container mx-auto  pt-4 ">
              <h1 class="text-4xl font-bold mb-4 text-white border-b-2 border-white w-max">
                Education
              </h1>
              <ul class=" ">
                <li class="mb-3">
                  <h2 class="text-xl font-semibold mb-1">
                    Bachelor of Engineering in Computer engineering
                  </h2>
                  <p class="mb-1">
                    <span class="inline-block mr-2">🏫</span>
                    LDRP Institute of Technology and Research
                  </p>
                  <p class="mb-1">
                    <span class="inline-block mr-2">📍</span>
                    GANDHINAGAR
                  </p>
                  <p>
                    <span class="inline-block mr-2">⏳</span>
                    July 2023 - Current
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
