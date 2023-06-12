import { useBox } from "@react-three/cannon";

const ColliderBox = ({ position, scale }) => {
  const [ref] = useBox(() => ({
    position: position,
    args: scale,
    material: {
      gravity: 100,
      friction: 1,
    },
  }));

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={scale} />
      <meshBasicMaterial transparent={true} opacity={0.25} />
    </mesh>
  );
};

export default ColliderBox;
