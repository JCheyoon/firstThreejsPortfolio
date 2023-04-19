import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { useInput } from "./hooks/useInput.jsx";

const Player = () => {
  const { forward, backward, left, right, shift } = useInput();

  const myPlayer = useGLTF("./test.glb");
  const { actions } = useAnimations(myPlayer.animations, myPlayer.scene);

  const currentAction = useRef("");

  useEffect(() => {
    let action = "";
    if (forward || backward || left || right) {
      action = "walking";
    } else {
      action = "idle";
    }

    if (currentAction.current != action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, shift]);
  return <primitive object={myPlayer.scene} />;
};

export default Player;
