import React, { useState } from "react";

import {
  FaJava,
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiMysql, SiBulma, SiTailwindcss, SiPhp } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandThreejs } from "react-icons/tb";

function Skills() {
  const [skills] = useState([
    { title: "Java", percent: 80 },
    { title: "DotNet", percent: 70 },
    { title: "PHP", percent: 70 },
    { title: "HTML", percent: 90 },
    { title: "CSS", percent: 90 },
    { title: "Java Script", percent: 90 },
    { title: "React JS", percent: 80 },
    { title: "Three JS", percent: 60 },
    { title: "Tailwind", percent: 90 },
    { title: "Bootstrap", percent: 90 },
    { title: "Bulma", percent: 90 },
    { title: "MySQL", percent: 80 },
    { title: "GitHub", percent: 60 },
  ]);

  const icon = [
    {
      id: 1,
      logo: <FaJava color="#ed272c" />,
      name: "java",
    },
    {
      id: 2,
      logo: <DiDotnet color="#1975ab" />,
      name: "DotNet",
    },
    {
      id: 3,
      logo: <SiPhp color="#777bb3" />,
      name: "PHP",
    },
    {
      id: 4,
      logo: <FaHtml5 color="#dd4b25" />,
      name: "HTML",
    },
    {
      id: 5,
      logo: <IoLogoCss3 color="#254bdf" />,
      name: "CSS",
    },
    {
      id: 6,
      logo: <IoLogoJavascript color="#fdd942" />,
      name: "Java Script",
    },
    {
      id: 7,
      logo: <FaReact color="#08d9ff" />,
      name: "React",
    },
    {
      id: 8,
      logo: <TbBrandThreejs color="#fff" />,
      name: "Three",
    },
    {
      id: 9,
      logo: <SiTailwindcss color="#3ebff8" />,
      name: "Tailwind",
    },
    {
      id: 10,
      logo: <FaBootstrap color="#8219fb" />,
      name: "Bootstrap",
    },
    {
      id: 11,
      logo: <SiBulma color="#08d2b4" />,
      name: "Bulma",
    },
    {
      id: 12,
      logo: <SiMysql color="#08668e" />,
      name: "MySql",
    },
    {
      id: 13,
      logo: <FaGithub color="gray" />,
      name: "GitHub",
    },
  ];

  const [currentSkill, setCurrentSkill] = useState(skills[0]);

  const circumference = ((2 * 22) / 7) * 120;

  return (
    <div
      name="skills"
      className="bg-[#2f263c] w-full text-white h-fit pt-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8" data-aos="zoom-out-down">
          <p className="text-4xl font-headingfont tracking-widest text-[#ff6b81] inline border-b-4 border-white">
            Skills</p>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center gap-10 text-7xl mt-10">
          {icon.map(({ id, logo, name }) => (
            <div className="flex justify-center items-center flex-col hover:scale-110 duration-300 "
            data-aos="flip-left">
              <h1 key={id} className="text-white ">
                {logo}
              </h1>
              <span className="text-2xl">{name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 border-2 border-[#281e36] shadow-md rounded-lg bg-[#281e36] ">
          <div className="grid grid-cols-2 gap-6 p-8">
            {skills.map((skill, index) => (
              <button
                key={index}
                onClick={() => setCurrentSkill(skill)}
                className={`px-4 py-2 text-xs lg:text-xl text-gray-100 transition bg-blue-600 rounded-md h-10 w-28 lg:h-14 lg:w-44 hover:bg-blue-700 ${
                  currentSkill.title === skill.title &&
                  "font-bold ring-2 ring-gray-100"
                }`}
              >
                {skill.title}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <svg className="transform -rotate-90 w-72 h-72">
              <circle
                cx="145"
                cy="145"
                r="120"
                stroke="currentColor"
                strokeWidth="30"
                fill="transparent"
                className="text-gray-700"
              />
              <circle
                cx="145"
                cy="145"
                r="120"
                stroke="currentColor"
                strokeWidth="30"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={
                  circumference - (currentSkill.percent / 100) * circumference
                }
                className="text-blue-600"
              />
            </svg>
            <span className="absolute text-5xl text-white">{`${currentSkill.percent}%`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;


