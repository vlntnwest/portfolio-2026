"use client";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import Laser from "./Laser";
import * as THREE from "three";

const LasersManager = ({ onEnemyHit }) => {
  const { camera, raycaster, pointer, size } = useThree();
  const [lasers, setLasers] = useState([]);

  const isShootingRef = useRef(false);
  const isTouchRef = useRef(false);
  const cooldownRef = useRef(0);
  const FIRE_RATE = 0.1;

  const fireLaser = () => {
    let rayPointer = pointer.clone();

    if (isTouchRef.current) {
      const offsetNDC = (100 / size.height) * 2;

      rayPointer.y += offsetNDC;
    }

    raycaster.setFromCamera(rayPointer, camera);
    const laserDir = raycaster.ray.direction.clone();

    const startPos = camera.position
      .clone()
      .add(new THREE.Vector3(0, -0.5, -0.5));

    const newLaser = {
      id: Date.now() + Math.random(),
      position: [startPos.x, startPos.y, startPos.z],
      direction: [laserDir.x, laserDir.y, laserDir.z],
    };

    setLasers((prev) => [...prev, newLaser]);
  };

  useEffect(() => {
    const handleStart = (e) => {
      isShootingRef.current = true;
      isTouchRef.current = e.pointerType === "touch";
    };

    const handleStop = () => {
      isShootingRef.current = false;
    };

    window.addEventListener("pointerdown", handleStart);
    window.addEventListener("pointerup", handleStop);
    window.addEventListener("pointercancel", handleStop);

    return () => {
      window.removeEventListener("pointerdown", handleStart);
      window.removeEventListener("pointerup", handleStop);
      window.removeEventListener("pointercancel", handleStop);
    };
  }, []);

  useFrame((state, delta) => {
    if (cooldownRef.current > 0) {
      cooldownRef.current -= delta;
    }

    if (isShootingRef.current && cooldownRef.current <= 0) {
      fireLaser();
      cooldownRef.current = FIRE_RATE;
    }
  });

  const removeLaser = (id) => {
    setLasers((prev) => prev.filter((l) => l.id !== id));
  };

  return lasers.map((l) => (
    <Laser
      key={l.id}
      data={l}
      onRemove={() => removeLaser(l.id)}
      onEnemyHit={onEnemyHit}
    />
  ));
};

export default LasersManager;
