import { RigidBody } from "@react-three/rapier";
import { RockMedium } from "./RockMedium.jsx";
import RockSmall from "./RockSmall.jsx";

const Rocks = () => {
  const rocksM = [
    { position: [3.2, 0, -7.5], args: [0.2, 0.2, 0.2] },
    { position: [3.2, 0, -6.8], args: [0.1, 0.1, 0.2] },
    { position: [-2.5, 0, -8.8], args: [0.4, 0.35, 0.4] },
    { position: [-3, 0, -8], args: [0.2, 0.25, 0.2] },
    { position: [-8.3, 0, -4], args: [0.1, 0.2, 0.2] },
    { position: [5.3, 0, -1], args: [0.25, 0.2, 0.5] },
  ];
  const rocksS = [
    { position: [2.5, 0.3, -7.5], args: [0.4, 0.5, 0.4] },
    { position: [-3.5, 0.3, -7.5], args: [0.5, 0.6, 0.5] },
    { position: [-8.3, 0.3, -3.5], args: [0.3, 0.5, 0.2] },
    { position: [4.8, 0.3, -1.2], args: [0.6, 0.5, 0.7] },
    { position: [-6.3, 0.3, 6], args: [0.8, 0.5, 0.9] },
  ];
  return (
    <>
      {rocksM.map((item, index) => (
        <RigidBody
          colliders="cuboid"
          type="fixed"
          position={item.position}
          args={item.args}
          key={index}
        >
          <RockMedium scale={item.args} position={[0, 0, 0]} />
        </RigidBody>
      ))}
      {rocksS.map((item, index) => (
        <RigidBody
          colliders="hull"
          type="fixed"
          position={item.position}
          args={item.args}
          key={index}
        >
          <RockSmall scale={item.args} position={[0, -0.2, 0]} />
        </RigidBody>
      ))}
    </>
  );
};

export default Rocks;
