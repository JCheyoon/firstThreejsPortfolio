import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function GroundWithTrees(props) {
  const { nodes, materials } = useGLTF("ground.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.591}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce"].geometry}
        material={materials.color_main}
        position={[-5.332, 0.157, -3.085]}
        scale={0.059}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce004"].geometry}
        material={materials.color_main}
        position={[-4.207, 0.157, -7.344]}
        scale={0.106}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce001"].geometry}
        material={materials["color_main.001"]}
        position={[-6.404, 0.157, -0.113]}
        scale={0.114}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce002"].geometry}
        material={materials["color_main.001"]}
        position={[-6.404, 0.157, -0.113]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce003"].geometry}
        material={materials["color_main.001"]}
        position={[2.78, 0.157, -6.786]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce005"].geometry}
        material={materials["color_main.002"]}
        position={[-8.422, 0.157, 6.932]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce006"].geometry}
        material={materials["color_main.003"]}
        position={[-4.085, 0.157, 9.848]}
        scale={0.07}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce007"].geometry}
        material={materials["color_main.004"]}
        position={[4.537, 0.157, 9.328]}
        scale={0.058}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce008"].geometry}
        material={materials["color_main.005"]}
        position={[8.243, 0.157, 4.34]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce009"].geometry}
        material={materials["color_main.006"]}
        position={[6.809, 0.157, -2.261]}
        scale={0.065}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce010"].geometry}
        material={materials["color_main.007"]}
        position={[-9.595, 0.157, -1.802]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce011"].geometry}
        material={materials["color_main.008"]}
        position={[6.247, 0.157, 2.275]}
        scale={0.093}
      />
    </group>
  );
}

useGLTF.preload("ground.glb");
