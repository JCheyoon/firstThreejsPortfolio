import { usePlane } from "@react-three/cannon";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

const Ground = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  const alphaMap = useLoader(TextureLoader, "./alpha-map.png");

  return (
    <>
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <circleGeometry args={[50, 50]} />
        <meshStandardMaterial
          // aoMap={aoMap} 그림자 넣기
          alphaMap={alphaMap}
        ></meshStandardMaterial>
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      {/*</mesh>*/}
    </>
  );
};

export default Ground;
