"use client";
import projects from "@/lib/projects.json";
import ProjectItem from "./ProjectItem";
import useCarousel from "@/hooks/useCarousel";

const ProjectsWrapper = () => {
  const { emblaRef, projectGap, changeOnClick, selectedIndex } = useCarousel();

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
    <div className="embla overflow-hidden flex-1 content-center" ref={emblaRef}>
      <ul className="embla__container flex">{projectList()}</ul>
    </div>
  );
};

export default ProjectsWrapper;
