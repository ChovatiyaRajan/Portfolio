import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <h1 className="text-center oswald-Bold lg:text-8xl text-5xl uppercase mt-30">
          About me
        </h1>
      </div>

      <div className="mx-4 md:mt-25 md:ml-20">
        <h2 className="text-2xl font-semibold my-10 oswald-Bold lg:text-6xl">
          Hi! I'm Rajan Chovatiya 👋
        </h2>
        <p className="text-base lg:text-2xl lg:w-270">
          A motivated and enthusiastic frontend developer just starting my
          journey in web development. I’ve built a solid foundation in{" "}
          <span className="font-semibold text-blue-600">HTML</span>,{" "}
          <span className="font-semibold text-blue-600">CSS</span>,{" "}
          <span className="font-semibold text-yellow-500">JavaScript</span>, and{" "}
          <span className="font-semibold text-cyan-400">React</span> through
          personal projects and online learning.
        </p>
      </div>
      <div>
        <h1 className="text-center oswald-Bold lg:text-7xl text-4xl uppercase mt-30">
          My Journey So Far
        </h1>
      </div>
      <div className="lg:flex justify-center">
        <div className="mt-20 lg:text-left lg:w-270 text-center lg:pl-15">
          <p className="text-2xl font-medium px-3">
            My interest in technology and problem-solving led me to web
            development. I enjoy learning new tools, experimenting with code,
            and seeing my designs come to life in the browser. Every project, no
            matter how small, is a step forward in my learning path.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center oswald-Bold lg:text-7xl text-4xl uppercase mt-30">
          What I’m Looking For
        </h1>
      </div>
      <div className="lg:flex justify-end mb-10">
        <div className="mt-20 lg:text-left lg:w-200 px-3 text-center lg:pl-15">
          <p className="text-2xl font-medium">
            I’m currently looking for opportunities where I can apply what I’ve
            learned, contribute to real-world projects, and grow alongside
            experienced developers. I’m eager to keep learning, improve my
            skills, and become a valuable part of a development team.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center oswald-Bold lg:text-7xl text-4xl uppercase mt-30">
          Let’s Connect
        </h1>
      </div>
      <div className="lg:flex justify-start mb-10">
        <div className="mt-20 lg:text-left lg: text-center lg:px-15">
          <p className="text-2xl font-medium px-3">
            I’d love to collaborate on projects, get feedback, or just chat
            about tech and coding. Feel free to reach out — I’m always open to
            new connections and opportunities!
          </p>
        </div>
      </div>

      <div className="flex justify-strt mt-35 mb-10 ">
        <h1 className="oswald-Bold lg:text-8xl uppercase text-6xl">
          lets work ..
        </h1>
      </div>
    </div>
  );
};

export default About;
