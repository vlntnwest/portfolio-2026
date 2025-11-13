"use client";
import { useWheelContext } from "../../contexts/WheelContext";

const Header = () => {
  const { changeMode } = useWheelContext();
  return (
    <header>
      <button onClick={() => changeMode("project")}>Change mode</button>
    </header>
  );
};

export default Header;
