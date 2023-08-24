import { Html } from "@react-three/drei";
import "./StarCounter.style.scss";
import { useContextData } from "../hooks/useContext.jsx";
import { useEffect, useState } from "react";
import StarsCollected from "./StarsCollected.jsx";

const StarCounter = () => {
  const [show, setShow] = useState(false);
  const { stars } = useContextData();
  const arrayOfFive = new Array(5).fill(null);

  useEffect(() => {
    if (stars.length === 0) {
      setShow(true);
    }
  }, [stars]);

  return (
    <>
      <StarsCollected show={show} setShow={setShow} />
      <Html wrapperClass="wrapper">
        {arrayOfFive.map((_, index) => (
          <span
            key={index}
            className={`fa fa-star ${
              index < 5 - stars.length ? "checked" : ""
            }`}
          ></span>
        ))}
      </Html>
    </>
  );
};

export default StarCounter;
