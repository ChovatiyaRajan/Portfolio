import React from "react";

const timeline = [
  {
    title: "Bachelor of Computer Applications",
    institution: "Atmiya University, Rajkot",
    date: "2023 - 2026",
    description: "Currently pursuing BCA with focus on web development.",
  },
  {
    title: "Internship - Frontend Developer",
    institution: "Creative Insight",
    date: "jun 2024 - Mar 2025",
    description:
      "Built responsive UI components using React and Tailwind. and gained practical experience.",
  },
];

const Timeline = () => {
  return (
    <>
      <div className="container mx-auto lg:px-4 py-16 sm:px-2">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-16 oswald-Bold">
          My Journey
        </h1>

        <div className="border-l-[3px] border-gray-300 xl:pl-4 px-3 space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:translate-y-2"
            >
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-sm text-gray-500 font-medium mb-1">
                  {item.institution}
                </p>
                <p className="text-xs text-gray-400 italic mb-2">{item.date}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
