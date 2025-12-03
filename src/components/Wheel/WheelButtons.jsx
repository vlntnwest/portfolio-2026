import Play from "@/components/SVG/Play";
import Nav from "../SVG/Nav";
import { motion } from "framer-motion";
import { useWheelContext } from "../../contexts/WheelContext";
import Link from "next/link";

const WheelButtons = ({ project }) => {
  const { toggleMenu, handleDirection } = useWheelContext();

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center pointer-events-none">
        <motion.button
          className="mt-2 cursor-pointer pointer-events-auto"
          onClick={toggleMenu}
          whileTap={{ y: 1 }}
        >
          <div>
            <span className="uppercase text-wheel-buttons-color text-sm/6 font-medium p-1 hover:text-wheel-buttons-hover-color transition">
              menu
            </span>
          </div>
        </motion.button>
        <Link
          href={`/projects/${project.href}`}
          className="mb-2 cursor-pointer pointer-events-auto"
        >
          <div className="p-1 h-5">
            <Play className="h-full fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition" />
          </div>
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none">
        <button
          className="ml-2 cursor-pointer pointer-events-auto z-10"
          onClick={() => handleDirection(-1)}
        >
          <div className="p-1 h-5">
            <Nav
              name="Prev"
              className="h-full fill-wheel-buttons-color rotate-180 hover:fill-wheel-buttons-hover-color transition"
            />
          </div>
        </button>
        <button
          className="mr-2 cursor-pointer pointer-events-auto z-10"
          onClick={() => handleDirection(1)}
        >
          <div className="p-1 h-5">
            <Nav
              name="Next"
              className="h-full fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
            />
          </div>
        </button>
      </div>
    </>
  );
};

export default WheelButtons;
