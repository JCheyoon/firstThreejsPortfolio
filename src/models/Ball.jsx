import { RigidBody, vec3 } from "@react-three/rapier";
import BallModel from "./BallModel.jsx";
import { useRef } from "react";

const Ball = () => {
  const ball = useRef();
  const resetBallPosition = () => {
    ball.current?.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
  };
  return (
    <RigidBody
      name="ball"
      ref={ball}
      colliders="ball"
      velocity={3}
      mass={0.03}
      angularDamping={1}
      position={[-5, 1, 0]}
      onIntersectionEnter={({ other }) => {
        if (other.rigidBodyObject.name === "fog") {
          resetBallPosition();
        }
      }}
    >
      <BallModel />
    </RigidBody>
  );
};

export default Ball;
