"use client";
import Image from "next/image";
import { useInfiniteClone } from "@/hooks/useInfiniteClone";
import { useRef } from "react";
import { useWheelContext } from "@/contexts/WheelContext";
import { useState } from "react";
import projectPlayground from "@/lib/playground.json";

const page = () => {
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState(null);

  const baseBlobUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;

  useInfiniteClone(containerRef, 400);

  const handleClick = (src) => {
    setShowModal((s) => !s);
    setSrc(src);
  };

  return (
    <>
      <div>
        {showModal && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-white z-999999"
            onClick={() => handleClick(null)}
          >
            <div className="w-full h-full flex items-center">
              <Image
                src={src}
                alt="Pokey Desktop Mockup"
                width={3000}
                height={2500}
                className=""
                loading="eager"
              />
            </div>
          </div>
        )}
        <div className="flex flex-wrap" ref={containerRef}>
          {projectPlayground.map((project, index) => (
            <div
              className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
              onClick={() => handleClick(`${baseBlobUrl}/${project.src}`)}
              key={index}
            >
              <div className="aspect-square">
                <Image
                  src={`${baseBlobUrl}/${project.src}`}
                  alt={project.label}
                  width={project.width}
                  height={project.height}
                  className="w-full h-full object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
                  loading="eager"
                />
              </div>
              <div className="text-center pt-[10px] flex justify-center inner">
                <span>0</span>
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default page;
