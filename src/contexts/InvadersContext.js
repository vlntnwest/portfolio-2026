"use client";
import { createContext, useContext, useState } from "react";

const InvardersContext = createContext({});

export function useInvardersContext() {
  return useContext(InvardersContext);
}

export default function InvadersContext({ children }) {
  const [kills, setKills] = useState(0);
  return (
    <InvardersContext.Provider value={{ kills, setKills }}>
      {children}
    </InvardersContext.Provider>
  );
}
