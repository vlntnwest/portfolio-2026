import { motion } from "framer-motion";

const ProjectsDesc = ({ project }) => {
  return (
    <div className="text-center mt-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.7 }}
        className="project-title"
      >
        {project?.label || "Project Title"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.9 }}
        className="text-paragraph text-[var(--medium-gray)]"
      >
        {project?.tag || "Project Tag"}
      </motion.p>
    </div>
  );
};

export default ProjectsDesc;
