import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function PoleModel(props) {
  const { nodes, materials } = useGLTF("pole.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={[0.1, 0.1, 0.7]}
      />
    </group>
  );
}

useGLTF.preload("pole.glb");
