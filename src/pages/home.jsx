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
        className="mt-[5rem] flex flex-col gap-y-7"
        data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      >
        <div className="mx-[24px] md:w-[70%]">
          <div className="">
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
