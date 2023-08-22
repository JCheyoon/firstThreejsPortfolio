import { RigidBody } from "@react-three/rapier";
import StarModel from "./StarModel.jsx";

import { useContextData } from "../hooks/useContext.jsx";

const Star = () => {
  const { stars } = useContextData();

  return (
    <>
      {stars.map((item, index) => (
        <RigidBody
          colliders="ball"
          type="fixed"
          position={item.position}
          key={index}
          sensor
          name={item.id}
        >
          <StarModel />
        </RigidBody>
      ))}
    </>
  );
};

export default Star;
