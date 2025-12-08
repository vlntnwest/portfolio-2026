"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import PlayUnique from "../SVG/Play2";
import Link from "next/link";
import {
  BehanceLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

const ContactBubbles = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeMenu = () => setOpen(false);
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [open]);

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
          className="relative background-dark-gradient rounded-full px-4 z-2 pointer-events-auto"
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
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <div className="flex items-center justify-center">
            <span className="text-white transition-all duration-400 flex items-center justify-center select-none cursor-pointer">
              {open ? (
                <Link href="mailto:contact@vlntn.fr">contact@vlntn.fr</Link>
              ) : (
                <>
                  Valentin
                  <div className="py-1 pl-1 h-6 ml-2">
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
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-full"
              >
                <span className="text-white transition-all duration-400 flex items-center justify-center pointer-events-auto">
                  <Link href="tel:+33603751457">+33 6 03 75 14 57</Link>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          initial="close"
          animate={open ? "open" : "close"}
          className="relative z-1"
          variants={{
            open: {
              marginTop: 6,
              transition: { duration: 0.4 },
              width: 200,
              height: 56,
            },
            close: {
              marginTop: 0,
              width: 200,
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
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <AnimatePresence>
            {open && (
              <div className="flex items-center justify-between w-full h-full">
                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: 72,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    transition: {
                      delay: 0.2,
                    },
                  }}
                  exit={{ opacity: 0, scale: 0.5, x: 72 }}
                  className="background-dark-gradient rounded-full p-2 relative z-1 pointer-events-auto"
                >
                  <Link
                    href="https://www.linkedin.com/in/valentinwestermeyer/"
                    target="_blank"
                  >
                    <LinkedinLogoIcon size={40} color="#fff" />
                  </Link>
                </motion.span>
                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.1,
                    },
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="background-dark-gradient rounded-full p-2 relative z-1 pointer-events-auto"
                >
                  <Link href="https://github.com/vlntnwest" target="_blank">
                    <GithubLogoIcon size={40} color="#fff" />
                  </Link>
                </motion.span>
                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: -72,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    transition: {
                      delay: 0.2,
                    },
                  }}
                  exit={{ opacity: 0, scale: 0.5, x: -72 }}
                  className="background-dark-gradient rounded-full p-2 relative z-1 pointer-events-auto"
                >
                  <Link
                    href="https://www.behance.net/valentiwesterm"
                    target="_blank"
                  >
                    <BehanceLogoIcon size={40} color="#fff" />
                  </Link>
                </motion.span>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactBubbles;
