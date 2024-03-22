import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      {/*Menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/*Social Media Icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://www.linkedin.com/in/amit-sapkota-a379962bb/"
            >
              Linkedin
              <FaLinkedin
                className="mr-[-10px] lg:mr-0 duration-300"
                size={30}
              />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://github.com/asapkotagit"
            >
              Github
              <FaGithub className="mr-[-10px] lg:mr-0 duration-300" size={30} />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fb2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="sapkotaamit1@gmail.com"
            >
              Email
              <HiOutlineMail
                className="mr-[-10px] lg:mr-0 duration-300"
                size={30}
              />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://www.google.com/docs/about/"
            >
              Resume
              <BsFillPersonLinesFill
                className="mr-[-10px] lg:mr-0 duration-300"
                size={30}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
