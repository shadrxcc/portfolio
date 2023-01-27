import React from "react";
import { projectarr } from "./projects/projectsarr";
import { FiLink2 } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sliceproject = projectarr.slice(0, 2);

const highlights = sliceproject.map((proj, index) => {
  return (
    <motion.div>
      <div
        key={index}
        className="card shadow-sm hover-scale-0 md:hover:scale-[1.1] transition ease-in-out duration-300 rounded-[5px] justify-center md:h-[9em] h-[13em] flex flex-col gap-y-[2em] md:gap-y-[1.1em] p-4 bg-[#1e1e1e]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white md:text-base text-xl font-medium">
              {proj.title}
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <a href={proj.live}>
              <FiLink2 className="text-white md:text-base text-xl md:text-lg opacity-75" />
            </a>
            <a href={proj.github}>
              <AiFillGithub className="text-white md:text-base text-xl md:text-lg opacity-75" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-white md:text-[11px] text-sm opacity-75">
            {proj.description}
          </p>
        </div>

        <div>
          <motion.p className="text-white  md:text-[11px] font-medium text-sm opacity-50">
            {proj.stack}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
});

const HighlightedProjects = () => {
  return (
    <div
      className="mx-[24px]"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-white md:text-lg text-2xl font-[800] pb-3">
          Projects
        </h2>
        <a href="/projects">
          <p className="text-[12px] resume opacity-75 text-white">
            See more projects
          </p>
        </a>
      </div>
      <div className="cards grid gap-8 md:grid-cols-2">{highlights}</div>
    </div>
  );
};

export default HighlightedProjects;