import { Perf } from "r3f-perf";
import Player from "./models/Player.jsx";
import {
  useHelper,
  KeyboardControls,
  Sky,
  OrbitControls,
} from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import Ground from "./models/Ground.jsx";
import Modal from "./modal/Modal.jsx";
import { Physics } from "@react-three/rapier";
import Ball from "./models/Ball.jsx";
import Controls from "./models/Controls.jsx";
import Texts from "./models/Texts.jsx";
import Trees from "./models/Trees.jsx";
import Board from "./models/Board.jsx";
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
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[0, 10, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/*models*/}
      <Physics debug>
        <Player />
        <Ball />
        <Texts />
        <Trees />
        <Board />
        <Ground />
      </Physics>
    </KeyboardControls>
  );
};
export default Home;
