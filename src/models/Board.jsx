import { useGLTF } from "@react-three/drei";
import ColliderBox from "./coliderBox.jsx";

const Board = () => {
  const board = useGLTF("./billboard.glb");

  return (
    <>
      <primitive object={board.scene} position={[-3, 0, 0]} />
      <ColliderBox position={[-3, 1.5, 0]} scale={[0.5, 3, 3.4]} />
    </>
  );
};

export default Board;
