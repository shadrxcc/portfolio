import React from "react";
import { motion } from "framer-motion";
import Animatedintro from "../components/animatedintro";
import Animatedname from "../components/animatedname";
import Animatedtitle from "../components/animatedtitle";
import HighlightedProjects from "../components/highlighted";
import Animatedsummary from "../components/animatedsummary";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mt-[5rem] md:mt-[1rem] flex flex-col gap-y-10"
      >
        <div className="mx-[24px] md:flex md:gap-x-[8em] items-center">
          <div>
          <Animatedintro text={"Hello, i'm"} />
          <Animatedname text={"Shadrach Akaade"} />
          <Animatedtitle text={"Frontend Engineer"} /></div>
          <div>
          <Animatedsummary
            text={`I'm a software developer specialized in different technologies for
            building web applications. I'm a software developer specialized in
            different technologies for building web applications`}
          /></div>
        </div>
        <HighlightedProjects />
      </motion.div>
    </>
  );
};

export default Home;
