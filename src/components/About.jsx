import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <motion.p
              className="text-4xl font-bold inline border-b-4 border-white"
              animate={{
                color: ["#00FFFF", "#CC00FF", "#0033FF","#00FF33"],
                transition: { duration: 1, repeat: Infinity },
              }}
            >
              About
            </motion.p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <motion.p
              className=""
              animate={{
                color: ["#BEE3F8", "#93C5FD", "#BEE3F8"],
                transition: { duration: 1, repeat: Infinity },
              }}
            >
              Hi, I'm Zahid, nice to meet you, Please take a look around.
            </motion.p>
            {/* <p className="">
              Hi, I'm Zahid, nice to meet you, Please take a look around.
            </p> */}
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me.I specialize in creating in MERN
              Stack technologies.What would you do if you had a software expert
              available At your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
