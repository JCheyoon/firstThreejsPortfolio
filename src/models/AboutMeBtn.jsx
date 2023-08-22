import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function AboutMeBtn(props) {
  const { nodes, materials } = useGLTF("/aboutmeBtn.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={[0.029, 0.141, 0.348]}>
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/aboutmeBtn.glb");
