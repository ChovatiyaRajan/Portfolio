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
        <p className="text-gray-700 text-base sm:text-2xl leading-relaxed">
          I’m a passionate <span className="font-semibold">web developer</span>{" "}
          with a solid foundation in{" "}
          <span className="text-blue-600 font-medium">
            HTML, CSS, JavaScript, and React
          </span>
          . Recently, I’ve expanded into
          <span className="text-green-600 font-medium">
            {" "}
            Node.js, Express, MongoDB
          </span>
          , along with{" "}
          <span className="text-purple-600 font-medium">
            Git/GitHub and REST APIs
          </span>
          , building full-stack applications through projects and continuous
          learning. I enjoy turning ideas into{" "}
          <span className="font-semibold">
            clean, responsive, and user-friendly experiences
          </span>
          .
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
            My curiosity for technology and problem-solving sparked my journey
            into web development. Over time, I’ve built projects that allowed me
            to explore both frontend and backend development, experiment with
            modern tools, and bring my designs to life in the browser. Every
            project, whether big or small, has been a step forward in sharpening
            my skills and deepening my learning.
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
            I’m eager to join a team where I can apply my skills in real-world
            projects, contribute meaningfully, and continue learning from
            experienced developers. My goal is to grow into a full-stack
            developer while building impactful applications that solve real
            problems.
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
            I’d love to collaborate on projects, share ideas, or just chat about
            tech and coding. If you’re looking for someone who’s motivated,
            quick to learn, and excited about building great web experiences —
            let’s work together! 🚀
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
