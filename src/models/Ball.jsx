import { RigidBody } from "@react-three/rapier";

const Ball = () => {
  return (
    <RigidBody colliders="ball" velocity={3} mass={0.03} angularDamping={1}>
      <mesh castShadow position={[2, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );
};

export default Ball;
