"use client";
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

  const changeMode = useCallback((newMode) => {
    setMode(newMode);
  }, []);

  const toggleMenu = useCallback((e) => {
    e?.stopPropagation();
    setIsMenuOpen((s) => !s);
  }, []);

  const toggleProjectMenu = useCallback(
    (iconId, e) => {
      e?.stopPropagation();
      setIconStates((prev) => ({
        ...prev,
        [iconId]: !prev[iconId],
      }));

      if (iconStates[iconId] === true) {
        changeMode("home");
      }
    },
    [iconStates]
  );

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeMenu = () => setIsMenuOpen(false);
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

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
