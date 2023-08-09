import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BoardModel(props) {
  const { nodes, materials } = useGLTF("/billboard.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.102, 1.514]} scale={-0.087}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/billboard.glb");
