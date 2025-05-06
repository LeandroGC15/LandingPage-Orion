import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";

function EarthModel() {
  const { scene } = useGLTF("/models/little_planet_earth.glb");
  const earthRef = useRef("");

 // Rotación continua en su propio eje Y
 useFrame(() => {
  if (earthRef.current) {
    earthRef.current.rotation.y += 0.009; // Ajusta la velocidad de rotación aquí
  }
});

  return (
    <primitive
      ref={earthRef}
      object={scene}
      scale={[0.001, 0.001, 0.001]} // Ajusta el tamaño
      position={[0, 0, 0]} // Centrar el modelo
    />
  );
}

export default function Globe() {
  return (
    <div className="fixed top-1/2 right-10 transform -translate-y-1/2 w-[900px] h-[900px]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        <Suspense fallback={null}>
          <EarthModel />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
