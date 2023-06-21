import React from "react";
import project1 from "../assets/Images/projects/1.png";
import project2 from "../assets/Images/projects/2.png";
import project3 from "../assets/Images/projects/3.png";
import project4 from "../assets/Images/projects/4.png";
const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen mt-80 md:mt-0 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-white">
            Project's
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${project1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-10 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Stack Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/zahidhasan1993/rhythm-retreat-clint">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
                <a href="https://rhythm-retreate.web.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${project2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-10 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Stack Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/zahidhasan1993/whizzyWheels">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
                <a href="https://whizzywheels.web.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${project3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-10 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Stack Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/zahidhasan1993/desiCuisine">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
                <a href="https://desicuisin-8119b.web.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${project4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-10 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Stack Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/zahidhasan1993/AutoMedics-clint">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
                <a href="https://automedics-48c9f.web.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
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
