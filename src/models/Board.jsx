import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Board = () => {
  const board = useGLTF("./billboard.glb");
  //TODO: bake shadow in blender after set the position

  return (
    <group>
      <RigidBody
        colliders="trimesh"
        type="fixed"
        position={[0, 0, -8]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.8, 0.8, 0.8]}
      >
        <primitive object={board.scene} />
      </RigidBody>
    </group>
  );
};

export default Board;
