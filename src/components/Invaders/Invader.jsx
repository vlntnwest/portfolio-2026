import { useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";

const Invader = ({ data, onRemove }) => {
  const ref = useRef();
  const speed = 25;

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.position.set(data.start.x, data.start.y, data.start.z);
      ref.current.lookAt(0, 0, 0);
    }
  }, [data]);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.position.x += data.dir.x * speed * delta;
    ref.current.position.y += data.dir.y * speed * delta;
    ref.current.position.z += data.dir.z * speed * delta;

    if (ref.current.position.z > 2) {
      onRemove();
    }
  });

  return (
    <mesh ref={ref} userData={{ id: data.id, type: "enemy" }}>
      <boxGeometry args={[1.6, 1.6, 0.2]} />
      <meshStandardMaterial color="#ff3366" />
    </mesh>
  );
};

export default Invader;
