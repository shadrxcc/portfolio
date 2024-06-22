import { motion, spring } from "framer-motion";
import { PropTypes } from "prop-types";

export const scaleChar = () => {
  return {
    transform: [
      "scale3d(1, 1, 1)",
      "scale3d(1.4, .55, 1)",
      "scale3d(.75, 1.25, 1)",
      "scale3d(1.25, .85, 1)",
      "scale3d(.9, 1.05, 1)",
      "scale3d(1 , 1, 1)",
    ],
  };
};

const Animatedtitle = ({ text }) => {
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
      y: 0,
      transition: {
        type: "string",
        damping: 12,
        stiffness: 100,
        duration: 0.75,
      },
    },

    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: spring,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="overflow-hidden justify-center flex"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={child}
        whileHover={() => scaleChar()}
        className="text-lg md:text-2xl pr-1 text-neutral-200 pb-3"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default Animatedtitle;

Animatedtitle.propTypes = {
  text: PropTypes.string,
};
