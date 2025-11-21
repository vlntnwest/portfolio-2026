"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useWheelContext } from "@/contexts/WheelContext";

const IconMenu = ({ children, direction, name }) => {
  const [btnState, setBtnState] = useState("initial");
  const { iconStates } = useWheelContext();

  const isOpen = iconStates[name];

  useEffect(() => {
    console.log("state", btnState);
  }, [btnState]);

  useEffect(() => {
    if (isOpen) {
      setBtnState("open");
      return;
    }
    setBtnState((prev) => (prev === "open" ? "closed" : prev));
  }, [isOpen, btnState]);

  useEffect(() => {
    const timer = setTimeout(() => setBtnState("initialClosed"), 400);
    return () => clearTimeout(timer);
  }, []);

  const transition =
    btnState === "initial"
      ? { duration: 0.45, ease: "easeOut" }
      : btnState === "initialClosed"
      ? { type: "spring", stiffness: 300, damping: 23 }
      : { type: "tween", duration: 0.22, ease: "easeInOut" };

  const menuVariants = {
    initialClosed: {
      width: "56px",
      height: "56px",
      borderRadius: "56px",
      transform: "translate(0, 0)",
    },
    closed: {
      width: "56px",
      height: "56px",
      borderRadius: "56px",
      transform: "translate(0, 0)",
      zIndex: 100,
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
      zIndex: 100,
    },
    initial: {
      width: "56px",
      height: "56px",
      borderRadius: "16px",
      zIndex: 0,
      transform:
        direction === "left" ? "translateX(-200px)" : "translateX(200px)",
    },
  };

  return (
    <div className="mx-2 flex items-center justify-center w-14 h-14 relative">
      <motion.div
        className={`absolute bottom-0 ${
          direction === "left" ? "right-0" : "left-0"
        } flex items-center justify-center background-dark-gradient rounded-full overflow-hidden`}
        initial="initial"
        animate={btnState}
        variants={menuVariants}
        transition={transition}
        layout
      >
        {children}
      </motion.div>
    </div>
  );
};

export default IconMenu;
