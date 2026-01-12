"use client";
import { usePathname, useParams } from "next/navigation";
import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";
import projects from "@/lib/projects.json";

const WheelContext = createContext({});

export function useWheelContext() {
  return useContext(WheelContext);
}

export default function WheelProvider({ children }) {
  const [mode, setMode] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iconStates, setIconStates] = useState({
    projects: false,
    menu: false,
  });
  const [projectLink, setProjectLink] = useState("null");

  const wheelRef = useRef(null);
  const startAngleRef = useRef(null);
  const prevAngleRef = useRef(null);
  const accRef = useRef(0);
  const wheelAccRef = useRef(0);
  const [dir, setDir] = useState(0);
  const lastTouchRef = useRef(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const anglePerStep = Math.PI / 3;
  const wheelStep = 1;
  const wheelSensitivity = 0.005;

  const getAngle = useCallback((clientX, clientY) => {
    if (!wheelRef.current) return 0;
    const rect = wheelRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return Math.atan2(clientY - cy, clientX - cx);
  }, []);

  const normalizeDelta = useCallback((delta) => {
    if (delta > Math.PI) return delta - 2 * Math.PI;
    if (delta < -Math.PI) return delta + 2 * Math.PI;
    return delta;
  }, []);

  const reset = useCallback(() => {
    startAngleRef.current = null;
    prevAngleRef.current = null;
    accRef.current = 0;
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleMove = useCallback(
    (angle) => {
      if (prevAngleRef.current === null) return 0;

      let delta = angle - prevAngleRef.current;
      delta = normalizeDelta(delta);
      accRef.current += delta;
      let step = 0;
      while (Math.abs(accRef.current) >= anglePerStep) {
        const dir = Math.sign(accRef.current);
        step += dir;
        accRef.current -= dir * anglePerStep;
      }
      prevAngleRef.current = angle;
      setDir(step);
    },
    [normalizeDelta, setDir]
  );

  const followMouse = useCallback(
    (e) => {
      if (!wheelRef.current) return;
      const angle = getAngle(e.clientX, e.clientY);
      const radius = 68;
      setPosition({
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      });
      return angle;
    },
    [getAngle]
  );

  const onMouseMove = useCallback(
    (e) => {
      if (lastTouchRef.current) return;
      if (!wheelRef.current) return 0;

      if (prevAngleRef.current === null) {
        prevAngleRef.current = getAngle(e.clientX, e.clientY);
      }

      followMouse({
        clientX: e.clientX,
        clientY: e.clientY,
      });
      handleMove(getAngle(e.clientX, e.clientY));
    },
    [followMouse, handleMove, getAngle]
  );

  const onTouchStart = () => {
    lastTouchRef.current = true;
  };

  const onTouchMove = useCallback(
    (e) => {
      if (!wheelRef.current) return;
      const touch = e.touches[0];

      if (prevAngleRef.current === null) {
        prevAngleRef.current = getAngle(touch.clientX, touch.clientY);
      }

      followMouse({
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      handleMove(getAngle(touch.clientX, touch.clientY));
    },
    [followMouse]
  );

  const onWheel = useCallback((e) => {
    wheelAccRef.current += e.deltaY * wheelSensitivity;

    let step = 0;
    while (Math.abs(wheelAccRef.current) >= wheelStep) {
      const dir = Math.sign(wheelAccRef.current);
      step += dir;
      wheelAccRef.current -= dir * wheelStep;
    }

    setDir(step);
  }, []);

  const handleDirection = useCallback((delta) => {
    setDir(delta);
    setTimeout(() => setDir(0), 50);
  }, []);

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
    if (pathname.includes("/projets/")) {
      setMode("single");
      // } else if (pathname.includes("/playground")) {
      //   setMode("initial");
    } else {
      setMode("projets");
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

  useEffect(() => {
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [onWheel]);

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
        wheelRef,
        position,
        dir,
        handleDirection,
        reset,
        onMouseMove,
        onTouchMove,
        onWheel,
        onTouchStart,
        projectLink,
        setProjectLink,
      }}
    >
      {children}
    </WheelContext.Provider>
  );
}
