import GrassModel from "./GrassModel.jsx";

const Grass = () => {
  const grass = [
    { position: [-2.4, 0, -2.5], args: [0.4, 2, 0.4] },
    { position: [1.8, -0.1, -0.6], args: [0.2, 1, 0.2] },
    { position: [-4.3, 0, -2], args: [0.3, 1, 0.2] },
    { position: [-5.2, 0, -0.8], args: [0.1, 3, 0.3] },
    { position: [-8.6, 0, 2.3], args: [0.1, 2, 0.1] },
    { position: [-9, 0, 13], args: [0.3, 2, 0.3] },
    { position: [6, 0, 9.2], args: [0.3, 2, 0.3] },
    { position: [4.2, 0, 6.2], args: [0.3, 2, 0.3] },
  ];
  return (
    <>
      {grass.map((item, index) => (
        <GrassModel position={item.position} args={item.args} key={index} />
      ))}
    </>
  );
};

export default Grass;
