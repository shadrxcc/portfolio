import React from "react";
import { projectarr } from "./projectsarr";
import { FiLink2 } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Project = () => {
  const projectmap = projectarr.map((project, id) => {
    return (
      <div className="card rounded-[5px] flex flex-col gap-y-[2em] p-4 bg-[#1e1e1e]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white  text-xl font-medium">{project.title}</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Link to={project.live}>
              <FiLink2 className="text-white opacity-75" />
            </Link>
            <Link to={project.github}>
              <AiFillGithub className="text-white opacity-75" />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-white text-[1.1rem] opacity-50">
            {project.description}
          </p>
        </div>
        <div>
          <p className="text-white text-sm opacity-75">{project.stack}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="mx-[36px]">
      <div>
        <p className="text-white text-lg pb-2 font-semibold">Projects</p>
      </div>
      <div className="cards grid gap-3 md:grid-cols-3">{projectmap}</div>
    </div>
  );
};

export default Project;
