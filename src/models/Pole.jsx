import { RigidBody, CuboidCollider } from "@react-three/rapier";
import PoleModel from "./PoleModel.jsx";
import { useState } from "react";
import { Float, Text } from "@react-three/drei";
const Pole = () => {
  const [intersecting, setIntersection] = useState("");
  console.log(intersecting);

  return (
    <>
      <RigidBody
        colliders="trimesh"
        position={[0, 1.1, 9.5]}
        type="fixed"
        rotation={[0, Math.PI / 2, 0]}
      >
        <PoleModel />
        <CuboidCollider
          position={[0, -0.5, 0]}
          args={[0.15, 0.5, 0.7]}
          sensor
          onIntersectionEnter={(other) => {
            if (other.rigidBodyObject.name === "ball") {
              setIntersection("ball");
            }
            if (other.rigidBodyObject.name === "player") {
              setIntersection("player");
            }
          }}
          onIntersectionExit={() => setIntersection("")}
        />
      </RigidBody>
      <Float speed={3} rotationIntensity={0} floatIntensity={0.2}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          position={[0, 1.5, 9.5]}
          color="#DAECFB"
          anchorX="center"
          anchorY="middle"
          fontSize={0.3}
        >
          {intersecting === "ball" ? "GOAL!" : ""}
          {intersecting === "player" ? "GOAL?" : ""}
        </Text>
      </Float>
    </>
  );
};

export default Pole;
