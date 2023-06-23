import { Html } from "@react-three/drei";
import "./Modal.style.scss";
import { useState } from "react";
const Modal = () => {
  const [show, setShow] = useState(true);
  const hideModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };
  return show ? (
    <Html wrapperClass="keys-wrapper" center>
      <div className="row">
        <div className="key">W</div>
      </div>

      <div className="row">
        <div className="key">A</div>
        <div className="key">S</div>
        <div className="key">D</div>
      </div>

      <p>MOVEMENT</p>

      <div className="row">
        <div className="spacekey">SPACE</div>
      </div>
      <p>JUMP</p>

      <button onClick={hideModal}> &#10006;</button>
    </Html>
  ) : (
    <Html wrapperClass="button-wrapper" center>
      <button onClick={showModal} className="question">
        ?
      </button>
    </Html>
  );
};
export default Modal;
