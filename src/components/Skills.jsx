import React from "react";
import html from "../assets/Images/skills/html.png"
import css from "../assets/Images/skills/css.png"
import firebase from "../assets/Images/skills/firebase.png"
import github from "../assets/Images/skills/github.png"
import js from "../assets/Images/skills/javascript.png"
import mongo from "../assets/Images/skills/mongo.png"
import node from "../assets/Images/skills/node.png"
import react from "../assets/Images/skills/react.png"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-white py-4">Experience</p>
          <p className="py-12">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={html} alt="" />
            <p>HTML</p>
          </div>
          <div className="shadow shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={css} alt="" />
            <p>CSS</p>
          </div>
          <div className="shadow shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={js} alt="" />
            <p>javaScript</p>
          </div>
          <div className="shadow shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={react} alt="" />
            <p>ReactJS</p>
          </div>
          <div className="shadow shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={firebase} alt="" />
            <p>Firebase</p>
          </div>
          <div className="shadow shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={github} alt="" />
            <p>Github</p>
          </div>
          <div className="shadow shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={node} alt="" />
            <p>Node.js</p>
          </div>
          <div className="shadow shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={mongo} alt="" />
            <p>mongoDB</p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Skills;
