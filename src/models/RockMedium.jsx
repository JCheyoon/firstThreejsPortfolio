import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RockMedium(props) {
  const { nodes, materials } = useGLTF("/rock.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.menhir_mini.geometry}
        material={materials["color_main.001"]}
      />
    </group>
  );
}

useGLTF.preload("/rock.gltf");
