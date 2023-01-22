import React from "react";
import Project from "../components/projects/project";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Project />
    </motion.div></>
  );
};

export default Projects;
