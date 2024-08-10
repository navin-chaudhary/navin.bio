import React from "react";

function About() {
  return (
    <section className="mb-8 border-t-[1px] border-[#939396] pt-5">
      <h2 className="text-xl lg:text-2xl text-white  font-bold mb-4">About me</h2>
      <p className="text-[#c2c1c1]  ">
        Hey, I'm Navin Chaudhary, a <span className="text-white ">frontend engineer</span> who builds things using
        technologies I've learned so far, such as HTML, CSS,tailwindcss , JavaScript , React js. I'm
        always looking forward to learning new things as I grow, and I love
        keeping myself updated with the rapidly changing tech world.
      </p>
      <p className=" mt-4 text-[#c2c1c1] capitalize">
        I'm mostly focused on frontend engineer, but I aspire to
        become a full-stack engineer. I'm excited about the prospect of handling
        end-to-end feature development, taking ownership of features, and
        shipping them in the best possible way.
      </p>
    </section>
  );
}

export default About;
