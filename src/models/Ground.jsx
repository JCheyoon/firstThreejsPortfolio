import { usePlane } from "@react-three/cannon";

const Ground = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="greenyellow" />
    </mesh>
  );
};

export default Ground;
