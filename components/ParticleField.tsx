import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Points } from "three";

export default function ParticleField() {
  const particlesRef = useRef<Points>(null);
  const count = 2000;
  const positions = useRef(new Float32Array(count * 3));

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * 50;
      positions.current[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    particlesRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.025) * 0.1;
  });

  return (
    <>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions.current, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#8B5CF6"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
        />
      </points>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#8B5CF6" />
      <spotLight position={[-5, -5, 5]} intensity={0.3} color="#3B82F6" />
    </>
  );
}
