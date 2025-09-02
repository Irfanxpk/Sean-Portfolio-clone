import React from "react";

const ProjectBanner = ({ image }) => {
  return (
    <div
      className="relative h-[650px] w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};

export default ProjectBanner;
