import { Perf } from "r3f-perf";
import Player from "./models/Player.jsx";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Ground from "./models/Ground.jsx";
import Modal from "./modal/Modal.jsx";

const Home = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <Modal />
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
      <Ground />
    </>
  );
};
export default Home;
