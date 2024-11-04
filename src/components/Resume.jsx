import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Resume = () => {
  const handleResumeClick = () => {
    // Open the resume in a new tab
    window.open("/Resume-Shahin_Shaikh.pdf", "_blank");
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-neutral-950/90 shadow-lg border border-gray-700 rounded-lg">
      <motion.h2
        className="text-2xl font-semibold text-center mb-4 text-purple-400"
        initial={{ opacity: 0, x: "-100%" }} // Start fully transparent and off the left side
        whileInView={{ opacity: 1, x: 0 }} // Animate to center position
        transition={{ duration: 0.5 }} // Transition properties
        viewport={{ once: true }} // Optional: animate only once
      >
        My Resume
      </motion.h2>

      <div className="text-center">
        <motion.button
          onClick={handleResumeClick}
          className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-200"
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
        >
          View My Resume
        </motion.button>
      </div>
    </div>
  );
};

export default Resume;
