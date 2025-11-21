"use client";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";

const WheelContext = createContext({});

export function useWheelContext() {
  return useContext(WheelContext);
}

export default function WheelProvider({ children }) {
  const [mode, setMode] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [iconStates, setIconStates] = useState({
    projects: false,
    menu: false,
  });

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/projects/")) {
      setMode("projects");
    } else {
      setMode("home");
    }
  }, [pathname]);

  useEffect(() => {
    setIconStates({
      projects: false,
      menu: false,
    });
  }, [pathname]);

  const changeMode = useCallback((newMode) => {
    setMode(newMode);
  }, []);

  const toggleMenu = useCallback((e) => {
    e?.stopPropagation();
    setIsMenuOpen((s) => !s);
  }, []);

  const toggleProjectMenu = useCallback(
    (iconId) => {
      setIconStates((prev) => {
        const isCurrentlyOpen = prev[iconId];
        return {
          projects: false,
          menu: false,
          [iconId]: !isCurrentlyOpen,
        };
      });
    },
    [iconStates]
  );

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeMenu = () => setIsMenuOpen(false);
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!iconStates.projects && !iconStates.menu) return;

    const closeMenu = () => setIconStates({ projects: false, menu: false });
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [iconStates]);

  return (
    <WheelContext.Provider
      value={{
        mode,
        isMenuOpen,
        changeMode,
        toggleMenu,
        toggleProjectMenu,
        iconStates,
      }}
    >
      {children}
    </WheelContext.Provider>
  );
}
