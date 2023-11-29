import React from "react";
import project1 from "../assets/Images/projects/1.png";
import project3 from "../assets/Images/projects/3.png";
import project4 from "../assets/Images/projects/4.png";
import project5 from "../assets/Images/projects/hotel.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "Dineease",
      description:
        "This App is a restaurant management app. This app is full build.user can order and also payment for their food, they can book their tables etc. Admin also can put new food in the list. Approve bookings can make user admin and many more....",
      image: project4,
      githubURL: "https://github.com/zahidhasan1993/dineease-clint",
      liveSiteURL: "https://dineease-15e58.web.app/",
      emojis: [129368, 127858],
    },
    {
      name: "Rhythm Retreat",
      description:
        "This project is based on a summer camp school.This app is have 3 different dashboard for 3 different users.Including a payment method and many more...",
      image: project1,
      githubURL: "https://github.com/zahidhasan1993/rhythm-retreat-clint",
      liveSiteURL: "https://rhythm-retreate.web.app/",
      emojis: [127927, 127928],
    },
    {
      name: "ToyVerse",
      description:
        "This app is a toy selling website. User after registration can add their toys on the app and sell them. They can update or delete a toy and many more...",
      image: project3,
      githubURL: "https://github.com/zahidhasan1993/toyverse-clint",
      liveSiteURL: "https://toyverse-f253a.web.app/",
      emojis: [128667, 128663],
    },
    {
      name: "LuxeSeven",
      description:
        "This App is a Hotel booking app. This app is fully build. user can book and cancel rooms Admin can add room and check which room is booked and many more....",
      image: project5,
      githubURL: "https://github.com/zahidhasan1993/luxeseven",
      liveSiteURL: "https://luxeseven-f5a34.web.app/",
      emojis: [128178, 128509],
    },
  ];
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
              color: ["#00FFFF", "#CC00FF", "#0033FF", "#00FF33"],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            Projects
          </motion.p>

          <p className="py-12">// These are the projects I've worked with</p>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-none text-white shadow-lg rounded-lg overflow-hidden w-full md:hover:scale-105 transition-transform"
            >
              <img
                className="w-44 h-44 ml-12 my-5 rounded-full"
                src={project.image}
                alt="Card"
              />

              <div className="p-4">
                <h1 className="text-xs pb-3">
                  &#128178; Full MERN Stack Project &#128640;
                </h1>
                <h1 className="font-bold my-2">
                  {" "}
                  &#128509; {project.name} &#128508;
                </h1>

                <p className="mb-2">{project.description.slice(0, 140)}...</p>

                <div className="flex justify-between mt-8">
                  <div className="flex justify-center items-center gap-2">
                    <button className="text-White">
                      <a href={project.githubURL}>Github </a>
                    </button>
                    <FaArrowRight />
                  </div>
                  <div className="flex justify-center items-center gap-2 text-blue-500">
                    <button className="">
                      <a href={project.liveSiteURL}>Live site</a>
                    </button>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
