"use client";
import Image from "next/image";
import { useInfiniteClone } from "@/hooks/useInfiniteClone";
import { useRef } from "react";

const page = () => {
  const containerRef = useRef(null);
  useInfiniteClone(containerRef, 200);
  return (
    <div>
      <div className="flex flex-wrap" ref={containerRef}>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <div className="aspect-square">
            <Image
              src="https://bto1vhg21okdlu4o.public.blob.vercel-storage.com/projects/pokey-bar/Pokey_Desktop_Mockup.webp"
              alt="Pokey Desktop Mockup"
              width={3000}
              height={2500}
              className="w-full h-full object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
              loading="eager"
            />
          </div>
          <div className="text-center pt-[10px] flex justify-center inner">
            <span>0</span>
            <span>01</span>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <div className="aspect-square">
            <Image
              src="https://bto1vhg21okdlu4o.public.blob.vercel-storage.com/projects/pokey-bar/Pokey_Front.webp"
              alt="Pokey Front"
              width={3000}
              height={2500}
              className="w-full h-full object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
              loading="eager"
            />
          </div>
          <div className="text-center pt-[10px] flex justify-center inner">
            <span>0</span>
            <span>02</span>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <div className="aspect-square">
            <Image
              src="https://bto1vhg21okdlu4o.public.blob.vercel-storage.com/projects/pokey-bar/Pokey_Desktop_Mockup.webp"
              alt="Pokey Desktop Mockup"
              width={3000}
              height={2500}
              className="w-full h-full object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
              loading="eager"
            />
          </div>
          <div className="text-center pt-[10px] flex justify-center inner">
            <span>0</span>
            <span>03</span>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <div className="aspect-square">
            <Image
              src="https://bto1vhg21okdlu4o.public.blob.vercel-storage.com/projects/pokey-bar/Pokey_Desktop_Mockup.webp"
              alt="Pokey Desktop Mockup"
              width={3000}
              height={2500}
              className="w-full h-full object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
              loading="eager"
            />
          </div>
          <div className="text-center pt-[10px] flex justify-center inner">
            <span>0</span>
            <span>04</span>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <div className="aspect-square">
            <Image
              src="https://bto1vhg21okdlu4o.public.blob.vercel-storage.com/projects/pokey-bar/Pokey_Desktop_Mockup.webp"
              alt="Pokey Desktop Mockup"
              width={3000}
              height={2500}
              className="w-full h-full object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
              loading="eager"
            />
          </div>
          <div className="text-center pt-[10px] flex justify-center inner">
            <span>0</span>
            <span>01</span>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <div className="aspect-square">
            <Image
              src="https://bto1vhg21okdlu4o.public.blob.vercel-storage.com/projects/pokey-bar/Pokey_Front.webp"
              alt="Pokey Front"
              width={3000}
              height={2500}
              className="w-full h-full object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
              loading="eager"
            />
          </div>
          <div className="text-center pt-[10px] flex justify-center inner">
            <span>0</span>
            <span>02</span>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <div className="aspect-square">
            <Image
              src="https://bto1vhg21okdlu4o.public.blob.vercel-storage.com/projects/pokey-bar/Pokey_Desktop_Mockup.webp"
              alt="Pokey Desktop Mockup"
              width={3000}
              height={2500}
              className="w-full h-full object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
              loading="eager"
            />
          </div>
          <div className="text-center pt-[10px] flex justify-center inner">
            <span>0</span>
            <span>03</span>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <div className="aspect-square">
            <Image
              src="https://bto1vhg21okdlu4o.public.blob.vercel-storage.com/projects/pokey-bar/Pokey_Desktop_Mockup.webp"
              alt="Pokey Desktop Mockup"
              width={3000}
              height={2500}
              className="w-full h-full object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
              loading="eager"
            />
          </div>
          <div className="text-center pt-[10px] flex justify-center inner">
            <span>0</span>
            <span>04</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
