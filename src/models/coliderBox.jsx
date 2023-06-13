import { useBox } from "@react-three/cannon";

const ColliderBox = ({ position, scale }) => {
  const [ref] = useBox(() => ({
    position: position,
    args: scale,
    type: "Static",
  }));

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={scale} />
      <meshBasicMaterial transparent={true} opacity={0.25} />
    </mesh>
  );
};

export default ColliderBox;
