import {
  RigidBody,
  CylinderCollider,
  CuboidCollider,
} from "@react-three/rapier";

import { Cylinder } from "@react-three/drei";

const Ground = () => {
  return (
    <>
      <RigidBody type="fixed" colliders={false}>
        <mesh receiveShadow rotation={[0, 0, 0]} position={[0, -0.2, 0]}>
          <CylinderCollider args={[0.3, 10]} position={[0, -0.1, 0]} />
          <Cylinder scale={[10, 0.3, 10]}>
            <meshStandardMaterial color="greenyellow" />
          </Cylinder>
        </mesh>
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
