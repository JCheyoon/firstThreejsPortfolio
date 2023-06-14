import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { walkingSound } from "../audio/audio.jsx";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import Controls from "./Controls.jsx";

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

  myPlayer.scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.castShadow = true;
    }
  });
  const isOnFloor = useRef(true);
  const currentAction = useRef("");
  const character = useRef();

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
  }, [forward, backward, left, right]);

  useFrame((state) => {
    const impulse = { x: 0, y: 0, z: 0 };
    if (jump && isOnFloor.current) {
      impulse.y += JUMP_FORCE;
      isOnFloor.current = false;
    }

    const linvel = playerBody.current.linvel();
    let changeRotation = false;
    if (right && linvel.x < MAX_VELOCITY) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
      walkingSound.play();
    }
    if (left && linvel.x > -MAX_VELOCITY) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
      walkingSound.play();
    }
    if (backward && linvel.z < MAX_VELOCITY) {
      impulse.z += MOVEMENT_SPEED;
      changeRotation = true;
      walkingSound.play();
    }
    if (forward && linvel.z > -MAX_VELOCITY) {
      impulse.z -= MOVEMENT_SPEED;
      changeRotation = true;
      walkingSound.play();
    }

    playerBody.current.applyImpulse(impulse, true);
    if (changeRotation) {
      const angle = Math.atan2(linvel.x, linvel.z);
      character.current.rotation.y = angle;
    }

    // CAMERA FOLLOW
    const characterWorldPosition = character.current.getWorldPosition(
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

  const resetPosition = () => {
    playerBody.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
    playerBody.current.setLinvel(vec3({ x: 0, y: 0, z: 0 }));
  };

  return (
    <>
      <group>
        <RigidBody
          type="Kinematic"
          ref={playerBody}
          colliders={false}
          scale={[0.5, 0.5, 0.5]}
          enabledRotations={[false, false, false]}
        >
          <CapsuleCollider args={[0.4, 0.5]} position={[0, 1, 0]} />
          <group ref={character}>
            <primitive object={myPlayer.scene} />
          </group>
        </RigidBody>
      </group>
    </>
  );
};

export default Player;
