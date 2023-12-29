import React from "react";
import Earth from "./images/earth-png-15.png";
import { Link } from "react-scroll";
import "./Home.css";

function Home() {
  return (
    <div name="home" className="bgg h-full w-full bg-[#2f263c] pt-20">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row lg:gap-52">
        <div className="flex flex-col justify-center h-fit mt-5x typewriter">
          <h1 className=" text-2xl sm:text-3xl font-bold   text-[#ff6b81]  ">
            I'm Sudharsan I'm a
          </h1>
          <h2 className=" text-3xl sm:text-5xl   text-[#fff] w-fit mb-2">
            Web Developer
          </h2>
          <p className="text-[#fff] py-4 max-w-md text-xl border-2 bg-[#281e36] border-[#ff6b81] border-dashed p-2 my-4 ">
            Hello, I'm sudharsan aka tech enthusiast. I started my career as an
            Electrical and Electronics Engineer. But Curiosity makes me
            upside-down as a Web Dev...
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-600 text-white font-bold cursor-pointer "
            >
              Portfolio
              <span
                className="material-icons-outlined group-hover:rotate-90 duration-300 ml-1"
                size={25}
              >
                keyboard_arrow_right
              </span>
            </Link>
          </div>
        </div>

        <div className="w-56 h-56 xl:w-1/2 xl:h-1/2 " data-aos="flip-up">
          <img
            src={Earth}
            alt="myprofile"
            className="rounded-2xl mx-auto my-10 animate-rotate-slowly  "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
