import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Starfield = ({ count = 4000, speed = 40, depth = 300, radius = 50 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 5 + Math.random() * radius;

      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;

      const z = -Math.random() * depth;

      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count, depth, radius]);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    const positions = mesh.current.geometry.attributes.position.array;

    for (let i = 2; i < positions.length; i += 3) {
      positions[i] += speed * delta;

      if (positions[i] > 5) {
        positions[i] = -depth + Math.random() * -50;
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        color="black"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export default Starfield;
