import { useInvardersContext } from "@/contexts/InvadersContext";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import * as THREE from "three";

const Laser = ({ data, onRemove, onEnemyHit }) => {
  const ref = useRef();
  const { scene } = useThree();
  const speed = 80;
  const { setKills } = useInvardersContext();

  useLayoutEffect(() => {
    if (!ref.current) return;
    ref.current.position.set(
      data.position[0],
      data.position[1],
      data.position[2]
    );

    const dirVector = new THREE.Vector3(
      data.direction[0],
      data.direction[1],
      data.direction[2]
    );
    const target = new THREE.Vector3()
      .copy(ref.current.position)
      .add(dirVector);
    ref.current.lookAt(target);
  }, [data]);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const moveDistance = speed * delta;
    ref.current.position.x += data.direction[0] * moveDistance;
    ref.current.position.y += data.direction[1] * moveDistance;
    ref.current.position.z += data.direction[2] * moveDistance;

    scene.children.forEach((object) => {
      if (object.userData && object.userData.type === "enemy") {
        const distance = ref.current.position.distanceTo(object.position);

        if (distance < 0.8) {
          onEnemyHit(object.userData.id);
          onRemove();
          setKills((prev) => prev + 1);
        }
      }
    });

    if (ref.current.position.length() > 150) {
      onRemove();
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.2, 0.2, 3]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default Laser;
