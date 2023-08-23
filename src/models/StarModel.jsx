import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function StarModel(props) {
  const { nodes, materials } = useGLTF("star.gltf");
  const starMesh = useRef();
  useFrame((state, delta) => {
    starMesh.current.rotation.z += 0.1; // Adjust rotation speed as needed
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.star.geometry}
        material={materials["Yellow.030"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.4}
        ref={starMesh}
      />
    </group>
  );
}

useGLTF.preload("star.gltf");
