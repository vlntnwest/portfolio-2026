"use client";
import projects from "@/lib/projects.json";
import ProjectItem from "./ProjectItem";
import { useCarouselContext } from "@/contexts/CarouselContext";
import ProjectsDesc from "./ProjectsDesc";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ProjectsWrapper = () => {
  const { emblaRef, emblaApi, projectGap, changeOnClick, selectedIndex } =
    useCarouselContext();

  const projectList = () => {
    return projects.map((project, index) => (
      <ProjectItem
        key={`${project.label}-${index}`}
        project={project}
        projectGap={projectGap}
        index={index}
        changeOnClick={changeOnClick}
        selectedIndex={selectedIndex}
      />
    ));
  };

  useEffect(() => {
    if (!emblaApi) return;

    const slidesCount = emblaApi.scrollSnapList().length;
    let current = slidesCount - 1;
    let introIterations = 12;
    const intervalDelay = 50;
    const startDelay = 500;
    emblaApi.scrollTo(slidesCount - 1);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        current = (current + 1) % slidesCount;
        emblaApi.scrollTo(current);
        if (--introIterations <= 0) {
          clearInterval(interval);
          emblaApi.scrollTo(0);
        }
      }, intervalDelay);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [emblaApi]);

  return (
    <>
      {projectGap !== 0 && (
        <motion.div
          animate={{
            x: [-100, 500, 0],
            y: [400, 0, 0],
            scale: [3, 1, 1],
            transition: { ease: "circOut", duration: 1.5 },
          }}
          className="embla relative flex-1 select-none"
          ref={emblaRef}
        >
          <ul className="embla__container flex">{projectList()}</ul>
          <ProjectsDesc project={projects[selectedIndex]} />
        </motion.div>
      )}
    </>
  );
};

export default ProjectsWrapper;
