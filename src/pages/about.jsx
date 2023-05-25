import React from "react";
import Resume from "../components/about/resume";
import Skillstack from "../components/about/skillstack";
import Summary from "../components/about/summary";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        className="mx-[24px] mt-10"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 , ease: "easeInOut"}}
      >
        <h2 className="text-white text-2xl font-[800] pb-3">
          About
        </h2>
        <Summary />
        <Skillstack />
        <Resume />
      </motion.div>
    </>
  );
};

export default About;
