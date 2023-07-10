import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "./style.css"
const Home = () => {
  return (
    <div name="home" className="w-full pt-40 md:pt-0 md:h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white text-xl">Hi,my name is</p>
        {/* <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Zahid Hasan
        </h1> */}
         <motion.p
        className="text-7xl"
        animate={{
          color: ['#BEE3F8', '#93C5FD', '#BEE3F8'],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        Zahid Hasan
      </motion.p>
        <h2 className="text-4xl sm-text-7xl font-bold text-[#8892b0]">
          I'm a MERN Stack Developer
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. CUrrently, i'm focused on
          building responsive full-stack web applications.
        </p>

        <div>
          <motion.div
            initial={{ x: -30 }}
            animate={{ x: 30 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
            style={{
              position: "relative",
            }}
          >
            <a href="https://drive.google.com/file/d/1EOOOAgQ4vYU0LZnw1FPWpKazYAwIq9PS/view?usp=sharing">
              <button className="text-white group border-2 px-6 py-3 my-2 flex gap-2 items-center hover:bg-white hover:text-black">
                Download Resume
                <span className="group-hover:rotate-90 duration-500">
                  <HiArrowNarrowRight></HiArrowNarrowRight>
                </span>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
