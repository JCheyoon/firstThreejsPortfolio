import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Trees = () => {
  const trees = [
    { position: [-2, 0, 8], args: [0.5, 1, 0.4] },
    { position: [-5.5, 0, 1.5], args: [0.5, 2, 0.5] },
    { position: [4, 0, -2], args: [0.6, 1, 0.2] },
    { position: [-2.3, 0, -5], args: [0.4, 1, 0.6] },
    { position: [2, 0, 5], args: [0.5, 1, 0.4] },
    { position: [5, 0, -7], args: [0.6, 2, 0.1] },
    { position: [7, 0, 3], args: [0.4, 1, 0.6] },
    { position: [-7, 0, 3], args: [0.5, 2, 0.5] },
    { position: [-5, 0, -3], args: [0.4, 1, 0.5] },
  ];
  return (
    <>
      {trees.map((item, index) => (
        <RigidBody
          colliders="trimesh"
          type="fixed"
          position={item.position}
          key={index}
        >
          <mesh castShadow>
            <cylinderGeometry args={[0.1, 0.1, 1.5, 8]} />
            <meshStandardMaterial color="#5C4B45" />
          </mesh>
          <mesh castShadow position={[0, 1, 0]}>
            <dodecahedronGeometry args={item.args} />
            <meshStandardMaterial color="#7DB337" />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
};

export default Trees;
