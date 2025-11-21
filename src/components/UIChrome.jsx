"use client";
import Providers from "@/contexts/Providers";
import Header from "@/components/Header/Header";
import Wheel from "@/components/Wheel/Wheel";

const UIChrome = () => {
  return (
    <Providers>
      <Header />
      <Wheel />
    </Providers>
  );
};
export default UIChrome;
