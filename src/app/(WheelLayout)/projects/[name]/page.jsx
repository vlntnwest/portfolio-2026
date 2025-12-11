"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import projects from "@/lib/projects.json";
import { useRef } from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteClone";

const page = () => {
  const { name } = useParams();
  const baseBlopUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;
  const project = projects.find((project) => project.href === name);
  const containerRef = useRef(null);

  const items = useInfiniteScroll(project.images, 400);

  return (
    <>
      <section className="overflow-y-auto">
        <h1 className="sr-only">{name}</h1>
        <div ref={containerRef}>
          <div className="h-auto">
            <div>
              {items.map((image, index) => (
                <Image
                  key={index}
                  src={`${baseBlopUrl}/projects/${name}/${image.url}`}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className=" aspect-auto w-full max-w-[calc(100%-24px)] h-auto max-h-[80vh] object-contain sm:max-w-[70vw] mx-4 mb-4 mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
