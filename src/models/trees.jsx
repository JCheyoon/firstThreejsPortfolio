import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Board = () => {
  const tree = useGLTF("./billboard.glb");
  //TODO: bake shadow in blender after set the position

  return (
    <group>
      <RigidBody colliders="trimesh" type="fixed" position={[-5, 0, 0]}>
        <primitive object={tree.scene} />
      </RigidBody>
    </group>
  );
};

export default Board;
