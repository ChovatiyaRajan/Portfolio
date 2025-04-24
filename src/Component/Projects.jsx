import React from "react";

const projects = [
  {
    title: "React app difrent projects",
    description:
      "A React App that consist many small taskes and Small Projects",
    tech: ["React", "CSS"],
    link: "https://crud-operation-qjnv.vercel.app/textarea",
  },
  {
    title: "To-Do List",
    description:
      "A simple yet powerful to-do list built with React Hooks and local storage support. Allows task creation, deletion, and completion toggles.",
    tech: ["React", "Hooks", "Local Storage"],
    link: "https://crud-operation-qjnv.vercel.app/",
  },
  {
    title: "Bootstrap webPage",
    description:
      "Created a clean and structured layout leveraging Bootstrap’s grid system and components for consistency and efficiency.",
    tech: ["Bootstrap"],
    link: "https://bootstrap-azure-rho.vercel.app/index.html",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold oswald-Bold">My Projects</h1>
        <p className="text-base md:text-lg mt-4 text-gray-600">
          Some of the projects I've built to sharpen my skills and explore new
          tools.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-black text-white text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-blue-600 font-semibold hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
