import { Html } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import "./Board.style.scss";
import BoardModel from "./BoardModel.jsx";

const Board = () => {
  return (
    <group>
      <RigidBody
        colliders="trimesh"
        type="fixed"
        position={[0, 0, -9]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.8, 0.8, 0.8]}
      >
        <BoardModel />
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.4}
          scale={[1.3, 1.05, 1.3]}
          position={[0, 2.05, 0]}
          rotation-y={Math.PI / 2}
        >
          <iframe src="https://jcheyoon.com/" />
        </Html>
      </RigidBody>
    </group>
  );
};

export default Board;
