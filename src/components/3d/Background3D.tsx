// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, useGLTF } from "@react-three/drei";
// import { FC, Suspense, useEffect, useRef } from "react";
// import * as THREE from "three";

// /* ---------------- Bottle Model ---------------- */

// const BottleModel: FC = () => {
//   const { scene } = useGLTF("/models/plastic_bottle.glb") as {
//     scene: THREE.Group;
//   };

//   const box = new THREE.Box3().setFromObject(scene);


//   useEffect(() => {
//   const box = new THREE.Box3().setFromObject(scene);
//   const center = box.getCenter(new THREE.Vector3());
//   scene.position.sub(center); // 👈 centers model
// }, [scene]);


//   useEffect(() => {
//     console.log("[Background3D] loaded GLTF scene children:", scene?.children.length);
//     if (!scene) return;
//     console.log(
//       "[Background3D] children names:",
//       scene.children.map((c) => c.name || c.type)
//     );

//     // Compute bounding box and add a visible helper so we can see where the model lives
//     const box = new THREE.Box3().setFromObject(scene);
//     const size = new THREE.Vector3();
//     box.getSize(size);
//     console.log("[Background3D] bounding box size:", size);


//     // Make meshes double-sided and ensure visibility
//     scene.traverse((child) => {
//       // @ts-ignore
//       if (child.isMesh) {
//         // @ts-ignore
//         if (child.material) {
//           // @ts-ignore
//           child.material.side = THREE.DoubleSide;
//           // @ts-ignore
//           child.material.transparent = false;
//         }
//         // @ts-ignore
//         child.castShadow = true;
//         // @ts-ignore
//         child.receiveShadow = true;
//       }
//     });

//     return () => {

//     };
//   }, [scene]);

//   return (
//     <primitive
//       object={scene}
//       scale={0.1}
//       position={[0, -0.8, 0]}
//       rotation={[0, Math.PI / 4, 0]}
//     />
//   );
// };


// /* ---------------- Background Canvas ---------------- */

// const Background3D: FC = () => {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: -1,
//         pointerEvents: "none",
//       }}
//     >
//       <Canvas
//         camera={{ position: [0, 0, 6], fov: 35 }}
//         style={{ background: "transparent" }}
//       >
//         <ambientLight intensity={0.6} />
//         <hemisphereLight intensity={0.4} />
//         <directionalLight position={[5, 5, 5]} intensity={1.2} />
//         <Environment preset="studio" />
//         <Suspense fallback={null}>
//           <BottleModel />
//         </Suspense>

//       </Canvas>
//     </div>
//   );
// };

// export default Background3D;


// ----------------------------------------------------------------------------------------------------------------

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, useGLTF } from "@react-three/drei";
// import { FC, Suspense, useEffect, useRef } from "react";
// import * as THREE from "three";

// /* ---------------- Bottle Model ---------------- */

// interface BottleModelProps {
//   scale: number;
// }

// const BottleModel: FC<BottleModelProps> = ({ scale }) => {
//   const { scene } = useGLTF("/models/plastic_bottle.glb") as {
//     scene: THREE.Group;
//   };

//   const groupRef = useRef<THREE.Group>(null);

//   /* Center the model */
//   useEffect(() => {
//     const box = new THREE.Box3().setFromObject(scene);
//     const center = box.getCenter(new THREE.Vector3());
//     scene.position.sub(center);
//   }, [scene]);

//   /* Ensure proper materials */
//   useEffect(() => {
//     scene.traverse((child: any) => {
//       if (child.isMesh) {
//         if (child.material) {
//           child.material.side = THREE.DoubleSide;
//           child.material.transparent = false;
//         }
//         child.castShadow = true;
//         child.receiveShadow = true;
//       }
//     });
//   }, [scene]);

//   /* Smooth scale animation */
//   useFrame(() => {
//     if (!groupRef.current) return;

//     const targetScale = new THREE.Vector3(scale, scale, scale);
//     groupRef.current.scale.lerp(targetScale, 0.1); // smoothness
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

// /* ---------------- Background Canvas ---------------- */

// interface Background3DProps {
//   scale: number;
// }

// const Background3D: FC<Background3DProps> = ({ scale }) => {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: -1,
//         pointerEvents: "none",
//       }}
//     >
//       <Canvas
//         camera={{ position: [0, 0, 6], fov: 35 }}
//         style={{ background: "transparent" }}
//       >
//         <ambientLight intensity={0.6} />
//         <hemisphereLight intensity={0.4} />
//         <directionalLight position={[5, 5, 5]} intensity={1.2} />
//         <Environment preset="studio" />
//         <Suspense fallback={null}>
//           <BottleModel scale={scale} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default Background3D;

// /* ---------------- Preload ---------------- */
// useGLTF.preload("/models/plastic_bottle.glb");



// ----------------------------------------------------------------------------------------------


import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { FC, Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

/* ---------------- Bottle Model ---------------- */

interface BottleModelProps {
  scale: number;
}

const BottleModel: FC<BottleModelProps> = ({ scale }) => {
  const { scene } = useGLTF("/models/plastic_bottle.glb") as {
    scene: THREE.Group;
  };

  const groupRef = useRef<THREE.Group>(null);

  // Center model
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene]);

  // Material safety
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

  // Smooth scale
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.scale.lerp(
      new THREE.Vector3(scale, scale, scale),
      0.1
    );
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        position={[0, -0.8, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
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
