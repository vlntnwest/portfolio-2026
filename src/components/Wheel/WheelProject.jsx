import Image from "next/image";
import Nav from "../SVG/Nav";
import { motion } from "framer-motion";
import Link from "next/link";
import { useWheelContext } from "@/contexts/WheelContext";

const WheelProject = ({ className, style, prevHref, nextHref }) => {
  const { currentProject } = useWheelContext();

  if (!currentProject) return null;

  return (
    <div
      className={`px-4 py-2 relative gap-4 flex max-w-[300px] ${className}`}
      style={style}
    >
      <div className="flex gap-2">
        <Image
          src={
            currentProject?.cover
              ? `/assets/images/projects/${currentProject?.cover}.png`
              : "/assets/images/projects/pokey-cover.png"
          }
          alt={currentProject?.label || "Projet"}
          width={40}
          height={40}
          className="rounded-md max-h-10 object-cover max-w-10 aspect-square"
        />
        <div className="overflow-hidden max-w-[110px]">
          <h2 className="text-white text-sm/4 font-semibold text-nowrap">
            {currentProject?.label}
          </h2>
          <motion.p
            className="relative inline-block text-white text-sm/4 text-nowrap after:content-[var(--after-content)] after:absolute after:bottom-0 after:right-0 after:translate-x-[150%] after:text-sm/4 after:w-full after:h-full after:text-white after:whitespace-pre-line"
            style={{
              "--after-content": `'${currentProject?.tag || ""}'`,
            }}
            animate={{ x: ["0%", "-150%"] }}
            transition={{
              duration: 5,
              delay: 5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 5,
            }}
            key={currentProject?.id}
          >
            {currentProject?.tag}
          </motion.p>
        </div>
      </div>
      <div className="flex justify-between items-center z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-linear-[90deg,#43434900_50%,#202022_70%] before:pointer-events-none">
        <Link
          href={`/projects/${prevHref}` ?? "/"}
          className="cursor-pointer z-10 pointer-events-auto active:scale-95"
        >
          <div className="pr-1 h-3">
            <Nav
              name="Prev"
              className="h-full fill-wheel-buttons-color rotate-180 hover:fill-wheel-buttons-hover-color transition"
            />
          </div>
        </Link>
        <Link
          href={`/projects/${nextHref}` ?? "/"}
          className="cursor-pointer z-10 pointer-events-auto active:scale-95"
        >
          <div className="pl-1 h-3">
            <Nav
              name="Next"
              className="h-full fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WheelProject;
