import { RigidBody } from "@react-three/rapier";
import "./Board.style.scss";
import BoardModel from "./BoardModel.jsx";
import AboutMeBtn from "./AboutMeBtn.jsx";
import { Float, Text } from "@react-three/drei";

const Board = () => {
  const portalToSite = () => {
    window.open("https://jcheyoon.com/", "_blank");
  };

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
      <AboutMeBtn
        position={[1, 1.3, -8.9]}
        rotation={[0, -Math.PI / 2, 0]}
        onClick={portalToSite}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default";
        }}
      />
      <Float speed={1} rotationIntensity={0} floatIntensity={0.1}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          position={[1.1, 1.08, -8.85]}
          anchorX="center"
          anchorY="middle"
          color="white"
          fontSize={0.14}
        >
          Click this button!
        </Text>
      </Float>
    </group>
  );
};

export default Board;
