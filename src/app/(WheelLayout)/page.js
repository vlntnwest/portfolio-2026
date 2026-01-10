"use client";
import ProjectsWrapper from "@/components/Project/ProjectsWrapper";
import { useEffect } from "react";

const Home = () => {
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
      <div className="sr-only">
        <p>Compétences techniques :</p>
        <ul>
          <li>Frontend : React, Next.js, Redux, Svelte</li>
          <li>Styling : Tailwind CSS, SCSS, Styled Components</li>
          <li>
            Backend/Base de données : Node.js, Express, MongoDB, PostgreSQL
          </li>
          <li>Langages : JavaScript (ES6+), TypeScript, HTML5, CSS3</li>
          <li>Outils : Git, Vercel, Docker</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
