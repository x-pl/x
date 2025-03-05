import { useFrame } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

export default function XLogo(props: any) {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      mesh.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Center>
        <Text3D
          ref={mesh}
          font="/fonts/inter_bold.json"
          size={4}
          height={0.5}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          X
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#3B82F6"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Center>
    </Float>
  );
}
