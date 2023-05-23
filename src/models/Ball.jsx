import { RigidBody } from "@react-three/rapier";

const Ball = () => {
  return (
    <RigidBody colliders="ball" friction={2} position={[3, 1, 0]}>
      <mesh receiveShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );
};

export default Ball;
