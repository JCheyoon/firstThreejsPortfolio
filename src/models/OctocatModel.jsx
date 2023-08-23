import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function OctocatModel(props) {
  const { nodes, materials } = useGLTF("octocat.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.face_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.face_2.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.face_3.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.headblack.geometry}
        material={materials["Material.009"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.legs.geometry}
        material={materials["Material.009"]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("octocat.glb");
