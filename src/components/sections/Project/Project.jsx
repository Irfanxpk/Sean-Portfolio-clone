import { useNavigate } from "react-router-dom";
// import projects from constants file
import { projects } from "@/utils/constants/projects";

export default function Project() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-6 pl-6 overflow-hidden  mx-8 ">
      {projects.map((proj) => (
        <div className="mt-10 ml-2  transform hover:scale-105  duration-500 ease-in-out">
          <div
            key={proj.id}
            onClick={() => navigate(proj.link)}
            className="group cursor-pointer overflow-hidden border border-gray-500  bg-white "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-56 object-cover "
              />
            </div>
          </div>
          {/* Info */}
          <div className="mt-4 ">
            <h5 className="font-semibold text-[#999EB9] text-[20px]">
              {proj.title}
            </h5>
            <h4 className=" text-[#000927] text-[20px] font-normal">
              {proj.subtitle}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
