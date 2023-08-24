import { Html } from "@react-three/drei";
import "./AudioButton.style.scss";
import { useContextData } from "../hooks/useContext.jsx";
import { useState } from "react";

const AudioButton = () => {
  const { isPlaying, setIsPlaying } = useContextData();
  const [hideText, setHideText] = useState(false);
  const checkAudio = (e) => {
    setIsPlaying(!isPlaying);
    e.currentTarget.classList.toggle("textEffect");
    setHideText(true);
  };
  return (
    <>
      <Html wrapperClass="audioButton">
        <button className="volumeIcon" onClick={checkAudio}>
          {isPlaying ? (
            <span className="material-symbols-rounded">brand_awareness</span>
          ) : (
            <span className="material-symbols-rounded">no_sound</span>
          )}
        </button>
      </Html>
      {hideText ? null : (
        <Html wrapperClass="audioText">Turn on the {"\n"}sound here</Html>
      )}
    </>
  );
};
export default AudioButton;
