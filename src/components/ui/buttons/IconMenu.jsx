import React from "react";
import { motion } from "framer-motion";

const IconMenu = ({ children, direction, isOpen }) => {
  const menuVariants = {
    closed: {
      width: "56px",
      height: "56px",
      borderRadius: "56px",
      transform: "translate(0, 0)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 23,
        delay: 0.2,
      },
    },
    open: {
      width: "auto",
      height: "auto",
      minWidth: "56px",
      minHeight: "56px",
      transform:
        direction === "left"
          ? "translate(-10px, -10px)"
          : "translate(10px, -10px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    initial: {
      width: "56px",
      height: "56px",
      borderRadius: "16px",
      transform:
        direction === "left" ? "translateX(-200px)" : "translateX(200px)",
    },
  };

  return (
    <div
      className="mx-2 flex items-center justify-center w-14 h-14 relative"
      style={{ zIndex: isOpen ? 10 : 0 }}
    >
      <motion.div
        className="absolute bottom-0 right-0 flex items-center justify-center background-dark-gradient rounded-full overflow-hidden"
        initial="initial"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default IconMenu;
