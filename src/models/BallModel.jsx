import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BallModel(props) {
  const { nodes, materials } = useGLTF("ball.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Soccer_Ball_Low_Soccer_Ball_0.geometry}
            material={materials.Soccer_Ball}
            position={[0, 25, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={50}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("ball.glb");
