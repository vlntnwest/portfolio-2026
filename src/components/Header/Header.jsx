"use client";
import { useWheelContext } from "../../contexts/WheelContext";
import projects from "@/lib/projects.json";
import MenuLink from "../ui/buttons/MenuLink";

const Header = () => {
  const { mode } = useWheelContext();
  return (
    <header>
      <div className="bg-black">{projectsList}</div>
    </header>
  );
};

export default Header;

const projectsList = projects.map((project) => (
  <MenuLink
    key={project.id}
    name={project.label}
    href={`/projects/${project.href}`}
  />
));
