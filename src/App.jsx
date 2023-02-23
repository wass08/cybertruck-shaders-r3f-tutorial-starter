import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Experience } from "./components/Experience";
function App() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 9], fov: 42 }}>
      <color attach="background" args={["#15151a"]} />
      <Experience />
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={1}
          intensity={1.42}
          radius={0.72}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
