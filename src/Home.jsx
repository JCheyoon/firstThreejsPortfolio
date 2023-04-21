import { Perf } from "r3f-perf";
import Player from "./models/Player.jsx";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Home = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <Perf position="top-left" />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
        ref={directionalLight}
      />
      <ambientLight intensity={0.5} />

      <Player />

      <mesh receiveShadow rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
};
export default Home;
