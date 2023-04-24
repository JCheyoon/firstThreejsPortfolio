import { Html, useProgress } from "@react-three/drei";
import "./LoadingScreen.style.css";

const LoadingScreen = () => {
  //TODO change css

  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};
export default LoadingScreen;
