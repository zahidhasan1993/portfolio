import React from "react";
import project1 from "../assets/Images/projects/1.png";
import project3 from "../assets/Images/projects/3.png";
import project4 from "../assets/Images/projects/4.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-screen mt-[40rem] mb-40 md:mt-0 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-white">
          {/* <p className="text-4xl font-bold inline border-b-4 border-white py-4">
            Projects
          </p> */}
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-white py-4"
            animate={{
              color: ["#00FFFF", "#CC00FF", "#0033FF","#00FF33"],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            Projects
          </motion.p>

          <p className="py-12">// These are the projects I've worked with</p>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-10">
          <div className="bg-none text-white shadow-lg rounded-lg overflow-hidden w-full md:hover:scale-125 transition-transform">
            <img className="w-52 ml-12" src={project4} alt="Card" />
            <div className="p-4">
              <h1 className="text-xs pb-3">
                &#128178; Full MERN Stack Project &#128640;
              </h1>
              <h1 className="font-bold my-2">&#129368; Dineease &#127858;</h1>

              <p className="mb-2">
                This App is a restaurant management app. This app is full build.
                user can order and also payment for their food, they can book
                their tables etc. Admin also can put new food in the list.
                Approve bookings can make user admin and many more....
              </p>

              <div className="flex justify-between mt-8">
                <div className="flex justify-center items-center gap-2">
                  <button className="text-White">
                    <a href="https://github.com/zahidhasan1993/dineease-clint">
                      Github{" "}
                    </a>
                  </button>
                  <FaArrowRight />
                </div>
                <div className="flex justify-center items-center gap-2 text-blue-500">
                  <button className="">
                    <a href="https://dineease-15e58.web.app/">Live site</a>
                  </button>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-none text-white shadow-lg rounded-lg overflow-hidden w-full md:hover:scale-125 transition-transform">
            <img className="w-52 ml-12" src={project1} alt="Card" />
            <div className="p-4">
              <h1 className="text-xs pb-3">
                &#128178; Full MERN Stack Project &#128640;
              </h1>
              <h1 className="font-bold my-2">
                &#127927; Rhythm-Retreat &#127928;
              </h1>
              <p className="mb-2">
                This project is based on a summer camp school.This app is have 3
                different dashboard for 3 different users.Including a payment
                method and many more...
              </p>

              <div className="flex justify-between mt-8">
                <div className="flex justify-center items-center gap-2">
                  <button className="text-White">
                    <a href="https://github.com/zahidhasan1993/rhythm-retreat-clint">
                      Github
                    </a>
                  </button>
                  <FaArrowRight />
                </div>
                <div className="flex justify-center items-center gap-2 text-blue-500">
                  <button className="">
                    <a href="https://rhythm-retreate.web.app/">Live site</a>
                  </button>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-none text-white shadow-lg rounded-lg overflow-hidden w-full md:hover:scale-125 transition-transform">
            <img className="w-52 ml-12 mt-16" src={project3} alt="Card" />
            <div className="p-4 mt-10">
              <h1 className="text-xs pb-3">
                &#128178; Full MERN Stack Project &#128640;
              </h1>
              <h1 className="font-bold my-2">
                &#128667; ToyVerse &#128663;
              </h1>

              <p className="mb-2">
                This app is a toy selling website. User after registration
                can add their toys on the app and sell them. They can update or
                delete a toy and many more...
              </p>

              <div className="flex justify-between mt-8">
                <div className="flex justify-center items-center gap-2">
                  <button className="text-White">
                    <a href="https://github.com/zahidhasan1993/toyverse-clint">
                      Github
                    </a>
                  </button>
                  <FaArrowRight />
                </div>
                <div className="flex justify-center items-center gap-2 text-blue-500">
                  <button className="">
                    <a href="https://toyverse-f253a.web.app/">Live site</a>
                  </button>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
