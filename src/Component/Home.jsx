import React from "react";
import rajan from "../Images/portfoliyoo.jpg";
import Marquee from "react-fast-marquee";
import html from "../Images/html.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import bootstrap from "../Images/bootstarp.png";
import react from "../Images/react.png";
import { Link } from "react-router-dom"; // Optional, for navigation
import Timeline from "./Timeline";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        {/* Name */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-8xl font-extrabold uppercase oswald-Bold">
            Rajan Chovatiya
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 font-medium">
            Frontend Developer • React Enthusiast • Lifelong Learner
          </p>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="text-center px-4">
            <h2 className="text-2xl font-semibold mb-3">Who Am I?</h2>
            <p className="text-base md:text-lg">
              A fresher with a solid foundation in frontend technologies,
              passionate about building intuitive and interactive web apps. I
              love writing clean code and solving real-world problems through
              design.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={rajan}
              alt="Rajan"
              className="w-64 md:w-80 lg:w-96 rounded-2xl border-4 border-black rotate-10 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          <div className="text-center lg:text-left px-4">
            <h2 className="text-2xl font-semibold mb-3">What I Do</h2>
            <p className="text-base md:text-lg">
              I specialize in creating responsive web interfaces using React,
              Tailwind CSS, and modern JavaScript tools. Always focused on
              usability, performance, and accessibility.
            </p>
          </div>
        </div>

        <div className="text-center mt-20 bg-black text-white py-10 rounded-2xl">
          <div className="text-4xl md:text-5xl font-bold oswald-Bold">
            <p>Languages & Tools I Use:</p>
          </div>
          <Marquee speed="40">
            <div className="flex items-center gap-16 mt-8">
              <img src={html} alt="HTML" className="w-50" />
              <img src={css} alt="CSS" className="w-36" />
              <img src={js} alt="JS" className="w-36" />
              <img src={bootstrap} alt="Bootstrap" className="w-36" />
              <img src={react} alt="React" className="w-36" />
            </div>
          </Marquee>
        </div>

        {/* Highlights */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-6 oswald-Bold">
            Core Strengths
          </h3>
          <ul className="text-left space-y-4 text-gray-700 text-lg">
            <li>👉 Strong foundation in HTML, CSS, and JavaScript</li>
            <li>👉 Built multiple React projects with Hooks and Routing</li>
            <li>👉 Familiar with Git, GitHub, and deployment (Vercel)</li>
            <li>👉 Eager to learn new technologies and frameworks</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-xl font-semibold mb-4">
            Want to see what I’ve built?
          </p>
          <Link
            to="/projects"
            className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
          >
            View My Projects
          </Link>
        </div>
        <Timeline />
      </div>
    </>
  );
};

export default Home;
