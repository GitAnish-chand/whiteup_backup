import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SodaBottleProps {
  scrollProgress: number;
}

export const SodaBottle = ({ scrollProgress }: SodaBottleProps) => {
  const bottleRef = useRef<THREE.Group>(null);

  const capRotation = Math.min(scrollProgress / 0.25, 1) * Math.PI * 4;
  const capLift = Math.min(scrollProgress / 0.25, 1) * 1.2;

  useFrame((state) => {
    if (bottleRef.current) {
      bottleRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.25) * 0.04;
      bottleRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.03;
    }
  });

  /* -------------------- BOTTLE SHAPE -------------------- */
  const bottleShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.lineTo(0.38, 0);
    s.quadraticCurveTo(0.48, 0.05, 0.48, 0.15);
    s.lineTo(0.48, 1.8);
    s.quadraticCurveTo(0.44, 2.0, 0.32, 2.2);
    s.quadraticCurveTo(0.24, 2.4, 0.2, 2.55);
    s.lineTo(0.2, 2.95);
    s.lineTo(0, 2.95);
    return s;
  }, []);

  const bottleGeometry = useMemo(
    () =>
      new THREE.LatheGeometry(
        bottleShape.getPoints(90).map((p) => new THREE.Vector2(p.x, p.y)),
        72
      ),
    [bottleShape]
  );

  /* -------------------- OUTER GLASS -------------------- */
  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#ffffff',
        metalness: 0,
        roughness: 0.02,
        transmission: 1,
        thickness: 1.3,
        ior: 1.52,
        clearcoat: 1,
        clearcoatRoughness: 0.03,
        envMapIntensity: 3.8,
        transparent: true,
        opacity: 1,
      }),
    []
  );

  /* -------------------- INNER GLASS (EDGE DARKENING) -------------------- */
  const innerGlassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        transmission: 0.9,
        roughness: 0.08,
        thickness: 0.9,
        ior: 1.52,
        transparent: true,
        opacity: 0.22,
        side: THREE.BackSide,
      }),
    []
  );

  /* -------------------- CAP -------------------- */
  const capMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#ff5500',
        metalness: 0.9,
        roughness: 0.15,
      }),
    []
  );

  return (
    <group ref={bottleRef} position={[0, -0.8, 0]} scale={0.95}>
      {/* Outer glass */}
      <mesh geometry={bottleGeometry} material={glassMaterial} />

      {/* Inner glass shell for thickness */}
      <mesh
        geometry={bottleGeometry}
        scale={[0.96, 1, 0.96]}
        material={innerGlassMaterial}
      />

      {/* Cap */}
      <group position={[0, 2.95 + capLift, 0]} rotation={[0, capRotation, 0]}>
        <mesh>
          <cylinderGeometry args={[0.24, 0.22, 0.22, 32]} />
          <primitive object={capMaterial} />
        </mesh>
      </group>

      {/* Vertical glass highlight */}
      <mesh position={[0.36, 1.15, 0.25]} rotation={[0, 0.45, 0]}>
        <planeGeometry args={[0.07, 1.6]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};
