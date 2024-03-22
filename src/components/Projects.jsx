import React from "react";
import Calender_App_Pic from "../assets/projects/Calender_App_Pic.jpeg";
import realState from "../assets/projects/realestate.jpg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">
            Check out some of my favourite perosnal projects
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${Calender_App_Pic})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/asapkotagit/Not_A_Google_Calender_Clone">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://statuesque-empanada-c9b1d4.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realState})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
