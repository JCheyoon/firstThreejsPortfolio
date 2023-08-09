import {
  RigidBody,
  CylinderCollider,
  CuboidCollider,
} from "@react-three/rapier";
import { Cylinder, Plane } from "@react-three/drei";
import * as React from "react";

const Ground = () => {
  // const ground = useGLTF("./ground.glb");

  return (
    <group>
      <RigidBody type="fixed" colliders={false} name="ground">
        <CylinderCollider args={[0.3, 10]} position={[0, -0.1, 0]} />
        <Cylinder scale={[10, 0.3, 10]} receiveShadow>
          <meshStandardMaterial color="lightGreen" />
        </Cylinder>
      </RigidBody>
      <RigidBody type="fixed" colliders={false} name="fog">
        <Plane
          args={[100, 100]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
        />
        <meshStandardMaterial color="white" />
        <CuboidCollider position={[0, -3, 0]} args={[50, 0.1, 50]} sensor />
      </RigidBody>
    </group>
  );
};

export default Ground;
