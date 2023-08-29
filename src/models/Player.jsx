import {
  Html,
  useAnimations,
  useGLTF,
  useKeyboardControls,
} from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { walkingSound } from "../audio/audio.jsx";
import { BallCollider, RigidBody, vec3 } from "@react-three/rapier";
import Controls from "./Controls.jsx";
import { useContextData } from "../hooks/useContext.jsx";
import { useMediaQuery } from "react-responsive";
import "./Player.style.scss";

const JUMP_FORCE = 0.5;
const MOVEMENT_SPEED = 0.05;
const MAX_VELOCITY = 1.5;

const Player = () => {
  const jump = useKeyboardControls((state) => state[Controls.jump]);
  const left = useKeyboardControls((state) => state[Controls.left]);
  const right = useKeyboardControls((state) => state[Controls.right]);
  const backward = useKeyboardControls((state) => state[Controls.back]);
  const forward = useKeyboardControls((state) => state[Controls.forward]);
  const myPlayer = useGLTF("./myplayer.glb");
  const { actions } = useAnimations(myPlayer.animations, myPlayer.scene);
  const playerBody = useRef();
  const { removeStar, isPlaying } = useContextData();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 840px)" });
  const isOnFloor = useRef(true);
  const currentAction = useRef("");
  const character = useRef();
  const [mobileForward, setMobileForward] = useState(false);
  const [mobileBackward, setMobileBackward] = useState(false);
  const [mobileLeft, setMobileLeft] = useState(false);
  const [mobileRight, setMobileRight] = useState(false);
  const [mobileJump, setMobileJump] = useState(false);

  const handleMobileForward = () => {
    setMobileForward(true);
    setMobileBackward(false);
    setMobileLeft(false);
    setMobileRight(false);
  };

  const handleMobileBackward = () => {
    setMobileBackward(true);
    setMobileForward(false);
    setMobileLeft(false);
    setMobileRight(false);
  };

  const handleMobileLeft = () => {
    setMobileLeft(true);
    setMobileBackward(false);
    setMobileForward(false);
    setMobileRight(false);
  };

  const handleMobileRight = () => {
    setMobileRight(true);
    setMobileLeft(false);
    setMobileBackward(false);
    setMobileForward(false);
  };
  const handleMobileMove = () => {
    setMobileForward(false);
    setMobileBackward(false);
    setMobileLeft(false);
    setMobileRight(false);
  };

  const handleMobileJump = () => {
    setMobileJump(true);
    setTimeout(() => {
      setMobileJump(false);
    }, 800);
  };

  myPlayer.scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.castShadow = true;
    }
  });

  useEffect(() => {
    let action;
    if (
      forward ||
      backward ||
      left ||
      right ||
      mobileForward ||
      mobileBackward ||
      mobileLeft ||
      mobileRight
    ) {
      action = "walking";
    } else if (
      (jump && isOnFloor.current) ||
      (mobileJump && isOnFloor.current)
    ) {
      action = "landing";
    } else {
      action = "idle";
    }
    if (currentAction.current !== action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];

      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
      Array.from(document.getElementsByTagName("button")).forEach((el) =>
        el?.blur()
      );
    }
  }, [
    forward,
    backward,
    left,
    right,
    jump,
    mobileForward,
    mobileBackward,
    mobileLeft,
    mobileRight,
    mobileJump,
  ]);

  useFrame((state) => {
    const impulse = { x: 0, y: 0, z: 0 };
    if ((jump && isOnFloor.current) || (mobileJump && isOnFloor.current)) {
      impulse.y += JUMP_FORCE;
      isOnFloor.current = false;
      setTimeout(() => {
        isOnFloor.current = true;
      }, 900);
    }

    const linvel = playerBody.current?.linvel();
    let changeRotation = false;
    if (
      (right && linvel.x < MAX_VELOCITY) ||
      (mobileRight && linvel.x < MAX_VELOCITY)
    ) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
      playWalkingSound();
    }
    if (
      (left && linvel.x > -MAX_VELOCITY) ||
      (mobileLeft && linvel.x > -MAX_VELOCITY)
    ) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
      playWalkingSound();
    }
    if (
      (backward && linvel.z < MAX_VELOCITY) ||
      (mobileBackward && linvel.z < MAX_VELOCITY)
    ) {
      impulse.z += MOVEMENT_SPEED;
      changeRotation = true;
      playWalkingSound();
    }
    if (
      (forward && linvel.z > -MAX_VELOCITY) ||
      (mobileForward && linvel.z > -MAX_VELOCITY)
    ) {
      impulse.z -= MOVEMENT_SPEED;
      changeRotation = true;
      playWalkingSound();
    }

    playerBody.current?.applyImpulse(impulse, true);
    if (changeRotation) {
      character.current.rotation.y = Math.atan2(linvel.x, linvel.z);
    }

    // CAMERA FOLLOW
    const characterWorldPosition = character.current?.getWorldPosition(
      new THREE.Vector3()
    );
    state.camera.position.x = characterWorldPosition.x;
    state.camera.position.z = characterWorldPosition.z + 14;

    const targetLookAt = new THREE.Vector3(
      characterWorldPosition.x,
      0,
      characterWorldPosition.z
    );

    state.camera.lookAt(targetLookAt);
  });

  const playWalkingSound = () => {
    if (isPlaying) {
      walkingSound.play();
    }
  };

  const resetPosition = () => {
    playerBody.current?.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
    playerBody.current?.setLinvel(vec3({ x: 0, y: 0, z: 0 }));
  };

  return (
    <>
      <RigidBody
        name="player"
        ref={playerBody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        enabledRotations={[0, 0, 0]}
        onIntersectionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "fog") {
            resetPosition();
          }
          if (other.rigidBodyObject.name.startsWith("star")) {
            removeStar(other.rigidBodyObject.name);
          }
        }}
      >
        <BallCollider args={[0.6]} position={[0, 0.6, 0]} />
        <group ref={character}>
          <primitive object={myPlayer.scene} />
        </group>
        {isTabletOrMobile ? (
          <>
            <Html wrapperClass="mobileKey left">
              <div className="row">
                <button onClick={handleMobileForward}>
                  <span className="material-symbols-outlined">
                    arrow_drop_up
                  </span>
                </button>
              </div>
              <div className="row">
                <button onClick={handleMobileLeft}>
                  <span className="material-symbols-outlined">arrow_left</span>
                </button>
                <button onClick={handleMobileBackward}>
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </button>
                <button onClick={handleMobileRight}>
                  <span className="material-symbols-outlined">arrow_right</span>
                </button>
              </div>
            </Html>
            <Html wrapperClass="mobileKey right">
              <div className="row right">
                <button onClick={handleMobileMove}>STOP</button>
              </div>
              <div className="row right">
                <button onClick={handleMobileJump}>JUMP</button>
              </div>
            </Html>
          </>
        ) : null}
      </RigidBody>
    </>
  );
};

export default Player;
