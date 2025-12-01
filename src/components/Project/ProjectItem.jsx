"use client";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  project,
  projectGap,
  changeOnClick,
  index,
  selectedIndex,
}) => {
  const baseBlobUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;
  return (
    <li
      className={`embla__slide min-w-0 flex-[0_0_50%] sm:flex-[0_0_33%] lg:flex-[0_0_25%] aspect-square`}
      style={{ marginRight: projectGap }}
    >
      <Link
        href={`/projects/${project.href}`}
        className="w-full h-full cursor-pointer flex items-center justify-center relative"
        aria-label={`Projet ${project.label}`}
        onClick={(e) => {
          if (index !== selectedIndex) {
            e.preventDefault();
            changeOnClick(index);
          }
        }}
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
    </li>
  );
};

export default ProjectItem;
