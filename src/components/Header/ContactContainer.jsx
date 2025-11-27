import { AnimatePresence } from "framer-motion";

const ContactContainer = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default ContactContainer;
