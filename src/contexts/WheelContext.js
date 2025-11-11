"use client";
import { createContext, useContext, useCallback, useState } from "react";

const WheelContext = createContext({});

export function useWheelContext() {
  return useContext(WheelContext);
}

export default function WheelProvider({ children }) {
  const [mode, setMode] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeMode = useCallback((newMode) => {
    setMode(newMode);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <WheelContext.Provider value={{ mode, isMenuOpen, changeMode, toggleMenu }}>
      {children}
    </WheelContext.Provider>
  );
}
