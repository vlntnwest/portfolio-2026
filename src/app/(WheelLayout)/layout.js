import Wheel from "@/components/Wheel/Wheel";
import CarouselProvider from "@/contexts/CarouselContext";
import Providers from "@/contexts/Providers";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <CarouselProvider>
        <Providers>
          {children} <Wheel />
        </Providers>
      </CarouselProvider>
    </div>
  );
};

export default layout;
