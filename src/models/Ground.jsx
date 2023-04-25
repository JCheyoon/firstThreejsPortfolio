const Ground = () => {
  return (
    <mesh receiveShadow rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="greenyellow" />
    </mesh>
  );
};

export default Ground;
