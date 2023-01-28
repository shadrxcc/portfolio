import React from "react";
import { projectarr } from "./projectsarr";
import { FiLink2 } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Project = () => {
  const projectmap = projectarr.map((project, id) => {
    return (
      <motion.div
        key={id}
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="card shadow-sm hover-scale-0 md:hover:scale-[1.1] transition ease-in-out duration-300 rounded-[5px] justify-center h-[13em] flex flex-col gap-y-[2em] md:gap-y-[1.1em] p-4 bg-[#1e1e1e]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-xl font-medium">
                {project.title}
              </p>
            </div>
            <div className="flex gap-x-2 items-center">
              <a href={project.live}>
                <FiLink2 className="text-white text-xl opacity-75" />
              </a>
              <a href={project.github}>
                <AiFillGithub className="text-white text-xl opacity-75" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-white text-sm opacity-75">
              {project.description}
            </p>
          </div>

          <div>
            <motion.p className="text-white  font-medium text-sm opacity-50">
              {project.stack}
            </motion.p>
          </div>
        </div>
      </motion.div>
    );
  });
  return (
    <div className="mx-[24px]">
      <div>
        <h2 className="text-white text-2xl font-[800] pb-3">
          Projects
        </h2>
      </div>
      <div className="cards grid gap-8 md:grid-cols-3">{projectmap}</div>
    </div>
  );
};

export default Project;
