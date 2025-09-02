import React from "react";

const projects = [
  { name: "2018 macbook air", link: "#" },
  { name: "kentucky kynect", link: "#" },
  { name: "growsquares", link: "#" },
  { name: "city of fall river", link: "#" },
];

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 right-0 w-[calc(100%-56px)] bg-blue-600 text-white flex items-center justify-between z-50 h-15 font-roboto border-t border-black overflow-hidden">
      <div className="bg-white h-15 flex items-center px-5 border-t border-gray-400 w-1/8">
        <span className="text-black">Projects in Market</span>
      </div>
      <div className="overflow-hidden w-7/8">
        <div className="animate-marquee flex space-x-10">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="underline hover:text-gray-200 transition-colors duration-300"
            >
              {project.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
