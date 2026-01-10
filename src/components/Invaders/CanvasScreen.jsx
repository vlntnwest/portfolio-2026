"use client";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useInvardersContext } from "@/contexts/InvadersContext";
import Starfield from "./Starfield";
import InvadersManager from "./InvadersManager";

const CanvasScreen = () => {
  const { kills } = useInvardersContext();

  return (
    <>
      <div className="absolute top-0 max-w-7xl left-1/2 -translate-x-1/2 w-full mt-[var(--header-height)]">
        <p className="text-xl px-4 max-w-md">
          Vous avez dévié de la trajectoire. Nettoyez le secteur avant de faire
          demi-tour. {kills < 10 ? "0" + kills : kills} invader
          {kills > 1 && "s"} neutralisé{kills > 1 && "s"}
        </p>
      </div>

      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1.6, 0]} fov={75} />
        <Starfield speed={40} count={1000} />
        <ambientLight intensity={3} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <InvadersManager single={false} />
      </Canvas>
    </>
  );
};

export default CanvasScreen;
