import { Html } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import "./Board.style.scss";
import BoardModel from "./BoardModel.jsx";

const Board = () => {
  //TODO change iframe to picture and make click event
  return (
    <group>
      <RigidBody
        colliders="trimesh"
        type="fixed"
        position={[0, 1, -9]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.8, 0.8, 0.8]}
      >
        <BoardModel />
      </RigidBody>
    </group>
  );
};

export default Board;
