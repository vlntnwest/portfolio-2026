"use client";
import projects from "@/lib/projects.json";
import ProjectItem from "./ProjectItem";
import { useCarouselContext } from "@/contexts/CarouselContext";
import ProjectsDesc from "./ProjectsDesc";

const ProjectsWrapper = () => {
  const { emblaRef, projectGap, changeOnClick, selectedIndex } =
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

  return (
    <>
      {projectGap !== 0 && (
        <div
          className="embla overflow-hidden absolute top-[40%] left-0 right-0 -translate-y-1/2 select-none"
          ref={emblaRef}
        >
          <ul className="embla__container flex">{projectList()}</ul>
          <ProjectsDesc project={projects[selectedIndex]} />
        </div>
      )}
    </>
  );
};

export default ProjectsWrapper;
