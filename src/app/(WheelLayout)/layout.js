import Wheel from "@/components/Wheel/Wheel";
import CarouselProvider from "@/contexts/CarouselContext";
import Providers from "@/contexts/Providers";
import React from "react";

const layout = ({ children }) => {
  return (
    <CarouselProvider>
      <Providers>
        {children}
        <Wheel />
      </Providers>
    </CarouselProvider>
  );
};

export default layout;
