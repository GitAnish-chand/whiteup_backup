import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SodaSpillProps {
  scrollProgress: number;
}

export const SodaSpill = ({ scrollProgress }: SodaSpillProps) => {
  const pointsRef = useRef<THREE.Points>(null);

  // spill starts after bottle opens
  const intensity = Math.max(0, (scrollProgress - 0.32) / 0.4);
  const count = 160;

  const { positions, velocities } = useMemo(() => {
    const p = new Float32Array(count * 3);
    const v = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // start near bottle mouth
      p[i * 3] = (Math.random() - 0.5) * 0.12;
      p[i * 3 + 1] = 1.55;
      p[i * 3 + 2] = (Math.random() - 0.5) * 0.12;

      // upward burst then gravity
      v[i * 3] = (Math.random() - 0.5) * 0.02;
      v[i * 3 + 1] = 0.45 + Math.random() * 0.35;
      v[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    return { positions: p, velocities: v };
  }, []);

  useFrame(() => {
    if (!pointsRef.current || intensity <= 0) return;

    const pos = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // gravity
      velocities[i3 + 1] -= 0.012;

      // movement
      positions[i3] += velocities[i3] * intensity;
      positions[i3 + 1] += velocities[i3 + 1] * intensity;
      positions[i3 + 2] += velocities[i3 + 2] * intensity;

      // reset droplet after it falls
      if (positions[i3 + 1] < -1.1) {
        positions[i3] = (Math.random() - 0.5) * 0.12;
        positions[i3 + 1] = 1.55;
        positions[i3 + 2] = (Math.random() - 0.5) * 0.12;

        velocities[i3] = (Math.random() - 0.5) * 0.02;
        velocities[i3 + 1] = 0.4 + Math.random() * 0.4;
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
      }

      pos.setXYZ(i, positions[i3], positions[i3 + 1], positions[i3 + 2]);
    }

    pos.needsUpdate = true;
  });

  if (intensity <= 0) return null;

  return (
    <>
      {/* Blue soda droplets */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#4bbcff"
          size={0.045}
          transparent
          opacity={0.55 * intensity}
          sizeAttenuation
          blending={THREE.NormalBlending}
        />
      </points>

      {/* Light foam at bottle mouth */}
      <mesh
        position={[0, 1.58 + intensity * 0.25, 0]}
        scale={[0.6, 0.35, 0.6].map((v) => v * intensity)}
      >
        <sphereGeometry args={[0.32, 24, 24]} />
        <meshPhysicalMaterial
          color="#e8f6ff"
          roughness={0.45}
          transmission={0.6}
          thickness={0.3}
          transparent
          opacity={0.65}
        />
      </mesh>
    </>
  );
};
