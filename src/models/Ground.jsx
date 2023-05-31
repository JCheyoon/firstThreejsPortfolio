import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

const Ground = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  const meshRef = useRef(null);

  const alphaMap = useLoader(TextureLoader, "./alpha-map.png");

  return (
    <>
      {/*<mesh ref={ref} receiveShadow>*/}
      {/*  <planeGeometry args={[100, 100]} />*/}
      {/*  <meshStandardMaterial color="greenyellow" />*/}
      {/*</mesh>*/}
      <mesh
        ref={meshRef}
        position={[0, -1, 0]}
        rotation-x={-Math.PI * 0.5}
        rotation-z={-0.079}
      >
        <circleGeometry args={[6.12, 50]} />
        <meshStandardMaterial
          // aoMap={aoMap} 그림자 넣기
          alphaMap={alphaMap}
        ></meshStandardMaterial>
      </mesh>
    </>
  );
};

export default Ground;
