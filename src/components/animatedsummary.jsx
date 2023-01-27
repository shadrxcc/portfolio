import React from "react";
import { motion, spring } from "framer-motion";

const Animatedsummary = ({ text }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.8 * 1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "string",
        damping: 12,
        stiffness: 100,
      },
    },

    hidden: {
      opacity: 0,
      x: 30,
      transition: {
        type: spring,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="overflow-hidden flex"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={child}
        className="md:text-[.80rem] animate-pulse text-[.95rem] font-normal leading-[1.75] text-white opacity-[50%]"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default Animatedsummary;
