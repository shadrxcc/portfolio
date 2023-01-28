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
  const char = Array.from(text);

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
      y: 0,
      transition: {
        type: "string",
        damping: 12,
        stiffness: 100,
      },
    },

    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
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
      {char.map((letter, id) => {
        return (
          <motion.p
            key={id}
            variants={child}
            whileHover={() => scaleChar()}
            className="text-lg md:text-xl text-neutral-200 pb-3"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.p>
        );
      })}
    </motion.div>
  );
};

export default Animatedtitle;

Animatedtitle.propTypes = {
  text: PropTypes.string,
}