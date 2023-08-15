import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function RockSmall(props) {
  const { nodes, materials } = useGLTF("/rockSmalls.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rocksA_forest.geometry}
        material={materials["Stone.007"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/rockSmalls.gltf");
