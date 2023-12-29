import React from "react";
import universe from "./images/universe.jpg"
function Contact() {
  return (
    <div name="contact" className="w-full h-fit p-4 bg-[#2f263c] text-white pt-28 pb-20">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8" data-aos="zoom-out-down">
          <p className="text-4xl font-headingfont tracking-widest text-[#ff6b81] inline border-b-4 border-white">Contact</p>
        </div>

        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 mt-24 ">

          <div className="flex justify-center items-center  rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl lg:rounded-tl-2xl">
            <img src={universe} alt="" className="object-cover h-full rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl lg:rounded-tl-2xl " />
            <h1 className="absolute text-3xl md:text-5xl font-bold ">Contact Me</h1>
          </div>
        
        <div className="flex justify-center items-center bg-[#281e36] p-5 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl lg:rounded-br-2xl">
          <form
          className="flex flex-col w-full md:w1/2
          ">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-gray-100 border-2 rounded-md text-black font-bold focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-gray-100 border-2 rounded-md text-black font-bold focus:outline-none"
            />

            <textarea name="message" rows="10"
            placeholder="Enter your Message"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  resize-none"></textarea>

            <button className="text-white bg-black px-6 py-3 mt-8 w-fit flex items-center rounded-md hover:scale-110 duration-300">Lets talk</button>
          </form>
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default Contact;


