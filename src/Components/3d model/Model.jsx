import { Canvas } from "@react-three/fiber";
import {motion} from "framer-motion"
import "./style.css";
import { OrbitControls } from "@react-three/drei";

import { Scene } from "./Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
function Model() {
  return (
    <>
      <Canvas flat camera={{ fov: 35 }}>
        <OrbitControls
          enableZoom={false} // Keep zoom enabled
          // minDistance={2} // Set the minimum zoom distance
          // maxDistance={} // Set the maximum zoom distance
        />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            intensity={90.0} // The bloom intensity.
            luminanceThreshold={0.1} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={1} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur
          />
          {/* <ToneMapping adaptive /> */}
        </EffectComposer>
      </Canvas>
      {/* <h1 className=" text font-bold text-9xl text-center ">
        Protfolio component
      </h1> */}
    </>
  );
}

export default Model;
