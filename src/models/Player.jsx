import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import DirectionOffset from "./directionOffset.jsx";
import { useEffect, useRef, useState, useMemo } from "react";
import { useInput } from "../hooks/useInput.jsx";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { walkingSound } from "../audio/audio.jsx";
import { useBox } from "@react-three/cannon";
import KinematicBox from "./test.jsx";

let walkDirection = new THREE.Vector3();
let rotationAngle = new THREE.Vector3(0, 1, 0);
let rotateQuaternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();
const Player = () => {
  const { forward, backward, left, right, shift } = useInput();
  const myPlayer = useGLTF("./myplayer.glb");
  const { actions } = useAnimations(myPlayer.animations, myPlayer.scene);
  const playerBodyArgs = [0.6, 1.5, 0.6];

  const [playerBody, playerApi] = useBox(() => ({
    type: "Kinematic ",
    args: playerBodyArgs,
  }));

  myPlayer.scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.castShadow = true;
    }
  });
  const currentAction = useRef("");
  const controlsRef = useRef();

  const [orbitControlsOptions, setControlsOptions] = useState({
    enablePan: false,
    enableZoom: false,
    enableRotate: true,
    minAzimuthAngle: -Math.PI / 2,
    maxAzimuthAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 3.3,
    maxPolarAngle: Math.PI / 2.3,
    enableDamping: false,
  });

  const camera = useThree((state) => state.camera);

  const updateCamTarget = () => {
    cameraTarget.x = myPlayer.scene.position.x;
    cameraTarget.z = myPlayer.scene.position.z;
    camera.position.z = myPlayer.scene.position.z + 16;

    camera.lookAt(myPlayer.scene.position);
    if (controlsRef.current) {
      controlsRef.current.target = cameraTarget;
    }
  };

  useEffect(() => {
    myPlayer.scene.position.y = 2;
    actions.landing.play().fadeOut(2);
  }, []);

  useEffect(() => {
    let action;
    if (forward || backward || left || right) {
      action = "walking";
    } else {
      action = "idle";
    }

    if (currentAction.current !== action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, shift]);

  useFrame((state, delta) => {
    myPlayer.scene.position.y > 0 ? (myPlayer.scene.position.y -= 0.1) : null;

    if (currentAction.current === "walking") {
      //calculate towards cam
      let angleYCamDirection = Math.atan2(
        camera.position.x - myPlayer.scene.position.x,
        camera.position.z - myPlayer.scene.position.z
      );

      //diagonal movement angle offset
      let newDirectionOffset = DirectionOffset({
        forward,
        backward,
        left,
        right,
      });

      //rotate model
      rotateQuaternion.setFromAxisAngle(
        rotationAngle,
        angleYCamDirection + newDirectionOffset
      );
      myPlayer.scene.quaternion.rotateTowards(rotateQuaternion, 0.2);

      //calculate direction
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotationAngle, newDirectionOffset);

      //move model
      const moveX = walkDirection.x * delta;
      const moveZ = walkDirection.z * delta;
      myPlayer.scene.position.x += moveX;
      myPlayer.scene.position.z += moveZ;

      //move player body
      playerApi.position.set(
        myPlayer.scene.position.x,
        myPlayer.scene.position.y + 0.9,
        myPlayer.scene.position.z
      );
      //update cam
      updateCamTarget();
      walkingSound.play();

      //disable mouse rotation while walking
      setControlsOptions((value) => ({ ...value, enableRotate: false }));
    } else {
      setControlsOptions((value) => ({ ...value, enableRotate: true }));
    }
  });

  return (
    <>
      {useMemo(
        () => (
          <OrbitControls {...orbitControlsOptions} ref={controlsRef} />
        ),
        [orbitControlsOptions]
      )}

      <mesh ref={playerBody}>
        <sphereGeometry args={playerBodyArgs} />
        <meshStandardMaterial visible={false} />
      </mesh>
      <primitive object={myPlayer.scene} />
      <KinematicBox />
    </>
  );
};

export default Player;
