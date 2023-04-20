import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Home from "./Home.jsx";
import { PresentationControls } from "@react-three/drei";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas shadows camera={{ fov: 25, position: [0, 1, 8] }}>
    <Home />
  </Canvas>
);
