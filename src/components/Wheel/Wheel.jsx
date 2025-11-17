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
import menus from "@/lib/menus.json";
import MenuLink from "../ui/buttons/MenuLink";

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
  const { mode, toggleMenu, toggleProjectMenu, iconStates } = useWheelContext();

  const shouldReduceMotion = useReducedMotion();

  const modeVariant = mode === "projects" ? "projects" : "home";

  return (
    <section className="absolute bottom-0 left-0 right-0 flex items-center justify-center mb-4">
      <WheelMenu />
      {mode === "projects" && (
        <IconMenu direction="right" isOpen={iconStates.projects}>
          <button
            onClick={(e) => toggleProjectMenu("projects", e)}
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
            <ul className="flex flex-col justify-center p-4">
              {menus.map((menu) => (
                <MenuLink
                  key={menu.id}
                  name={menu.label}
                  href={menu.href}
                  onClick={(e) => toggleProjectMenu("menu", e)}
                />
              ))}
            </ul>
          ) : (
            <button
              onClick={(e) => toggleProjectMenu("menu", e)}
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
    </section>
  );
};

export default Wheel;
