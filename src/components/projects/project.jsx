import React from "react";
import { projectarr } from "./projectsarr";
import { FiLink2 } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Project = () => {
  const projectmap = projectarr.map((project, id) => {
    return (
      <div className="card shadow-sm hover-scale-0 md:hover:scale-[1.1] transition ease-in-out duration-300 rounded-[5px] justify-center md:h-[9em] h-[13em] flex flex-col gap-y-[2em] md:gap-y-[1.1em] p-4 bg-[#1e1e1e]">
      
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white md:text-base text-xl font-medium">{project.title}</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <a href={project.live}>
              <FiLink2 className="text-white md:text-base text-xl md:text-lg opacity-75" />
            </a>
            <a href={project.github}>
              <AiFillGithub className="text-white md:text-base text-xl md:text-lg opacity-75" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-white md:text-[11px] text-sm opacity-75">
            {project.description}
          </p>
        </div>
      
        <div>
          <p className="text-white  md:text-[11px] font-medium text-sm opacity-50">{project.stack}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="mx-[24px]">
      <div>
        <h2 className="text-white md:text-lg text-2xl font-[800] pb-3">Projects</h2>
      </div>
      <div className="cards grid gap-8 md:grid-cols-3">{projectmap}</div>
    </div>
  );
};

export default Project;
