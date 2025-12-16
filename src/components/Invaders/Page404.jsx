import CanvasScreen from "@/components/Invaders/CanvasScreen";
import Pointer from "@/components/Invaders/Pointer";
import InvadersContext from "@/contexts/InvadersContext";
import Link from "next/link";
import React from "react";

const Page404 = () => {
  return (
    <InvadersContext>
      <section className="relative h-[calc(100vh-var(--header-height))]">
        <CanvasScreen />
        <Link
          href="/"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 background-dark-gradient rounded-full p-4 text-white font-medium whitespace-nowrap"
        >
          Retour à l'accueil
        </Link>
        <Pointer />
      </section>
    </InvadersContext>
  );
};

export default Page404;
