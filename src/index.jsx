import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Home from "./Home.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas shadows camera={{ fov: 20, position: [0, 20, 0] }}>
    <Home />
  </Canvas>
);
