import React from "react";
import inprogress from "./images/inprogress.png";
import first_project from "./images/first.png"

function Portfolio() {

  const port_folio = [
    { id: 1, src: first_project,
    content: (
      "Completed"
    ),link:"https://quantum-10.github.io/mycalsi/"},
    { id: 2, src: inprogress,
      content: (
        "In Progress 0%"
      ) },
    { id: 3, src: inprogress,
      content: (
        "In Progress 0%"
      ) },
      
  ];

  return (
    <div
      name="portfolio"
      className="bg-[#2f263c] w-full text-[#fcba28] font-bold text-xl h-fit pt-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8" data-aos="zoom-out-down">
          <p className="text-4xl font-headingfont tracking-widest text-[#ff6b81] inline border-b-4 border-white">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-16 ">
        {port_folio.map(({ id, src, content,link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-md duration-200 hover:scale-105 bg-[#281e36]">
              <a href={link} target="_blank" rel="noreferrer">
              <img
                src={src}
                alt=""
                className="rounded-t-lg"
                />
              </a>
              <h1 className="p-5 text-justify  rounded-b-lg">{content}</h1>
            </div>
        ))}
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
