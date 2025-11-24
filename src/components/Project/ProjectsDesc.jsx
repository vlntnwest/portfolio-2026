const ProjectsDesc = ({ project }) => {
  return (
    <div className="text-center mt-4">
      <h2 className="text-lg/6 md:text-2xl/8 font-medium">
        {project?.label || "Project Title"}
      </h2>
      <p className="text-sm/6 md:text-base/6 text-gray-600">
        {project?.tag || "Project Tag"}
      </p>
    </div>
  );
};

export default ProjectsDesc;
