import projects from "@/lib/projects.json";
import MenuLink from "../ui/buttons/MenuLink";

const Header = () => {
  return (
    <header>
      <div className="bg-black absolute top-0 left-0 right-0">
        {projectsList}
      </div>
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
