import { RigidBody, vec3 } from "@react-three/rapier";
import BallModel from "./BallModel.jsx";
import { useRef } from "react";
import { ballSound } from "../audio/audio.jsx";
import { useContextData } from "../hooks/useContext.jsx";

const Ball = () => {
  const { isPlaying } = useContextData();
  const ball = useRef();
  const playSound = () => {
    if (isPlaying) {
      ballSound.play();
    }
  };
  const resetBallPosition = () => {
    ball.current?.setTranslation(vec3({ x: -5, y: 0, z: 0 }));
  };
  return (
    <RigidBody
      name="ball"
      ref={ball}
      colliders="ball"
      velocity={4}
      mass={0.03}
      angularDamping={1}
      position={[-5, 1, 0]}
      onCollisionEnter={playSound}
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
