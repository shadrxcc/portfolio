import React from "react";
import { projectarr } from "./projectsarr";
import { FiLink2 } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Project = () => {
  const projectmap = projectarr.map((project) => {
    return (
      <div key={project.id}>
        <div className="card shadow-sm hover-scale-0 md:hover:scale-[1.03] transition ease-in-out h-[22rem] duration-300 rounded-[5px] justify-center flex flex-col gap-y-[1em] md:gap-y-[1.1em] p-4 bg-[#1e1e1e]">
          <div
            className="w-full rounded-[4px] h-[12rem] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${
                project.snippet !== null && project.snippet
              })`,
              backgroundColor: "lightgray",
            }}
          ></div>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-1 items-end">
              <Link to={project.live}><p className="text-white text-lg font-medium">{project.title}</p></Link>
            </div>
            <div className="flex gap-x-2.5 items-center">
              <a target="_blank" rel="noreferrer" href={project.live}>
                <FiLink2 className="text-white text-xl opacity-75" />
              </a>
              <a target="_blank" rel="noreferrer" href={project.github}>
                <AiFillGithub className="text-white text-xl opacity-75" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-white text-sm opacity-75">
              {project.description}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white flex-1 text-xs opacity-50">{project.stack}</p>
            {project.status && <p className="text-[8px] bg-zinc-800 text-white p-1.5 rounded">{project.status}</p>}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="mx-[15px] lg:px-6 flex flex-col gap-y-4 mt-10">
      <div>
        <h2 className="text-white text-lg md:text-2xl font-semibold pb-3">
          Projects
        </h2>
      </div>
      <div className="cards grid gap-6 md:grid-cols-3">{projectmap}</div>
    </div>
  );
};

export default Project;
