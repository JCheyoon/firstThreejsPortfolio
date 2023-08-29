import Player from "./models/Player.jsx";
import {
  useHelper,
  KeyboardControls,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
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
import OctoCat from "./models/OctoCat.jsx";
import Pole from "./models/Pole.jsx";
import AudioButton from "./audio/AudioButton.jsx";
import { bgSound } from "./audio/audio.jsx";
import { useContextData } from "./hooks/useContext.jsx";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const { isPlaying } = useContextData();

  useEffect(() => {
    if (isPlaying) {
      bgSound.play();
    } else {
      bgSound.pause();
    }
  }, [isPlaying]);

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
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 840px)" });
  return (
    <KeyboardControls map={map}>
      {/*Modal*/}
      {isTabletOrMobile ? null : <Modal />}

      <StarCounter />
      <AudioButton />
      {/*Controls*/}
      <OrbitControls {...orbitControlsOptions} ref={controlsRef} />
      {/*lignt*/}
      <Environment background={false} files={"envmap.hdr"} />
      <directionalLight
        castShadow
        position={[0, 16, 5]}
        intensity={0.8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={60}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-normalBias={0.03}
      />
      {/*models*/}
      <Physics>
        <Player />
        <Ball />
        <Texts />
        <Trees />
        <Rocks />
        <Board />
        <Ground />
        <Star />
        <OctoCat />
        <Pole />
      </Physics>
      <Grass />
    </KeyboardControls>
  );
};
export default Home;
