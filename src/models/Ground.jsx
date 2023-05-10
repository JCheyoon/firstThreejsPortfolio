import { RigidBody } from "@react-three/rapier";

const Ground = () => {
  return (
    <RigidBody type="fixed" restitution={0.2} friction={1}>
      <mesh receiveShadow rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </RigidBody>
  );
};

export default Ground;
