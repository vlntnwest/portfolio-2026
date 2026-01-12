"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectItem = ({ project, changeOnClick, index, selectedIndex }) => {
  const baseBlobUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;

  return (
    <motion.li
      className={`embla__slide min-w-0 flex-[0_0_50%] sm:flex-[0_0_33%] lg:flex-[0_0_20%] aspect-square overflow-hidden mr-16`}
    >
      <motion.div
        initial={{ x: index !== 5 ? "101%" : "0%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
        className="w-full h-full"
      >
        <Link
          href={project.images ? `/projets/${project.href}` : project.website}
          className="w-full h-full cursor-pointer flex items-center justify-center relative"
          aria-label={`Projet ${project.label}`}
          onClick={(e) => {
            if (index !== selectedIndex) {
              e.preventDefault();
              changeOnClick(index);
            }
          }}
          target={project.images ? "_self" : "_blank"}
        >
          <Image
            src={
              project.cover
                ? `${baseBlobUrl}/covers/${project?.cover}.png`
                : `${baseBlobUrl}/covers/pokey-cover.png`
            }
            alt={project?.label || "Projet"}
            width={500}
            height={500}
            className="object-cover absolute top-0 left-0 w-full h-full"
            loading="eager"
          />
        </Link>
      </motion.div>
    </motion.li>
  );
};

export default ProjectItem;
