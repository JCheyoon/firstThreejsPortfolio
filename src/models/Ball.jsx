import { useSphere } from "@react-three/cannon";

const Ball = () => {
  const [sphereRef] = useSphere(() => ({
    args: [0.2, 0.3, 0.3],
    mass: 100,
    position: [-2, 1, 0],
  }));

  return (
    <mesh receiveShadow ref={sphereRef}>
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Ball;
