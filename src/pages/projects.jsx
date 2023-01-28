import React from "react";
import Project from "../components/projects/project";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
    <motion.div initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 , ease: "easeInOut"}}>
      <Project />
    </motion.div></>
  );
};

export default Projects;
