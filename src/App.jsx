import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#0a192f]">
      <Navbar></Navbar>

      <div className="">
        <Home></Home>
      </div>
      <div className="my-40">
        <About></About>
      </div>

      <div className="my-40">
        <Skills></Skills>
      </div>
      <div className="my-40">
        <Projects></Projects>
      </div>
      <div className="my-40">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
