import { useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { InvaderGrey, InvaderBlue, InvaderYellow } from "./InvaderModels";

const INVADER_TYPES = [InvaderBlue, InvaderYellow, InvaderGrey];

const Invader = ({ data, onRemove }) => {
  const ref = useRef();
  const speed = 30;

  const RandomModel = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * INVADER_TYPES.length);
    return INVADER_TYPES[randomIndex];
  }, []);

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

    if (ref.current.position.z > 3) {
      onRemove();
    }
  });

  return (
    <group ref={ref} userData={{ id: data.id, type: "enemy" }}>
      <RandomModel scale={0.3} />
    </group>
  );
};

export default Invader;
