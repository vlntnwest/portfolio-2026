"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
} from "react";

const CarouselContext = createContext({});

export function useCarouselContext() {
  return useContext(CarouselContext);
}

export default function CarouselProvider({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [projectGap, setProjectGap] = useState(48);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeOnClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // useEffect(() => {
  //   const updateLayout = () => {
  //     const screenWidth = window.innerWidth;

  //     const newProjectGap =
  //       screenWidth < 640
  //         ? (screenWidth - screenWidth / 2) / 4
  //         : screenWidth < 1024
  //         ? (screenWidth - (2 * screenWidth) / 3) / 2
  //         : (screenWidth - (2 * screenWidth) / 4) / 2;

  //     setProjectGap(newProjectGap);
  //   };

  //   updateLayout();
  //   window.addEventListener("resize", updateLayout);

  //   return () => window.removeEventListener("resize", updateLayout);
  // }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") emblaApi.scrollPrev();
      else if (e.key === "ArrowRight") emblaApi.scrollNext();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [emblaApi]);

  return (
    <CarouselContext.Provider
      value={{
        emblaRef,
        emblaApi,
        projectGap,
        selectedIndex,
        setSelectedIndex,
        changeOnClick,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}
