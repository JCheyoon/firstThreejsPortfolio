import { RigidBody } from "@react-three/rapier";
import OctocatModel from "./OctocatModel.jsx";
import { Float, Text } from "@react-three/drei";

const OctoCat = () => {
  const portalToGit = () => {
    window.open("https://github.com/JCheyoon/firstThreejsPortfolio", "_blank");
  };
  return (
    <>
      <RigidBody colliders="cuboid" position={[6.5, 0.6, 6]} type="fixed">
        <OctocatModel
          onClick={portalToGit}
          onPointerEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            document.body.style.cursor = "default";
          }}
        />
      </RigidBody>
      <Float speed={3} rotationIntensity={0.2} floatIntensity={0.2}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          position={[6.5, 1.9, 6]}
          anchorX="center"
          anchorY="middle"
          fontSize={0.3}
        >
          Click and{"\n"}Check my
        </Text>
        <Text
          font="./bangers-v20-latin-regular.woff"
          position={[7.3, 1.75, 6]}
          anchorX="center"
          anchorY="middle"
          fontSize={0.3}
          color="yellow"
        >
          CODE
        </Text>
      </Float>
    </>
  );
};

export default OctoCat;
