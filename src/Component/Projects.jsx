import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold">About Me</h1>
        </div>
        <div className="max-w-4xl mx-auto space-y-10 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Hi! I'm Rajan Chovatiya 👋
            </h2>
            <p className="text-base md:text-lg">
              A motivated and enthusiastic frontend developer just starting my
              journey in web development. I’ve built a solid foundation in{" "}
              <span className="font-semibold text-blue-600">HTML</span>,{" "}
              <span className="font-semibold text-blue-600">CSS</span>,{" "}
              <span className="font-semibold text-yellow-500">JavaScript</span>,
              and <span className="font-semibold text-cyan-400">React</span>{" "}
              through personal projects and online learning.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">My Journey So Far</h2>
            <p className="text-base md:text-lg">
              My interest in technology and solving problems led me to explore
              frontend development. I enjoy building responsive, user-friendly
              interfaces and learning something new with every project I work
              on.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              What I’m Looking For
            </h2>
            <p className="text-base md:text-lg">
              I'm looking for opportunities to apply my skills, contribute to
              real-world projects, and grow in a collaborative environment. I’m
              eager to learn from experienced developers and become a valuable
              part of a team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Let’s Connect</h2>
            <p className="text-base md:text-lg">
              I’d love to collaborate, share ideas, or even just talk tech! Feel
              free to reach out — I’m always open to new opportunities and
              conversations.
            </p>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Projects;
