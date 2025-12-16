"use client";
import { useEffect, useState } from "react";

const Pointer = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 }); // start off-screen

  useEffect(() => {
    const move = (x, y) => {
      setPos({ x, y });
    };

    const handleMouse = (e) => move(e.clientX, e.clientY);

    const handleTouch = (e) => {
      const touch = e.touches[0];
      if (touch) move(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return (
    <div
      className="absolute pointer-events-none w-6 h-6"
      style={{
        transform: "translate(-50%, -50%)",
        left: pos.x,
        top: pos.y - 152,
      }}
    >
      <div className="relative h-full w-full">
        <div className="flex items-center justify-between absolute top-0 left-0 w-full h-full">
          <span className="block w-2 h-[2px] bg-black"></span>
          <span className="block w-2 h-[2px] bg-black"></span>
        </div>
        <div className="flex flex-col items-center justify-between absolute top-0 left-0 w-full h-full">
          <span className="block h-2 w-[2px] bg-black"></span>
          <span className="block h-2 w-[2px] bg-black"></span>
        </div>
      </div>
    </div>
  );
};

export default Pointer;
