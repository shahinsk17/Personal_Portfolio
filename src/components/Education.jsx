import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((education, index) => {
          return (
            <div
              key={index}
              className="mb-8 flex flex-wrap lg:flex-nowrap justify-between lg:justify-center lg:space-x-12"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 lg:text-right text-neutral-400 lg:pr-8"
              >
                <p className="mb-2">{education.year}</p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {education.education} -
                  <span className="text-sm text-purple-100">
                    {" "}
                    {education.institution}
                  </span>
                </h6>
                <p className="text-neutral-400">{education.description}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
