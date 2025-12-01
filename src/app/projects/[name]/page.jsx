"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import projects from "@/lib/projects.json";

const page = () => {
  const { name } = useParams();
  const baseBlopUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;

  const project = projects.find((project) => project.href === name);

  return (
    <div className="p-4">
      <h1 className="sr-only">{name}</h1>
      {project &&
        project.images.map((image) => (
          <Image
            key={image.url}
            src={`${baseBlopUrl}/projects/${name}/${image.url}`}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="eager"
          />
        ))}
    </div>
  );
};
export default page;
