import {
  RigidBody,
  CylinderCollider,
  CuboidCollider,
} from "@react-three/rapier";

import { Cylinder, useGLTF } from "@react-three/drei";

const Ground = () => {
  const ground = useGLTF("./ground.glb");
  //TODO set tree and bake in the blender, fix light, material
  return (
    <>
      <RigidBody type="fixed" colliders={false}>
        <CylinderCollider args={[0.3, 10]} position={[0, -0.1, 0]} />
        {/*<Cylinder scale={[10, 0.3, 10]} receiveShadow>*/}
        {/*  <meshStandardMaterial color="greenyellow" />*/}
        {/*</Cylinder>*/}
        <primitive object={ground.scene} />
      </RigidBody>
      <RigidBody colliders={false} type="fixed" name="void">
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <CuboidCollider position={[0, -3.5, 0]} args={[50, 0.1, 50]} sensor />
      </RigidBody>
    </>
  );
};

export default Ground;
