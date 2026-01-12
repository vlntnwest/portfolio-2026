"use client";
import ProjectsWrapper from "@/components/Project/ProjectsWrapper";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <h1 className="sr-only">
        Valentin Westermeyer, Développeur Next.js et React basé à Strasbourg
      </h1>
      <div className="overflow-hidden flex flex-col h-[calc(100vh-var(--header-height))]">
        <div className="relative h-auto">
          <ProjectsWrapper />
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
