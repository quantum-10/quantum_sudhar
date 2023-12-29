import React from "react";
import profile_img from "./images/profile_1.png";
import { FaDiscord } from "react-icons/fa";
import {Link} from "react-scroll";

const Navbar = () => {

  return (
    <div className="bg-gradient-to-t from-[#281e36]  to-[#2f263c]">
      <div className="max-w-screen-lg flex justify-between items-center mx-auto p-5 ">
      <div className="flex justify-start items-center w-fit h-fit">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <Link to='about' smooth duration={500}>
          <img src={profile_img} alt="" className="rounded-full h-16 w-16 md:h-28 md:w-28 border-2 border-lime-400 hover:opacity-50  " />
          </Link>
        </div>
        <div className="ml-10 cursor-pointer">
        <h1 className="text-lg md:text-5xl font-headingfont text-[#fcba28]">sudharsan</h1>
        <h1 className="text-sm md:text-2xl font-subfont text-[#fcba28]">@quantum</h1>
        </div>
      </div>

      <div className="hidden md:block">  
      <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-white cursor-pointer font-subfont text-xl">
          <a href="https://discord.gg/bRXBj5y8jx" target="_blank" rel="noreferrer">
            Join on Discord
          </a>
            <span className="group-hover:rotate-[360deg] duration-700">
           <FaDiscord size={30} className="text-[#5865F2] ml-2"/>
            </span>
        </button> 
      </div>
      </div>
      </div>
  );
}

export default Navbar;
