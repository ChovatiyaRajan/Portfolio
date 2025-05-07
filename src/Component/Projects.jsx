import React from "react";

const projects = [
  {
    title: "React App - Mini Projects",
    description:
      "A collection of small, focused React applications demonstrating component-based architecture and practical use of hooks.",
    tech: ["React", "CSS"],
    link: "https://crud-operation-qjnv.vercel.app/textarea",
  },
  {
    title: "To-Do List",
    description:
      "A user-friendly to-do list built with React Hooks and local storage. Includes task creation, deletion, and completion status.",
    tech: ["React", "Hooks", "Local Storage", "Tailwind"],
    link: "https://crud-operation-qjnv.vercel.app/",
  },
  {
    title: "Bootstrap Web Page",
    description:
      "Crafted a responsive static website using Bootstrap's grid system and prebuilt components, focusing on UI consistency and clarity.",
    tech: ["Bootstrap"],
    link: "https://bootstrap-azure-rho.vercel.app/index.html",
  },
  {
    title: "Calculater",
    description:
      "A clean and responsive calculator built with React to perform basic arithmetic operations. Focused on functional components and state management using React Hooks",
    tech: ["React", "tailwind"],
    link: "https://calculator-sigma-gules.vercel.app/",
  },
  {
    title: "Clock App",
    description:
      "A simple and responsive digital clock built with JavaScript and CSS. It displays the current time in real-time using JavaScript's Date object, with a clean UI styled using CSS.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://clock-js-omega.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold lg:text-8xl oswald-Bold">
          My Projects
        </h1>
        <p className="text-base md:text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          A showcase of some personal projects that reflect my growth, learning
          journey, and passion for frontend development.
        </p>
      </div>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full border border-gray-200"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                🔗 View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
