"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectItem = ({
  project,
  projectGap,
  changeOnClick,
  index,
  selectedIndex,
}) => {
  const baseBlobUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;

  return (
    <motion.li
      className={`embla__slide min-w-0 flex-[0_0_50%] sm:flex-[0_0_33%] lg:flex-[0_0_25%] aspect-square`}
      style={{ marginRight: projectGap }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
    >
      <Link
        href={project.images ? `/projects/${project.href}` : project.website}
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
    </motion.li>
  );
};

export default ProjectItem;
