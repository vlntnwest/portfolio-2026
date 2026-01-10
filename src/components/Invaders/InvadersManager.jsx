"use client";
import { useRef, useState } from "react";
import Invader from "./Invader";
import { useFrame } from "@react-three/fiber";
import LasersManager from "./LasersManager";

const InvadersManager = ({ spawnIntervalMs = 1000, single = true }) => {
  const [invaders, setInvaders] = useState([]);
  const idRef = useRef(0);
  const timerRef = useRef(null);

  function makeInvader(radius) {
    const id = idRef.current++;
    const start = { x: 0, y: 0, z: -50 };
    const angle = Math.random() * Math.PI * 2;
    const target = {
      x: Math.cos(angle) * radius,
      y: Math.abs(Math.sin(angle) * radius),
      z: 10,
    };
    const dx = target.x - start.x;
    const dy = target.y - start.y;
    const dz = target.z - start.z;
    const len = Math.hypot(dx, dy, dz) || 1;

    const dir = { x: dx / len, y: dy / len, z: dz / len };
    return { id, start, target, dir };
  }

  useFrame((state, delta) => {
    if (!timerRef.current) {
      timerRef.current = 0;
    }
    timerRef.current += delta;

    if (timerRef.current >= spawnIntervalMs / 1000) {
      timerRef.current = 0;
      setInvaders((prev) => {
        if (single && prev.length > 0) return prev;
        const radius = 10;
        const invader = makeInvader(radius);
        return [...prev, invader];
      });
    }
  });

  function removeInvader(id) {
    setInvaders((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <>
      <LasersManager onEnemyHit={removeInvader} />
      {invaders.map((e) => (
        <Invader key={e.id} data={e} onRemove={() => removeInvader(e.id)} />
      ))}
    </>
  );
};

export default InvadersManager;
