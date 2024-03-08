import React from "react";
import Javascript from "../assets/javascript.png";
import Html from "../assets/html.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import css from "../assets/css.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            Web Development Technologies that I'm familier with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16]">
            <img
              className="w-20 mx-auto hover:scale-110 duration-500"
              src={Html}
              alt="HTML logo"
            />
            <p className="py-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img
              className="w-20 mx-auto hover:scale-110 duration-500"
              src={Javascript}
              alt="Javascript Logo"
            />
            <p className="py-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img
              className="w-20 mx-auto hover:scale-110 duration-500"
              src={react}
              alt="React logo"
            />
            <p className="py-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img
              className="w-20 mx-auto hover:scale-110 duration-500"
              src={css}
              alt="CSS Logo"
            />
            <p className="py-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img
              className="w-20 mx-auto hover:scale-110 duration-500"
              src={node}
              alt="NODE JS logo"
            />
            <p className="py-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16]">
            <img
              className="w-20 mx-auto hover:scale-110 duration-500"
              src={tailwind}
              alt="Tailwind css logo"
            />
            <p className="py-4">TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
