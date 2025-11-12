"use client";
import { motion } from "framer-motion";

const WheelCentralButton = () => {
  return (
    <motion.button
      className="w-[var(--wheel-button-size)] h-[var(--wheel-button-size)] bg-wheel-button rounded-full z-10 border-[var(--wheel-button-border-color)] border-1"
      whileHover={{
        backgroundColor: "var(--wheel-button-hover-color)",
        cursor: "pointer",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    />
  );
};

export default WheelCentralButton;
