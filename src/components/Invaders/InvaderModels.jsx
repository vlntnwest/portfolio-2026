import React from "react";
import { useGLTF } from "@react-three/drei";

export function InvaderBlue(props) {
  const { nodes } = useGLTF("/assets/invaders/invaders-blue.gltf");

  const bodyMaterial = <meshStandardMaterial color="#0000C0" roughness={0.5} />;

  const eyeMaterial = (
    <meshStandardMaterial color="#EA0018" emissiveIntensity={0.5} />
  );

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 50, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5.geometry}
            position={[-100, 0, 0]}
          >
            {eyeMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            position={[100, 0, 0]}
          >
            {eyeMaterial}
          </mesh>
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_12.geometry}
          position={[0, -275, 0]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_11.geometry}
          position={[100, -175, 0]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_11_1.geometry}
          position={[-101, -175, -1]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_7.geometry}
          position={[100, 275, 0]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_6.geometry}
          position={[-100, 275, -1]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          position={[0, 50, 0]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_10.geometry}
          position={[400, -275, 0]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_10_1.geometry}
          position={[300, -225, 0]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_9.geometry}
          position={[-400, -275, 0]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_8.geometry}
          position={[-300, -225, 0]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          position={[-200, 50, 0]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          position={[200, 50, 0]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sommet.geometry}
          position={[0, 175, 0]}
          rotation={[0, 0, Math.PI]}
        >
          {bodyMaterial}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base.geometry}
          position={[0, -75, 0]}
          rotation={[0, 0, Math.PI]}
        >
          {bodyMaterial}
        </mesh>
      </group>
    </group>
  );
}

export function InvaderYellow(props) {
  const { nodes } = useGLTF("/assets/invaders/invaders-yellow.gltf");

  const bodyMaterial = <meshStandardMaterial color="#ffff00" roughness={0.5} />;
  const eyeMaterial = (
    <meshStandardMaterial
      color="#ffffff"
      emissive="#ffffff"
      emissiveIntensity={0.5}
    />
  );
  const blackMaterial = (
    <meshStandardMaterial color="#000000" roughness={0.8} />
  );

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[100, 50, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_11.geometry}
            position={[-200, -150, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_10.geometry}
            position={[100, -150, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_8.geometry}
            position={[600, -150, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_9.geometry}
            position={[-550, -150, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_12.geometry}
            position={[-50, -250, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_7.geometry}
            position={[350, -150, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5.geometry}
            position={[300, 50, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            position={[200, 100, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            position={[-100, 100, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            position={[-400, 100, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_6.geometry}
            position={[-50, 250, 0]}
          >
            {bodyMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            position={[-100, -50, 0]}
          >
            {bodyMaterial}
          </mesh>
        </group>

        <group position={[0, 150, 0]}>
          <group position={[-150, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_14.geometry}
              position={[0, 50, 0]}
            >
              {eyeMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_17.geometry}
              position={[50, -50, 0]}
            >
              {eyeMaterial}
            </mesh>
          </group>
          <group position={[150, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_15.geometry}
              position={[50, -50, 0]}
            >
              {eyeMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_13.geometry}
              position={[0, 50, 0]}
            >
              {eyeMaterial}
            </mesh>
          </group>
        </group>

        <group position={[-50, 100, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_17_1.geometry}
            position={[-150, 0, 0]}
          >
            {blackMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_16.geometry}
            position={[150, 0, 0]}
          >
            {blackMaterial}
          </mesh>
        </group>
      </group>
    </group>
  );
}

export function InvaderGrey(props) {
  const { nodes } = useGLTF("/assets/invaders/invaders-grey.gltf");

  const bodyMaterial = <meshStandardMaterial color="#bababa" roughness={0.5} />;

  const eyeMaterial = <meshStandardMaterial color="#000000" roughness={0.2} />;

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 0, 25]}>
          <group position={[0, 0, -25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_4.geometry}
              position={[350, -300, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_16.geometry}
              position={[-450, 150, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_15.geometry}
              position={[450, 150, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_13.geometry}
              position={[250, -50, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_20.geometry}
              position={[250, 350, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_19.geometry}
              position={[-150, 350, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_8.geometry}
              position={[-50, -50, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_3.geometry}
              position={[50, -300, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_7.geometry}
              position={[450, -350, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_6.geometry}
              position={[-450, -350, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_5.geometry}
              position={[-350, -300, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2.geometry}
              position={[-150, -300, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_14.geometry}
              position={[0, 50, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_18.geometry}
              position={[0, 250, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_17.geometry}
              position={[0, 150, 0]}
            >
              {bodyMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube.geometry}
              position={[0, -150, 0]}
            >
              {bodyMaterial}
            </mesh>
          </group>

          <group position={[0, 0, 75]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_10.geometry}
              position={[100, 0, 0]}
            >
              {eyeMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_12.geometry}
              position={[250, 50, 50]}
            >
              {eyeMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_11.geometry}
              position={[-50, 50, 50]}
            >
              {eyeMaterial}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_9.geometry}
              position={[-200, 0, 0]}
            >
              {eyeMaterial}
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/invaders/invaders-blue.gltf");
useGLTF.preload("/assets/invaders/invaders-yellow.gltf");
useGLTF.preload("/assets/invaders/invaders-grey.gltf");
