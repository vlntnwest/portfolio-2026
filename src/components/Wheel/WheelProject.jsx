import Image from "next/image";
import Nav from "../SVG/Nav";
import { motion } from "framer-motion";

const WheelProject = ({ className, style }) => {
  const project = {
    name: "Pokey",
    description: "Web - Branding",
    image: "/assets/images/projects/pokey.png",
  };

  const afterStyle = {
    "--after-content": `'${project.description}'`,
  };

  return (
    <div
      className={`px-4 py-2 relative gap-4 flex max-w-[300px] ${className}`}
      style={style}
    >
      <div className="flex gap-2">
        <Image
          src={project.image}
          alt={project.name}
          width={40}
          height={40}
          className="rounded-md"
        />
        <div className="overflow-hidden">
          <h2 className="text-white text-sm/4 font-semibold">{project.name}</h2>
          <motion.p
            className="relative inline-block text-white text-sm/4 text-nowrap after:content-[var(--after-content)] after:absolute after:bottom-0 after:right-0 after:translate-x-[150%] after:text-sm/4 after:w-full after:h-full after:text-white after:whitespace-pre-line"
            style={afterStyle}
            animate={{ x: ["0%", "-150%"] }}
            transition={{
              duration: 5,
              delay: 5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 5,
            }}
          >
            {project.description}
          </motion.p>
        </div>
      </div>
      <div className="flex justify-between items-center z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-linear-[90deg,#43434900_50%,#202022_70%] before:pointer-events-none">
        <motion.button
          className="cursor-pointer z-10 pointer-events-auto"
          whileTap={{ scale: 0.95 }}
        >
          <div className="pr-1 h-3">
            <Nav
              name="Prev"
              className="h-full fill-wheel-buttons-color rotate-180 hover:fill-wheel-buttons-hover-color transition"
            />
          </div>
        </motion.button>
        <motion.button
          className="cursor-pointer z-10 pointer-events-auto"
          whileTap={{ scale: 0.95 }}
        >
          <div className="pl-1 h-3">
            <Nav
              name="Next"
              className="h-full fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
            />
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default WheelProject;
