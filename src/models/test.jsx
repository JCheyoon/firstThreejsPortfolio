import { useBox } from "@react-three/cannon";

function KinematicBox({ position, size }) {
  const [ref] = useBox(() => ({
    type: "Kinematic", // Set the body type to 'Kinematic'
    position: [2, 0, 0],
    args: [1, 1, 1],
  }));

  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}
export default KinematicBox;
