"use client";
import WheelCentralButton from "./WheelCentralButton";
import WheelButtons from "./WheelButtons";
import WheelMenu from "./WheelMenu";
import WheelShadow from "./WheelShadow";
import { motion, useReducedMotion } from "framer-motion";
import { useWheelContext } from "../../contexts/WheelContext";
import WheelProject from "./WheelProject";
import ProjectMenuBtn from "../ui/buttons/ProjectMenuBtn";
import MenuBtn from "../ui/buttons/MenuBtn";

const wheelVariants = {
  home: {
    width: "200px",
    height: "200px",
    borderRadius: "9999px", // fully round
    rotate: 0,
    scale: 1,
    translateY: "0px",
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  project: {
    width: "auto",
    height: "auto",
    transition: { type: "spring", stiffness: 160, damping: 18 },
  },
};

const menuVariants = {
  closed: {
    height: "1px",
    width: "3rem",
    translateY: "4.4rem",
    opacity: 0,
    pointerEvents: "none",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  open: {
    height: "auto",
    width: "auto",
    translateY: "0rem",
    opacity: 1,
    pointerEvents: "auto",
    transition: { type: "spring", stiffness: 140, damping: 14 },
  },
  hidden: {
    height: 0,
    opacity: 0,
    pointerEvents: "none",
    transition: { duration: 0.12 },
  },
};

const Wheel = () => {
  const { mode, isMenuOpen, toggleMenu } = useWheelContext();
  const shouldReduceMotion = useReducedMotion();

  const modeVariant = mode === "project" ? "project" : "home";

  const menuState = (() => {
    return isMenuOpen ? "open" : "closed";
  })();

  return (
    <section className="fixed bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none">
      <div className="absolute left-1/2 -top-16 pointer-events-none">
        <div className="-translate-x-1/2 absolute top-0 left-0 mb-2 pointer-events-auto">
          <motion.div
            className="background-dark-gradient rounded-full w-[3rem] h-8 relative z-10"
            variants={menuVariants}
            initial={menuState}
            animate={menuState}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            style={{
              overflow: "clip",
              pointerEvents: isMenuOpen ? "auto" : "none",
            }}
          >
            <WheelMenu />
          </motion.div>
        </div>
      </div>

      {mode === "project" && <ProjectMenuBtn />}

      <motion.div
        className="relative background-dark-gradient flex items-center justify-center overflow-hidden select-none touch-none mix-blend-darken z-10"
        variants={wheelVariants}
        initial={modeVariant}
        animate={modeVariant}
        layout
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "9999px",
          pointerEvents: "auto",
        }}
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        {mode === "home" && (
          <>
            <WheelCentralButton />
            <WheelShadow position={{ x: 0, y: 0 }} />
            <WheelButtons toggleMenu={toggleMenu} />
          </>
        )}
        {mode === "project" && <WheelProject />}
      </motion.div>
      {mode === "project" && <MenuBtn />}
    </section>
  );
};

export default Wheel;
