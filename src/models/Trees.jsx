import { RigidBody } from "@react-three/rapier";

const Trees = () => {
  const trees = [
    { position: [-4.2, 0.7, -7.5], args: [0.4, 2, 0.4] },
    { position: [2.8, 0.7, -6.8], args: [0.3, 1, 0.3] },
    { position: [-5.3, 0.7, -3], args: [0.3, 1, 0.2] },
    { position: [-6.4, 0.7, -0.2], args: [0.3, 3, 0.3] },
    { position: [-9.6, 0.7, -1.9], args: [0.3, 2, 0.3] },
    { position: [-8.45, 0.7, 6.8], args: [0.3, 2, 0.3] },
    { position: [-4.1, 0.7, 9.75], args: [0.3, 2, 0.3] },
    { position: [4.5, 0.7, 9.2], args: [0.3, 2, 0.3] },
    { position: [8.2, 0.7, 4.2], args: [0.3, 2, 0.3] },
    { position: [6.25, 0.7, 2.1], args: [0.3, 2, 0.3] },
    { position: [6.8, 0.7, -2.4], args: [0.3, 2, 0.3] },
  ];
  return (
    <>
      {trees.map((item, index) => (
        <RigidBody
          colliders="cuboid"
          type="fixed"
          position={item.position}
          args={item.args}
          key={index}
        >
          <mesh>
            <boxGeometry args={item.args} />
            <meshBasicMaterial transparent={true} opacity={0} />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
};

export default Trees;
