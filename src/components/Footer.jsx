import React from "react";
import profile from "./images/profile_1.png";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-[#281e36]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="home"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={profile}
              className="h-8 rounded-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Sudharsan
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="portfolio" className="hover:underline me-4 md:me-6">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="skills" className="hover:underline me-4 md:me-6">
                Skills
              </Link>
            </li>
            <li>
              <Link to="contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <Link className="hover:underline">quantum™</Link>. All Rights
            Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://linkedin.com"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaLinkedin />
              <span class="sr-only">Linkedin account</span>
            </a>

            <a
              href="https://github.com/quantum-10"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaGithub />
              <span class="sr-only">GitHub account</span>
            </a>

            <a
              href="https://discord.gg/bRXBj5y8jx"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaDiscord />
              <span class="sr-only">Discord community</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
