import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function About() {
  return (
    <div name="about" className="w-full h-fit bg-[#2f263c] text-white pt-28">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full">
        <div className="pb-8" data-aos="zoom-out-down">
          <p className="text-4xl font-headingfont tracking-widest text-[#ff6b81] inline border-b-4 border-white">
            About
          </p>
        </div>

        <p className="text-xl mt-16 text-justify  p-10 bg-[#281e36] rounded-lg shadow-[#ff6b81] shadow-inner " data-aos="flip-left">
          <span>
           🙏Hello! I'm Sudharsan, but you can call me your friendly neighborhood
            tech enthusiast!
          </span>
          <br />
          <br />
          <span>
            Imagine starting your journey amidst circuits and resistors as an
            Electrical ⚡ and Electronics Engineer. Sparks flew, but not just from
            circuits! My insatiable curiosity had other plans, leading me down a
            different path.
          </span>
          <br />
          <br />
          <span>
            🌐 Web development became my new playground. Why? Because the digital
            world is where magic meets logic! From the intricacies of electrons ⚛️
            to the dance of pixels on a screen, I've traded voltages for
            variables, resistors for responsive designs, and Ohm's Law for
            JavaScript arrays.
          </span>
          <br />
          <br />
          <span className="mt-2">
            So here I am, blending the best of both 🌍worlds: an engineer's
            precision with a developer's creativity. Ready to code the future,
            one line at a time!💡🖥️🌐
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
