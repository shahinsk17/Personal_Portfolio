import { SiCplusplus } from "react-icons/si";
import React from "react";
import { RiReactjsLine } from "react-icons/ri"; // React icon
import { animate, motion } from "framer-motion";

import {
  DiMysql,
  DiNodejsSmall,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiMongodb,
  DiPostgresql,
} from "react-icons/di"; // Other technology icons

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",

      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl" style={{ color: "#61DBFB" }} />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiMysql className="text-7xl" style={{ color: "#4479A1" }} />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiHtml5 className="text-7xl" style={{ color: "#E34F26" }} />
        </motion.div>

        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiNodejsSmall className="text-7xl" style={{ color: "#68A063" }} />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiCss3 className="text-7xl" style={{ color: "#264DE4" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCplusplus className="text-7xl" style={{ color: "#00599C" }} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
