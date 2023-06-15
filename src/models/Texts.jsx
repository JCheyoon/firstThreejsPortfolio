import { Text3D } from "@react-three/drei";
import { useMatcapTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const cheyoon = [
  { character: "C", position: [0, 0, -3] },
  { character: "H", position: [0.5, 0, -3] },
  { character: "E", position: [1, 0, -3] },
  { character: "Y", position: [1.5, 0, -3] },
  { character: "O", position: [2, 0, -3] },
  { character: "O", position: [2.5, 0, -3] },
  { character: "N", position: [3, 0, -3] },
];

const Texts = () => {
  const [matcapTexture] = useMatcapTexture("B6B8B1_994A24_315C81_927963", 256);
  return (
    <>
      {cheyoon.map((item, index) => (
        <RigidBody
          colliders="cuboid"
          type="static"
          position={item.position}
          key={index}
          mass={0.01}
        >
          <Text3D
            font={"./Open San.json"}
            size={0.5}
            bevelThickness={0.02}
            bevelSize={0.02}
            castShadow={true}
          >
            {item.character}
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </RigidBody>
      ))}
    </>
  );
};

export default Texts;
