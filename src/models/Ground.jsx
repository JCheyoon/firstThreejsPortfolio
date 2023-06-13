import { RigidBody, CylinderCollider } from "@react-three/rapier";

import { Cylinder } from "@react-three/drei";

const Ground = () => {
  return (
    <>
      <RigidBody type="fixed" colliders={false}>
        <mesh receiveShadow rotation={[0, 0, 0]} position={[0, -0.2, 0]}>
          <CylinderCollider args={[0.3, 10]} position={[0, -0.1, 0]} />
          <Cylinder scale={[10, 0.3, 10]}>
            <meshStandardMaterial color="greenyellow" />
          </Cylinder>
        </mesh>
      </RigidBody>
    </>
  );
};

export default Ground;
