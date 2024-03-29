import {
  RigidBody,
  CylinderCollider,
  CuboidCollider,
} from "@react-three/rapier";
import { Plane } from "@react-three/drei";
import * as React from "react";
import GroundWithTrees from "./GroundWithTrees.jsx";

const Ground = () => {
  return (
    <group>
      <RigidBody type="fixed" colliders={false} name="ground">
        <CylinderCollider args={[0.2, 11.8]} position={[0, -0.1, 0]} />
        <GroundWithTrees position={[0, 0, 0]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false} name="fog">
        <CuboidCollider position={[0, -3, 0]} args={[50, 0.1, 50]} sensor />
      </RigidBody>
    </group>
  );
};

export default Ground;
