import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
function About() {
useEffect(()=>{
    document.title = "navin .contact"
  
},[])
  return (
    <>
      <div className="bg-[#040816] text-[#9e9ea4] min-h-screen pt-0 p-3 overflow-hidden ">
        <div className="max-w-3xl mx-auto">
          <Navbar />
          <div className="flex justify-center">
            <div className="shadow-sm shadow-[#626ac0] p-8 rounded-lg  max-w-md w-full min-h-[calc(100vh_-_165px)] mt-2">
              <h2 className="text-2xl lg:text-3xl text-white font-semibold mb-4">
                Contact Us
              </h2>
              <p className="text-gray-400 mb-6">
                Have a question, want to collaborate, or just want to say hello?
                .Fill the form below and connect with me!
              </p>

              <form  className="space-y-4" action="https://submit-form.com/Uc5gI33Ok">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-2 block w-full p-2 text-black rounded-md outline-none  focus:outline-blue-600 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 block w-full text-black  p-2  rounded-md outline-none focus:outline-blue-600 sm:text-sm"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label
                    // htmlFor="message"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full p-2  rounded-md text-black outline-none focus:outline-blue-600 sm:text-sm"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className=" flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
