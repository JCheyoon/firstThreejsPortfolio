import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import DirectionOffset from "./directionOffset.jsx";
import { useEffect, useRef, useState, useMemo } from "react";
import { useInput } from "../hooks/useInput.jsx";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { walkingSound } from "../audio/audio.jsx";

let walkDirection = new THREE.Vector3();
let rotationAngle = new THREE.Vector3(0, 1, 0);
let rotateQuaternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();
const Player = () => {
  const { forward, backward, left, right, shift } = useInput();
  const myPlayer = useGLTF("./myplayer.glb");
  const { actions } = useAnimations(myPlayer.animations, myPlayer.scene);

  myPlayer.scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.castShadow = true;
    }
  });
  const currentAction = useRef("");
  const controlsRef = useRef();

  const [orbitControlsOptions] = useState({
    enablePan: false,
    enableZoom: false,
    minAzimuthAngle: -Math.PI,
    maxAzimuthAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 3.3,
    maxPolarAngle: Math.PI / 3.3,
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

      //move model&cam
      const moveX = walkDirection.x * delta * 2;
      const moveZ = walkDirection.z * delta * 2;
      myPlayer.scene.position.x += moveX;
      myPlayer.scene.position.z += moveZ;

      //update cam
      updateCamTarget();
      walkingSound.play();
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
      <primitive object={myPlayer.scene} />
    </>
  );
};

export default Player;
