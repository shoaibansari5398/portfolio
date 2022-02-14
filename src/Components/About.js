import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

function About() {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <p className="text-2xl font-bold text-center md:text-4xl text-black">
        Hey!
      </p>
      <p className="text-base text-center sm:text-xl text-black text-gray-600 mt-4 ">
        I'm Frontend Developer. I am passionate about making websites using
        Tailwind and React.
      </p>

      <ScrollIntoView selector="#tech">
        <div class="mx-auto p-20">
          <FaChevronDown class="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
