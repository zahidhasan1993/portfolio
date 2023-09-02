import React from "react";
import project1 from "../assets/Images/projects/1.png";
import project2 from "../assets/Images/projects/2.png";
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
              color: ["#BEE3F8", "#93C5FD", "#BEE3F8"],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            Projects
          </motion.p>

          <p className="py-12">// These are the projects I've worked with</p>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-10">
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
            <img className="w-52 ml-12" src={project2} alt="Card" />
            <div className="p-4">
              <h1 className="text-xs pb-3">
                &#128178; Full MERN Stack Project &#128640;
              </h1>
              <h1 className="font-bold my-2">
                &#129369; DesiCuisine &#129367;
              </h1>

              <p className="mb-2">
                This Website is based on a food website theme. Here user can
                authenticate and login they can see their favorite chef's
                recipes.
              </p>

              <div className="flex justify-between mt-8">
                <div className="flex justify-center items-center gap-2">
                  <button className="text-White">
                    <a href="https://github.com/zahidhasan1993/desiCuisine">
                      Github
                    </a>
                  </button>
                  <FaArrowRight />
                </div>
                <div className="flex justify-center items-center gap-2 text-blue-500">
                  <button className="">
                    <a href="https://desicuisin-8119b.web.app/">Live site</a>
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
                &#128667; WhizzyWheels &#128663;
              </h1>

              <p className="mb-2">
                This app is a toy car selling website. User after registration
                can add their toys on the app and sell them. They can update or
                delete a toy and many more...
              </p>

              <div className="flex justify-between mt-8">
                <div className="flex justify-center items-center gap-2">
                  <button className="text-White">
                    <a href="https://github.com/zahidhasan1993/whizzyWheels">
                      Github
                    </a>
                  </button>
                  <FaArrowRight />
                </div>
                <div className="flex justify-center items-center gap-2 text-blue-500">
                  <button className="">
                    <a href="https://whizzywheels.web.app/">Live site</a>
                  </button>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-none text-white shadow-lg rounded-lg overflow-hidden w-full md:hover:scale-125 transition-transform">
            <img className="w-52 ml-12" src={project4} alt="Card" />
            <div className="p-4">
              <h1 className="text-xs pb-3">
                &#128178; Full MERN Stack Project &#128640;
              </h1>
              <h1 className="font-bold my-2">&#128667; AutoMedics &#128668;</h1>

              <p className="mb-2">
                On this app a user can choose what he want to repair in his
                cars. This app is based on car repair website. User can book
                their time and many more....
              </p>

              <div className="flex justify-between mt-8">
                <div className="flex justify-center items-center gap-2">
                  <button className="text-White">
                    <a href="https://github.com/zahidhasan1993/AutoMedics-clint">
                      Github{" "}
                    </a>
                  </button>
                  <FaArrowRight />
                </div>
                <div className="flex justify-center items-center gap-2 text-blue-500">
                  <button className="">
                    <a href="https://automedics-48c9f.web.app/">Live site</a>
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
