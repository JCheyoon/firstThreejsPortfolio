import { Html } from "@react-three/drei";
import "./StarsCollected.style.scss";
const StarsCollected = ({ show, setShow }) => {
  const hideModal = () => {
    setShow(false);
  };

  return show ? (
    <Html wrapperClass="modalContainer" center>
      <h2>Congratulations</h2>
      <p>You have collected all stars!</p>
      <button onClick={hideModal}>
        <div className="key">OK</div>
      </button>
    </Html>
  ) : (
    <Html wrapperClass="hide" />
  );
};
export default StarsCollected;
