"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import projectPlayground from "@/lib/playground.json";
import { useInfiniteScroll } from "@/hooks/useInfiniteClone";
import { useWheelContext } from "@/contexts/WheelContext";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState(1);
  const items = useInfiniteScroll(projectPlayground, 400);
  const { setProjectLink } = useWheelContext();

  const baseBlobUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;

  const [isActive, setIsActive] = useState(0);
  const { dir } = useWheelContext();

  const handleClick = (item) => {
    setShowModal(true);
    setSrc(`${baseBlobUrl}/${item.src}`);
    history.replaceState(null, "", `#${item.href}`);
  };

  const closeModal = () => {
    setShowModal(false);
    setSrc(null);

    const pathname = window.location.pathname;
    history.replaceState(null, "", pathname);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (items.length < 0) return;

    if (dir === 0) return;
    if (dir >= 1) {
      if (isActive < 0) {
        setIsActive(0);
        return;
      }
      setIsActive((prev) => prev + 1);
    } else if (dir <= -1) {
      setIsActive((prev) => prev - 1);
    }
  }, [dir]);

  useEffect(() => {
    if (isActive < 0 || isActive >= items.length) return;

    const element = document.querySelector(`[data-index='${isActive}']`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, [isActive, items]);

  useEffect(() => {
    const openModalFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        setShowModal(false);
        setSrc(null);
        return;
      }

      const found = items.find(
        (item) => item.href === hash || String(item.id) === hash
      );
      if (found) {
        setSrc(`${baseBlobUrl}/${found.src}`);
        setShowModal(true);
      }
    };

    openModalFromHash();
    window.addEventListener("hashchange", openModalFromHash);

    return () => window.removeEventListener("hashchange", openModalFromHash);
  }, [items]);

  useEffect(() => {
    if (!items || isActive < 0 || isActive >= items.length) return;

    const activeItem = items[isActive];
    if (!activeItem) return;
    setProjectLink(`#${activeItem.href}`);
  }, [isActive, items]);

  return (
    <>
      <div>
        {showModal && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-white z-999999"
            onClick={closeModal}
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

        <div className="flex flex-wrap">
          {items.map((item, index) => (
            <a
              className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 block cursor-pointer"
              key={index}
              data-index={index}
              href={`#${item.href}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item);
              }}
            >
              <div className="aspect-square">
                <div
                  className={`p-2 rounded-sm ${
                    isActive === index && "bg-[#89898938]"
                  }`}
                >
                  <Image
                    src={`${baseBlobUrl}/${item.src}`}
                    alt={item.label}
                    width={item.width}
                    height={item.height}
                    className="w-full h-full rounded-xs object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="text-center pt-[10px] flex justify-center inner">
                <span>0</span>
                <span>{item.id}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
