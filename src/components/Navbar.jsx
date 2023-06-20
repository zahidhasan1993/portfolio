import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [nav,setNav] = useState(false);

    const handleNav = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo image" style={{ width: "140px" }} />
      </div>
      {/**Menu */}

      <ul className="hidden  md:flex md:text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/*hamburger*/}
      <div onClick={handleNav} className="md:hidden z-10">
        <FaBars></FaBars>
      </div>
      {/*mobile menu*/}
      <ul className={!nav ? "hidden" : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/**Social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
