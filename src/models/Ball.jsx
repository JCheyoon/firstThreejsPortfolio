import { RigidBody } from "@react-three/rapier";
import BallModel from "./BallModel.jsx";

const Ball = () => {
  return (
    <RigidBody
      colliders="ball"
      velocity={3}
      mass={0.03}
      angularDamping={1}
      position={[1, 1, 0]}
    >
      <BallModel />
    </RigidBody>
  );
};

export default Ball;
