import React from "react";
import profile from "../images/profile.png";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-2 ">
        <div>
          <img
            src={profile}
            className="w-32 mx-auto rounded-full drop-shadow-sm"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 ">
            Shoaib Akhtar Ansari
          </p>
          <p className="text-xs sm:text-base font-semibold text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Frontend Developer
          </p>
          <div className="flex justify-center align-center mt-4">
            <a
              href="https://github.com/dashboard"
              className="text-xl m-1 p-1 sm:m-1 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
            >
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>

            <a
              href=""
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
            >
              <FaTwitter />
              <span class="sr-only">Twitter</span>
            </a>
            <a
              href="https://mailto:shoaib.ansari5398@gmail.com"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
            >
              <FaRegEnvelope />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
