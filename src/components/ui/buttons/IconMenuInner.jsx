import { useWheelContext } from "@/contexts/WheelContext";
import { motion } from "framer-motion";

const menuVariants = {
  show: {
    opacity: 1,
    appearance: "auto",
    pointerEvents: "auto",
    scale: 1,
  },
  hide: {
    opacity: 0,
    appearance: "none",
    pointerEvents: "none",
    scale: 0,
  },
};

const IconMenuInner = ({ name, icon, menu }) => {
  const { toggleProjectMenu, iconStates } = useWheelContext();

  return (
    <>
      <motion.button
        onClick={(e) => toggleProjectMenu(name, e)}
        className="absolute top-0 left-0 cursor-pointer"
        variants={menuVariants}
        initial="show"
        animate={iconStates[name] ? "hide" : "show"}
      >
        <div className={`p-4`}>{icon}</div>
      </motion.button>
      <motion.ul
        className="flex flex-col justify-center p-4"
        variants={menuVariants}
        initial="hide"
        animate={iconStates[name] ? "show" : "hide"}
      >
        {menu}
      </motion.ul>
    </>
  );
};

export default IconMenuInner;
