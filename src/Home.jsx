import { Perf } from "r3f-perf";
import Player from "./models/Player.jsx";
import {
  useHelper,
  KeyboardControls,
  Environment,
  Sky,
  OrbitControls,
} from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import Ground from "./models/Ground.jsx";
import Modal from "./modal/Modal.jsx";
import { Physics, Debug } from "@react-three/rapier";
import Ball from "./models/Ball.jsx";
import Board from "./models/Board.jsx";
import Controls from "./models/Controls.jsx";
import Texts from "./models/Texts.jsx";
const Home = () => {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);
  const controlsRef = useRef();

  const [orbitControlsOptions, setControlsOptions] = useState({
    enablePan: false,
    enableZoom: false,
    enableRotate: true,
    minPolarAngle: Math.PI / 3.3,
    maxPolarAngle: Math.PI / 2.3,
    enableDamping: false,
  });

  return (
    <KeyboardControls map={map}>
      <Modal />
      <Perf position="top-left" />
      <OrbitControls {...orbitControlsOptions} ref={controlsRef} />
      {/*lignt*/}
      <Sky />
      {/*<Environment preset="park" />*/}
      {/*<Environment files="/public/sunset.hdr" background />*/}
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

      {/*models*/}
      <Physics>
        <Debug />
        <Player />
        <Ball />
        <Board />
        <Texts />
        <Ground />
      </Physics>
    </KeyboardControls>
  );
};
export default Home;
