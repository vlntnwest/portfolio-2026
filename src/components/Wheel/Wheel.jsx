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
import { useCarouselContext } from "@/contexts/CarouselContext";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const wheelVariants = {
  initial: { opacity: 0, transition: { duration: 0 } },
  home: {
    width: "200px",
    height: "200px",
    borderRadius: "9999px",
    opacity: 1,
    translateY: "0px",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  projects: {
    width: "auto",
    height: "auto",
    transition: { duration: 0.4, ease: "easeInOut" },
    display: "block",
    opacity: 1,
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
  const {
    mode,
    toggleMenu,
    prevProject,
    nextProject,
    wheelRef,
    position,
    onMouseMove,
    reset,
    onTouchMove,
    onTouchStart,
    dir,
    setProjectLink,
  } = useWheelContext();
  const { selectedIndex, emblaApi } = useCarouselContext();
  const pathname = usePathname();

  const shouldReduceMotion = useReducedMotion();

  const prevHref = prevProject?.images
    ? `/projects/${prevProject.href}`
    : prevProject?.website;
  const nextHref = nextProject?.images
    ? `/projects/${nextProject.href}`
    : nextProject?.website;

  useEffect(() => {
    if (!emblaApi || dir === undefined) return;
    if (dir === 0) return;
    if (dir >= 1) {
      emblaApi.scrollNext();
    } else if (dir <= -1) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, dir]);

  useEffect(() => {
    if (mode === "home") {
      if (!projects[selectedIndex].images) {
        setProjectLink(projects[selectedIndex].website);
        return;
      }
      setProjectLink(`/projects/${projects[selectedIndex].href}`);
    }
  }, [mode, selectedIndex, setProjectLink, pathname]);

  return (
    <section className="fixed bottom-0 left-0 right-0 z-99999 flex items-center justify-center mb-4">
      <WheelMenu />
      {mode === "projects" && (
        <IconMenu direction="right" name="projects">
          <IconMenuInner name="projects" icon={albumIcon} menu={projectsList} />
        </IconMenu>
      )}

      <motion.div
        className="relative background-dark-gradient flex items-center justify-center overflow-hidden select-none touch-none z-10"
        variants={wheelVariants}
        initial="initial"
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
        {mode === "home" && position.x !== 0 && position.y !== 0 && (
          <WheelShadow position={position} />
        )}
        <motion.div
          variants={wheelContentVariants}
          initial="hide"
          animate={mode === "home" ? "show" : "hide"}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <WheelCentralButton />
          <WheelButtons
            toggleMenu={toggleMenu}
            project={projects[selectedIndex]}
          />
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
            prevHref={prevHref}
            nextHref={nextHref}
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
    href={project?.images ? `/projects/${project.href}` : project.website}
    target={project?.images ? "_self" : "_blank"}
    cover={project.cover}
    icon={true}
  />
));

const menuList = menus.map((menu) => (
  <MenuLink key={menu.id} name={menu.label} href={menu.href} />
));
