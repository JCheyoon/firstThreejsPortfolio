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
import StarCounter from "./modal/StarCounter.jsx";
import { Physics } from "@react-three/rapier";
import Ball from "./models/Ball.jsx";
import Controls from "./models/Controls.jsx";
import Texts from "./models/Texts.jsx";
import Trees from "./models/Trees.jsx";
import Board from "./models/Board.jsx";
import Rocks from "./models/Rocks.jsx";
import Grass from "./models/Grass.jsx";
import Star from "./models/Star.jsx";
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
    minPolarAngle: Math.PI / 2.6,
    maxPolarAngle: Math.PI / 2.6,
    enableDamping: false,
  });

  return (
    <KeyboardControls map={map}>
      <Modal />
      <StarCounter />
      <Perf position="bottom-left" />
      <OrbitControls {...orbitControlsOptions} ref={controlsRef} />
      {/*lignt*/}
      <Sky />
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[0, 16, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={60}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-normalBias={0.04}
      />
      {/*models*/}
      <Physics debug>
        <Player />
        <Ball />
        <Texts />
        <Trees />
        <Rocks />
        <Board />
        <Ground />
        <Star />
      </Physics>
      <Grass />
    </KeyboardControls>
  );
};
export default Home;
