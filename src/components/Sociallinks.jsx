import React from "react";
import { FaDiscord,FaLinkedin,FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Sociallinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/quantum-10"
    },
    {
      id: 3,
      child: (
        <>
          Discord <FaDiscord size={30} />
        </>
      ),
      href: "https://discord.gg/bRXBj5y8jx", 
      style: "rounded-br-md"
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/SampleResume.pdf",
      download: true,
    }
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style,download}) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 text-white bg-transparent ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sociallinks;