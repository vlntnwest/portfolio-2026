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
import menus from "@/lib/menus.json";
import projects from "@/lib/projects.json";
import MenuLink from "../ui/buttons/MenuLink";
import IconMenuInner from "../ui/buttons/IconMenuInner";
import useWheelControl from "@/hooks/useWheel";

const wheelVariants = {
  home: {
    width: "200px",
    height: "200px",
    borderRadius: "9999px",
    scale: 1,
    translateY: "0px",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  projects: {
    width: "auto",
    height: "auto",
    transition: { duration: 0.4, ease: "easeInOut" },
    display: "block",
  },
};

const wheelContentVariants = {
  show: {
    opacity: 1,
    appearance: "auto",
    pointerEvents: "auto",
  },
  hide: {
    opacity: 0,
    appearance: "none",
    pointerEvents: "none",
  },
};

const Wheel = () => {
  const { mode, toggleMenu } = useWheelContext();

  const shouldReduceMotion = useReducedMotion();

  const { wheelRef, position, onMouseMove, reset, onTouchMove, onTouchStart } =
    useWheelControl();

  return (
    <section className="absolute bottom-0 left-0 right-0 flex items-center justify-center mb-4">
      <WheelMenu />
      {mode === "projects" && (
        <IconMenu direction="right" name="projects">
          <IconMenuInner name="projects" icon={albumIcon} menu={projectsList} />
        </IconMenu>
      )}

      <motion.div
        className="relative background-dark-gradient flex items-center justify-center overflow-hidden select-none touch-none z-10"
        variants={wheelVariants}
        initial="home"
        animate={mode}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "9999px",
          pointerEvents: "auto",
        }}
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
        ref={wheelRef}
        onMouseMove={onMouseMove}
        onMouseLeave={reset}
        onTouchMove={onTouchMove}
        onTouchEnd={reset}
        onTouchStart={onTouchStart}
      >
        {position.x !== 0 && position.y !== 0 && (
          <WheelShadow position={position} />
        )}
        <motion.div
          variants={wheelContentVariants}
          initial="hide"
          animate={mode === "home" ? "show" : "hide"}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <WheelCentralButton />
          <WheelButtons toggleMenu={toggleMenu} />
        </motion.div>
        <motion.div
          variants={wheelContentVariants}
          initial="hide"
          animate={mode === "projects" ? "show" : "hide"}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
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
        </motion.div>
      </motion.div>
      {mode === "projects" && (
        <IconMenu direction="left" name="menu">
          <IconMenuInner name="menu" icon={menuIcon} menu={menuList} />
        </IconMenu>
      )}
    </section>
  );
};

export default Wheel;

const menuIcon = (
  <MenuIcon
    name="Menu icon"
    className="w-6 h-6 fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
  />
);

const albumIcon = (
  <Albums
    name="Projects icon"
    className="w-6 h-6 fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
  />
);

const projectsList = projects.map((project) => (
  <MenuLink
    key={project.id}
    name={project.label}
    href={`/projects/${project.href}`}
  />
));

const menuList = menus.map((menu) => (
  <MenuLink key={menu.id} name={menu.label} href={menu.href} />
));
