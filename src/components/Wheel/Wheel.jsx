"use client";
import WheelCentralButton from "./WheelCentralButton";
import WheelButtons from "./WheelButtons";
import WheelMenu from "./WheelMenu";
import WheelShadow from "./WheelShadow";
import { motion, useReducedMotion } from "framer-motion";
import { useWheelContext } from "../../contexts/WheelContext";
import WheelProject from "./WheelProject";
import IconMenu from "../ui/buttons/IconMenu";
import Albums from "../SVG/Albums";
import MenuIcon from "../SVG/MenuIcon";
import { useCallback, useState } from "react";

const wheelVariants = {
  home: {
    width: "200px",
    height: "200px",
    borderRadius: "9999px",
    rotate: 0,
    scale: 1,
    translateY: "0px",
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  projects: {
    width: "auto",
    height: "auto",
    transition: { type: "spring", stiffness: 160, damping: 18 },
    display: "block",
  },
};

const Wheel = () => {
  const { mode, toggleMenu } = useWheelContext();
  const [iconStates, setIconStates] = useState({
    projects: false,
    menu: false,
  });

  const shouldReduceMotion = useReducedMotion();

  const modeVariant = mode === "projects" ? "projects" : "home";

  const handleIconClick = useCallback((iconId, e) => {
    e?.stopPropagation();
    setIconStates((prev) => ({
      ...prev,
      [iconId]: !prev[iconId],
    }));
  }, []);

  return (
    <section className="absolute bottom-0 left-0 right-0 flex items-center justify-center mb-4">
      <div className="flex">
        <WheelMenu />

        {mode === "projects" && (
          <IconMenu direction="right" isOpen={iconStates.projects}>
            <button
              onClick={(e) => handleIconClick("projects", e)}
              className="cursor-pointer"
            >
              <div className={`p-4`}>
                <Albums
                  name="Projects icon"
                  className="w-6 h-6 fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
                />
              </div>
            </button>
          </IconMenu>
        )}

        <motion.div
          className="relative background-dark-gradient flex items-center justify-center overflow-hidden select-none touch-none z-10"
          variants={wheelVariants}
          initial={modeVariant}
          animate={modeVariant}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "9999px",
            pointerEvents: "auto",
          }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
        >
          {mode === "home" ? (
            <>
              <WheelCentralButton />
              <WheelShadow position={{ x: 0, y: 0 }} />
              <WheelButtons toggleMenu={toggleMenu} />
            </>
          ) : (
            <WheelProject
              style={
                mode !== "projects"
                  ? {
                      opacity: 0,
                      appearance: "none",
                      pointerEvents: "none",
                      translateY: "4rem",
                    }
                  : {
                      opacity: 1,
                      appearance: "auto",
                      pointerEvents: "auto",
                      translateY: "0rem",
                    }
              }
            />
          )}
        </motion.div>
        {mode === "projects" && (
          <IconMenu direction="left" isOpen={iconStates.menu}>
            {iconStates.menu ? (
              <div className="flex flex-col items-center justify-center p-4 w-72 h-72">
                <div className="text-white text-sm/4">Home</div>
                <div className="text-white text-sm/4">Playground</div>
                <div className="text-white text-sm/4">Contact</div>
              </div>
            ) : (
              <button
                onClick={(e) => handleIconClick("menu", e)}
                className="cursor-pointer"
              >
                <div className={`p-4`}>
                  <MenuIcon
                    name="Menu icon"
                    className="w-6 h-6 fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
                  />
                </div>
              </button>
            )}
          </IconMenu>
        )}
      </div>
    </section>
  );
};

export default Wheel;
