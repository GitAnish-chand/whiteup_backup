
// ----------------------------------------------------------------------------------------------


import { Canvas, useFrame,useThree } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { FC, Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

/* ---------------- Bottle Model ---------------- */

interface BottleModelProps {
  scale: number;
}

// const BottleModel: FC<BottleModelProps> = ({ scale }) => {
//   const { scene } = useGLTF("/models/plastic_bottle.glb") as {
//     scene: THREE.Group;
//   };

//   const groupRef = useRef<THREE.Group>(null);

//   // Center model
//   useEffect(() => {
//     const box = new THREE.Box3().setFromObject(scene);
//     const center = box.getCenter(new THREE.Vector3());
//     scene.position.sub(center);
//   }, [scene]);

//   // Material safety
//   useEffect(() => {
//     scene.traverse((child: any) => {
//       if (child.isMesh) {
//         child.material.side = THREE.DoubleSide;
//         child.material.transparent = false;
//         child.castShadow = true;
//         child.receiveShadow = true;
//       }
//     });
//   }, [scene]);

//   // Smooth scale
//   useFrame(() => {
//     if (!groupRef.current) return;
//     groupRef.current.scale.lerp(
//       new THREE.Vector3(scale, scale, scale),
//       0.1
//     );
//   });

//   return (
//     <group ref={groupRef}>
//       <primitive
//         object={scene}
//         position={[0, -0.8, 0]}
//         rotation={[0, Math.PI / 4, 0]}
//       />
//     </group>
//   );
// };

const BottleModel: FC<BottleModelProps> = ({ scale }) => {
  const { scene } = useGLTF("/models/plastic_bottle.glb") as {
    scene: THREE.Group;
  };

  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree(); // 👈 mouse from -1 to +1

  /* ---------------- Center Model ---------------- */
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene]);

  /* ---------------- Material Safety ---------------- */
  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide;
        child.material.transparent = false;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  /* ---------------- Mouse-driven motion ---------------- */
  useFrame(() => {
    if (!groupRef.current) return;

    // 🎯 Target rotations (very small = premium)
    const targetRotationX = mouse.y * 0.25; // up/down
    const targetRotationY = mouse.x * 0.35; // left/right

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      0.08
    );

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY + Math.PI / 4, // keep your base rotation
      0.08
    );

    // Smooth scale (your existing logic)
    groupRef.current.scale.lerp(
      new THREE.Vector3(scale, scale, scale),
      0.1
    );
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} position={[0, -0.8, 0]} />
    </group>
  );
};


/* ---------------- Background Canvas ---------------- */

interface Background3DProps {
  scale: number;
  enabled: boolean;
}

const Background3D: FC<Background3DProps> = ({ scale, enabled }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: enabled ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }} // 👈 FADE SPEED
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
        <ambientLight intensity={0.6} />
        <hemisphereLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Environment preset="studio" />
        <Suspense fallback={null}>
          <BottleModel scale={scale} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Background3D;

useGLTF.preload("/models/plastic_bottle.glb");
