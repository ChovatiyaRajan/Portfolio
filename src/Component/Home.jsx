import React from "react";
import rajan from "../Images/portfoliyoo.jpg";
import Marquee from "react-fast-marquee";
import html from "../Images/html.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import bootstrap from "../Images/bootstarp.png"
import react from "../Images/react.png";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-8xl font-extrabold oswald-Bold swald-Bold uppercase">Rajan Chovatiya</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="text-center lg:text-center px-4">
            <h2 className="text-2xl font-semibold mb-3">Who Am I?</h2>
            <p className="text-base md:text-lg">
              I'm a creative problem solver with a passion for clean code and
              engaging UIs.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={rajan}
              alt="Portfolio"
              className="w-64 md:w-80 lg:w-96 rounded-2xl border-4 border-black rotate-10 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="text-center lg:text-left px-4">
            <h2 className="text-2xl font-semibold mb-3">What I Do</h2>
            <p className="text-base md:text-lg">
              I specialize in frontend development with React , creating
              responsive, user-friendly web applications that are both
              functional and beautiful.
            </p>
          </div>
        </div>
        <div className="text-center mt-20 bg-black text-white py-10 rounded-2xl">
          <div className="text-4xl md:text-5xl sm:text-4xl font-bold">
            <p>Languages and frameworks I specialize in:</p>
          </div>
          <Marquee speed="40">
            <div className="grid mt-8 grid-cols-5 gap-25 items-center">
              <div>
                <img src={html} alt="HTML" className="w-50" />
              </div>
              <div>
                <img src={css} alt="CSS" className="w-38" />
              </div>
              <div>
                <img src={js} alt="JAVASCRIPT" className="w-38" />
              </div>
              <div>
                <img src={bootstrap} alt="BOOTSTRAP" className="w-35"/>
              </div>
              <div>
                <img src={react} alt="REACT" className="w-38"/>
              </div>
            </div>
          </Marquee>
        </div>


      </div>
    </>
  );
};

export default Home;
