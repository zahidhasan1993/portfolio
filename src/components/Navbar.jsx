import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import { FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

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
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>
      {/*mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/**Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 text-xl "
            >
              LinkedIn <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 text-xl "
            >
              Github <FaGithub size={30}></FaGithub>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 text-xl "
            >
              Email <HiOutlineMail size={30}></HiOutlineMail>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 text-xl "
            >
              Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
