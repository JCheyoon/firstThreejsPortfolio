import { Perf } from "r3f-perf";
import Player from "./models/Player.jsx";
import { useHelper, Sky } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Ground from "./models/Ground.jsx";
import Modal from "./modal/Modal.jsx";
import { Physics, Debug } from "@react-three/cannon";
import Ball from "./models/Ball.jsx";
import Board from "./models/Board.jsx";

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
      <Sky />
      <Physics broadphase="SAP">
        <Debug color="black" scale={1.1}>
          <Player />
          <Ball />
          <Ground />
          <Board />
        </Debug>
      </Physics>
    </>
  );
};
export default Home;
