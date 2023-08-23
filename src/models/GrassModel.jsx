import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function GrassModel(props) {
  const { nodes, materials } = useGLTF("grass.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.plant.geometry}
        material={materials["leaves.005"]}
        position={[0.637, 0, -6.41]}
        scale={0.69}
      />
    </group>
  );
}

useGLTF.preload("grass.gltf");
