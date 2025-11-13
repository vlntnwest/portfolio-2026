"use client";
import WheelCentralButton from "./WheelCentralButton";
import WheelButtons from "./WheelButtons";
import WheelMenu from "./WheelMenu";
import WheelShadow from "./WheelShadow";
import { motion } from "framer-motion";
import { useWheelContext } from "../../contexts/WheelContext";

const Wheel = () => {
  const { mode, isMenuOpen, toggleMenu } = useWheelContext();

  return (
    <section className="fixed bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="absolute left-1/2 -top-16">
        <div className="-translate-x-1/2 absolute top-0 left-0 mb-2">
          <motion.div
            className="background-dark-gradient rounded-full w-[3rem] h-8 relative z-10 "
            initial={{
              height: "1px",
              width: "3rem",
              translateY: "4.4rem",
            }}
            animate={{
              height: isMenuOpen ? "auto" : "1px",
              width: isMenuOpen ? "auto" : "3rem",
              translateY: isMenuOpen ? "0" : "4.4rem",
            }}
            transition={{ type: "spring", visualDuration: 0.2, bounce: 0.25 }}
            style={{
              overflow: "clip",
              pointerEvents: isMenuOpen ? "auto" : "none",
            }}
          >
            <WheelMenu />
          </motion.div>
        </div>
      </div>
      <div className="relative w-[200px] h-[200px] background-dark-gradient rounded-full flex items-center justify-center overflow-hidden select-none touch-none mix-blend-darken z-10">
        <WheelCentralButton /> <WheelShadow position={{ x: 0, y: 0 }} />
        <WheelButtons toggleMenu={toggleMenu} />
      </div>
    </section>
  );
};
export default Wheel;
