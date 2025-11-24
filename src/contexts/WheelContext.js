"use client";
import { usePathname, useParams } from "next/navigation";
import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from "react";
import projects from "@/lib/projects.json";

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
  const params = useParams();
  const { name } = params || {};

  const { currentProject, prevProject, nextProject } = useMemo(() => {
    if (!name)
      return { currentProject: null, prevProject: null, nextProject: null };

    const currentIndex = projects.findIndex((p) => p.href === name);
    if (currentIndex === -1)
      return { currentProject: null, prevProject: null, nextProject: null };

    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;

    return {
      currentProject: projects[currentIndex],
      prevProject: projects[prevIndex],
      nextProject: projects[nextIndex],
    };
  }, [name]);

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
        changeMode,
        isMenuOpen,
        toggleMenu,
        toggleProjectMenu,
        iconStates,
        setIconStates,
        currentProject,
        prevProject,
        nextProject,
      }}
    >
      {children}
    </WheelContext.Provider>
  );
}
