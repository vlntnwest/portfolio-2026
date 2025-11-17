import Link from "next/link";
import { useWheelContext } from "../../contexts/WheelContext";
import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";

const menuVariants = {
  closed: {
    height: "1px",
    width: "3rem",
    translateY: "4.4rem",
    opacity: 0,
    pointerEvents: "none",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  open: {
    height: "auto",
    width: "auto",
    translateY: "0rem",
    opacity: 1,
    pointerEvents: "auto",
    transition: { type: "spring", stiffness: 140, damping: 14 },
  },
  hidden: {
    height: 0,
    opacity: 0,
    pointerEvents: "none",
    transition: { duration: 0.12 },
  },
};

const WheelMenu = () => {
  const { isMenuOpen } = useWheelContext();
  const shouldReduceMotion = useReducedMotion();
  const menuState = (() => {
    return isMenuOpen ? "open" : "closed";
  })();

  return (
    <div className="absolute left-1/2 -top-16 pointer-events-none">
      <div className="-translate-x-1/2 absolute top-0 left-0 mb-2 pointer-events-auto">
        <motion.div
          className="background-dark-gradient rounded-full w-[3rem] h-8 relative z-10"
          variants={menuVariants}
          initial={menuState}
          animate={menuState}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
          style={{
            overflow: "clip",
            pointerEvents: isMenuOpen ? "auto" : "none",
          }}
        >
          <div className="w-full px-4 flex justify-center items-center gap-10 text-white text-center flex gap-10 font-medium text-sm/6 appearance-none py-4">
            <Link
              href="/"
              className="text-wheel-buttons-color hover:text-wheel-buttons-hover-color transition"
            >
              Home
            </Link>
            <Link
              href="/playground"
              className="text-wheel-buttons-color hover:text-wheel-buttons-hover-color transition"
            >
              Playground
            </Link>
            <Link href="/contact" className="text-wheel-buttons-color">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WheelMenu;
