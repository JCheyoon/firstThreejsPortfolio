import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Home from "./Home.jsx";
import { Suspense } from "react";
import LoadingScreen from "./loading/LoadingScreen.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Canvas shadows camera={{ fov: 20, position: [0, 20, 0] }}>
    <color attach="background" args={["#dbecfb"]} />
    <fog attach="fog" args={["#dbecfb", 30, 40]} />
    <Suspense fallback={<LoadingScreen />}>
      <Home />
    </Suspense>
  </Canvas>
);
