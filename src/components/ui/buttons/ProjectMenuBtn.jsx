import Albums from "@/components/SVG/Albums";
import React from "react";
import { motion } from "framer-motion";

const ProjectMenuBtn = () => {
  return (
    <div className="mr-2">
      <div className="p-4 background-dark-gradient rounded-full">
        <motion.button
          className="flex items-center justify-center h-6 w-6"
          whileTap={{ scale: 0.9 }}
          onClick={() => console.log("click")}
        >
          <Albums
            name="Projects icon"
            className="h-full w-full fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
          />
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectMenuBtn;
