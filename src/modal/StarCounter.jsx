import { Html } from "@react-three/drei";
import "./StarCounter.style.scss";
import { useContextData } from "../hooks/useContext.jsx";

const StarCounter = () => {
  const { stars } = useContextData();
  const arrayOfFive = new Array(5).fill(null);
  return (
    <Html wrapperClass="wrapper" center>
      {arrayOfFive.map((_, index) => (
        <span
          key={index}
          className={`fa fa-star ${index < 5 - stars.length ? "checked" : ""}`}
        ></span>
      ))}
    </Html>
  );
};

export default StarCounter;
