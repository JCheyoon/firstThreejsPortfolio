import { Html, useProgress } from "@react-three/drei";
import "./LoadingScreen.style.scss";
const LoadingScreen = () => {
  const { progress, loaded } = useProgress();
  return (
    <>
      <Html center>
        <div className="progress">{Math.round(progress)} % loaded</div>
      </Html>
    </>
  );
};
export default LoadingScreen;
