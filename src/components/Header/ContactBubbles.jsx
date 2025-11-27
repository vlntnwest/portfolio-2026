import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import PlayUnique from "../SVG/Play2";
import Link from "next/link";

const ContactBubbles = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ height: 56 }}
      animate={open ? "open" : "close"}
      variants={{
        open: { minHeight: 200 },
        close: { minHeight: 56 },
      }}
      transition={{ duration: 0.05 }}
    >
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          className="relative background-dark-gradient rounded-full px-4 z-2"
          initial="close"
          animate={open ? "open" : "close"}
          variants={{
            open: {
              width: 200,
              paddingTop: 16,
              paddingBottom: 16,
              height: 56,
              marginTop: 8,
            },
            close: {
              width: 130,
              paddingTop: 8,
              paddingBottom: 8,
              height: 40,
              marginTop: -8,
            },
          }}
          transition={{
            type: "spring",
            mass: 0.1,
            stiffness: 150,
            damping: 12,
            bounce: 0,
          }}
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center justify-center">
            <span className="text-white transition-all duration-400 flex items-center justify-center">
              {open ? (
                <Link href="mailto:contact@vlntn.fr">contact@vlntn.fr</Link>
              ) : (
                <>
                  Valentin
                  <div className="p-1 h-6 ml-2">
                    <PlayUnique className="h-full fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition" />
                  </div>
                </>
              )}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial="close"
          animate={open ? "open" : "close"}
          className="background-dark-gradient rounded-full w-50 h-14 relative z-1"
          variants={{
            open: {
              marginTop: 6,
              transition: { duration: 0.4 },
              width: 200,
              height: 56,
            },
            close: {
              marginTop: -40,
              width: 100,
              height: 10,
            },
          }}
          transition={{
            type: "spring",
            mass: 0.1,
            stiffness: 150,
            damping: 12,
            bounce: 0,
          }}
          onClick={() => setOpen(!open)}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  paddingLeft: 12,
                  paddingRight: 12,
                }}
              >
                <span className="text-white transition-all duration-400 flex items-center justify-center">
                  <Link href="tel:+33603751457">+33 6 03 75 14 57</Link>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          initial="close"
          animate={open ? "open" : "close"}
          className="background-dark-gradient rounded-full w-50 h-14 relative z-1"
          variants={{
            open: {
              marginTop: 6,
              transition: { duration: 0.4 },
              width: 200,
              height: 56,
            },
            close: {
              marginTop: 0,
              width: 100,
              height: 10,
            },
          }}
          transition={{
            type: "spring",
            mass: 0.1,
            stiffness: 150,
            damping: 12,
            bounce: 0,
          }}
          onClick={() => setOpen(!open)}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  paddingLeft: 12,
                  paddingRight: 12,
                }}
              >
                <span className="text-white transition-all duration-400 flex items-center justify-center">
                  <Link href="mailto:contact@vlntn.fr">Autre info</Link>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactBubbles;
