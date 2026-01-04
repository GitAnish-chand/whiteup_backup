import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SodaBottleProps {
  scrollProgress: number;
}

// Internal carbonation bubbles component
const CarbonationBubbles = ({ count = 40 }: { count?: number }) => {
  const bubblesRef = useRef<THREE.InstancedMesh>(null);
  
  const bubbleData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 0.6,
        Math.random() * 1.4 + 0.2,
        (Math.random() - 0.5) * 0.6
      ),
      speed: Math.random() * 0.3 + 0.1,
      offset: Math.random() * Math.PI * 2,
      scale: Math.random() * 0.015 + 0.008,
    }));
  }, [count]);

  useFrame((state) => {
    if (!bubblesRef.current) return;
    
    const dummy = new THREE.Object3D();
    bubbleData.forEach((bubble, i) => {
      const time = state.clock.elapsedTime;
      
      // Rising motion with wobble
      const y = ((bubble.position.y + time * bubble.speed) % 1.6) + 0.2;
      const wobbleX = Math.sin(time * 2 + bubble.offset) * 0.02;
      const wobbleZ = Math.cos(time * 2.5 + bubble.offset) * 0.02;
      
      dummy.position.set(
        bubble.position.x + wobbleX,
        y,
        bubble.position.z + wobbleZ
      );
      dummy.scale.setScalar(bubble.scale);
      dummy.updateMatrix();
      bubblesRef.current!.setMatrixAt(i, dummy.matrix);
    });
    bubblesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={bubblesRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshPhysicalMaterial
        color="#ffffff"
        transparent
        opacity={0.6}
        roughness={0}
        metalness={0}
        transmission={0.9}
        thickness={0.1}
      />
    </instancedMesh>
  );
};

export const SodaBottle = ({ scrollProgress }: SodaBottleProps) => {
  const bottleRef = useRef<THREE.Group>(null);
  const liquidRef = useRef<THREE.Mesh>(null);

  // Cap rotation based on scroll (0 to 0.25 progress = full cap twist)
  const capRotation = Math.min(scrollProgress / 0.25, 1) * Math.PI * 4;
  const capLift = Math.min(scrollProgress / 0.25, 1) * 1.2;

  // Liquid rise based on scroll
  const liquidRise = Math.max(0, (scrollProgress - 0.15) / 0.4) * 0.8;
  const liquidScale = 1 + Math.max(0, (scrollProgress - 0.2) / 0.5) * 0.4;

  useFrame((state) => {
    if (bottleRef.current) {
      bottleRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      bottleRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  // Bottle body geometry - classic soda bottle shape
  const bottleShape = useMemo(() => {
    const shape = new THREE.Shape();
    
    // Start at bottom center
    shape.moveTo(0, 0);
    
    // Bottom flat
    shape.lineTo(0.38, 0);
    
    // Bottom curve into body
    shape.quadraticCurveTo(0.48, 0.05, 0.48, 0.15);
    
    // Main body - slight curve for classic soda look
    shape.lineTo(0.48, 0.4);
    shape.quadraticCurveTo(0.52, 0.8, 0.52, 1.2);
    shape.quadraticCurveTo(0.52, 1.6, 0.48, 1.8);
    
    // Shoulder curve
    shape.quadraticCurveTo(0.44, 2.0, 0.32, 2.2);
    
    // Neck taper
    shape.quadraticCurveTo(0.24, 2.4, 0.2, 2.55);
    
    // Neck cylinder
    shape.lineTo(0.2, 2.85);
    
    // Lip/rim
    shape.quadraticCurveTo(0.2, 2.9, 0.22, 2.92);
    shape.lineTo(0.22, 2.98);
    shape.lineTo(0, 2.98);
    
    return shape;
  }, []);

  const bottleGeometry = useMemo(() => {
    return new THREE.LatheGeometry(
      bottleShape.getPoints(80).map(p => new THREE.Vector2(p.x, p.y)),
      64
    );
  }, [bottleShape]);

  // Premium glass material - clear with green tint
  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0a2520'),
      metalness: 0.0,
      roughness: 0.02,
      transmission: 0.95,
      thickness: 0.8,
      ior: 1.52,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      envMapIntensity: 2,
      transparent: true,
      opacity: 0.95,
    });
  }, []);

  // Rich orange soda liquid material
  const liquidMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ff6a00'),
      metalness: 0,
      roughness: 0.05,
      transmission: 0.7,
      thickness: 3,
      ior: 1.36,
      clearcoat: 0.3,
      attenuationColor: new THREE.Color('#ff4400'),
      attenuationDistance: 0.5,
    });
  }, []);

  // Metallic cap material
  const capMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ff5500'),
      metalness: 0.9,
      roughness: 0.15,
    });
  }, []);

  // Label material
  const labelMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ff6b35'),
      metalness: 0.05,
      roughness: 0.6,
      transparent: true,
      opacity: 0.95,
    });
  }, []);

  return (
    <group ref={bottleRef} position={[0, -1.5, 0]} scale={1.1}>
      {/* Glass bottle */}
      <mesh geometry={bottleGeometry} material={glassMaterial} />
      
      {/* Inner bottle surface for depth */}
      <mesh geometry={bottleGeometry} scale={[0.96, 1, 0.96]}>
        <meshPhysicalMaterial
          color="#0f3530"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Main soda liquid body */}
      <group position={[0, 0.15 + liquidRise * 0.3, 0]}>
        {/* Bottom liquid cylinder */}
        <mesh position={[0, 0.5, 0]} scale={[1, 1, 1]}>
          <cylinderGeometry args={[0.44, 0.42, 1.0, 32]} />
          <primitive object={liquidMaterial} />
        </mesh>
        
        {/* Middle liquid - wider part */}
        <mesh position={[0, 1.15, 0]} scale={[1 + liquidScale * 0.05, 1, 1 + liquidScale * 0.05]}>
          <cylinderGeometry args={[0.46, 0.44, 0.7, 32]} />
          <primitive object={liquidMaterial} />
        </mesh>
        
        {/* Upper liquid - tapering */}
        <mesh position={[0, 1.6, 0]} scale={[1, 0.9, 1]}>
          <cylinderGeometry args={[0.38, 0.46, 0.4, 32]} />
          <primitive object={liquidMaterial} />
        </mesh>
        
        {/* Liquid surface - top meniscus */}
        <mesh position={[0, 1.8 + liquidScale * 0.15, 0]} rotation={[0, 0, 0]}>
          <sphereGeometry args={[0.36, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <primitive object={liquidMaterial} />
        </mesh>
        
        {/* Carbonation bubbles inside liquid */}
        <CarbonationBubbles count={50} />
      </group>

      {/* Foam/fizz at top when opened */}
      {scrollProgress > 0.2 && (
        <group position={[0, 2.0 + liquidRise * 0.6, 0]} scale={[liquidScale * 0.8, liquidScale * 0.5, liquidScale * 0.8]}>
          <mesh>
            <sphereGeometry args={[0.35, 24, 24]} />
            <meshPhysicalMaterial
              color="#ffaa66"
              transparent
              opacity={0.85}
              roughness={0.3}
              metalness={0}
              transmission={0.4}
            />
          </mesh>
          {/* Foam bubbles */}
          {[...Array(8)].map((_, i) => (
            <mesh 
              key={i}
              position={[
                Math.sin(i * 0.8) * 0.2,
                Math.random() * 0.3,
                Math.cos(i * 0.8) * 0.2
              ]}
            >
              <sphereGeometry args={[0.08 + Math.random() * 0.06, 16, 16]} />
              <meshPhysicalMaterial
                color="#ffcc88"
                transparent
                opacity={0.7}
                roughness={0.2}
                transmission={0.5}
              />
            </mesh>
          ))}
        </group>
      )}

      {/* Overflow soda stream when fully open */}
      {scrollProgress > 0.35 && (
        <mesh position={[0.15, 2.6 + liquidRise, 0.1]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.08, 0.12, 0.8 * liquidScale, 16]} />
          <meshPhysicalMaterial
            color="#ff7722"
            transparent
            opacity={0.8}
            roughness={0.1}
            transmission={0.5}
          />
        </mesh>
      )}

      {/* Cap with ridges */}
      <group position={[0, 2.92 + capLift, 0]} rotation={[0, capRotation, 0]}>
        {/* Main cap body */}
        <mesh>
          <cylinderGeometry args={[0.24, 0.22, 0.22, 32]} />
          <primitive object={capMaterial} />
        </mesh>
        {/* Cap top */}
        <mesh position={[0, 0.11, 0]}>
          <cylinderGeometry args={[0.22, 0.24, 0.02, 32]} />
          <primitive object={capMaterial} />
        </mesh>
        {/* Cap ridges */}
        {[...Array(24)].map((_, i) => (
          <mesh 
            key={i} 
            position={[
              Math.sin((i / 24) * Math.PI * 2) * 0.235,
              0,
              Math.cos((i / 24) * Math.PI * 2) * 0.235
            ]}
            rotation={[0, (i / 24) * Math.PI * 2, 0]}
          >
            <boxGeometry args={[0.02, 0.18, 0.015]} />
            <primitive object={capMaterial} />
          </mesh>
        ))}
      </group>

      {/* Label wrap */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1.0, 64]} />
        <primitive object={labelMaterial} />
      </mesh>
      
      {/* Label accent stripe */}
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.505, 0.505, 0.15, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.1}
          roughness={0.5}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Label bottom stripe */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.502, 0.502, 0.1, 64]} />
        <meshStandardMaterial
          color="#cc4400"
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>

      {/* Bottle highlights/reflections */}
      <mesh position={[0.3, 1.0, 0.3]} rotation={[0, 0.5, 0]}>
        <planeGeometry args={[0.1, 1.2]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};
