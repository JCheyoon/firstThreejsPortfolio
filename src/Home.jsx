import { Perf } from "r3f-perf";
import Player from "./models/Player.jsx";

const Home = () => {
  return (
    <>
      <Perf position="top-left" />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />

      <Player />

      <mesh receiveShadow rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};
export default Home;
