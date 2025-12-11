import { motion } from "framer-motion";

const ProjectsDesc = ({ project }) => {
  return (
    <div className="text-center mt-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.7 }}
        className="text-lg/6 md:text-2xl/8 font-medium"
      >
        {project?.label || "Project Title"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.9 }}
        className="text-sm/6 md:text-base/6 text-gray-600"
      >
        {project?.tag || "Project Tag"}
      </motion.p>
    </div>
  );
};

export default ProjectsDesc;
