
// // ----------------------------------------------------------------------------------------------


// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Environment, useGLTF } from "@react-three/drei";
// import { FC, Suspense, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import * as THREE from "three";

// /* ---------------- Bottle Model ---------------- */

// interface BottleModelProps {
//   scale: number;
// }

// // const BottleModel: FC<BottleModelProps> = ({ scale }) => {
// //   const { scene } = useGLTF("/models/plastic_bottle.glb") as {
// //     scene: THREE.Group;
// //   };

// //   const groupRef = useRef<THREE.Group>(null);

// //   // Center model
// //   useEffect(() => {
// //     const box = new THREE.Box3().setFromObject(scene);
// //     const center = box.getCenter(new THREE.Vector3());
// //     scene.position.sub(center);
// //   }, [scene]);

// //   // Material safety
// //   useEffect(() => {
// //     scene.traverse((child: any) => {
// //       if (child.isMesh) {
// //         child.material.side = THREE.DoubleSide;
// //         child.material.transparent = false;
// //         child.castShadow = true;
// //         child.receiveShadow = true;
// //       }
// //     });
// //   }, [scene]);

// //   // Smooth scale
// //   useFrame(() => {
// //     if (!groupRef.current) return;
// //     groupRef.current.scale.lerp(
// //       new THREE.Vector3(scale, scale, scale),
// //       0.1
// //     );
// //   });

// //   return (
// //     <group ref={groupRef}>
// //       <primitive
// //         object={scene}
// //         position={[0, -0.8, 0]}
// //         rotation={[0, Math.PI / 4, 0]}
// //       />
// //     </group>
// //   );
// // };





// // const BottleModel: FC<BottleModelProps> = ({ scale }) => {
// //   const { scene } = useGLTF("/models/plastic_bottle.glb") as {
// //     scene: THREE.Group;
// //   };

// //   const groupRef = useRef<THREE.Group>(null);
// //   // const { mouse } = useThree(); // 👈 mouse from -1 to +1
// //   const mouse = useRef({ x: 0, y: 0 });
// //   const tilt = useRef({ x: 0, y: 0 });

// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
// //       mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
// //     };

// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);


// //   /* ---------------- Gyroscope control ---------------- */



// //   useEffect(() => {
// //     const handleOrientation = (e: DeviceOrientationEvent) => {
// //       if (e.beta == null || e.gamma == null) return;

// //       // Clamp values
// //       const x = THREE.MathUtils.clamp(e.gamma / 30, -1, 1);
// //       const y = THREE.MathUtils.clamp(e.beta / 45, -1, 1);

// //       tilt.current.x = x;
// //       tilt.current.y = y;
// //     };

// //     window.addEventListener("deviceorientation", handleOrientation, true);
// //     return () =>
// //       window.removeEventListener("deviceorientation", handleOrientation);
// //   }, []);


// //   /* ---------------- Center Model ---------------- */
// //   useEffect(() => {
// //     const box = new THREE.Box3().setFromObject(scene);
// //     const center = box.getCenter(new THREE.Vector3());
// //     scene.position.sub(center);
// //   }, [scene]);

// //   /* ---------------- Material Safety ---------------- */
// //   useEffect(() => {
// //     scene.traverse((child: any) => {
// //       if (child.isMesh) {
// //         child.material.side = THREE.DoubleSide;
// //         child.material.transparent = false;
// //         child.castShadow = true;
// //         child.receiveShadow = true;
// //       }
// //     });
// //   }, [scene]);

// //   /* ---------------- Mouse-driven motion ---------------- */


// //   // useFrame(() => {
// //   //   if (!groupRef.current) return;

// //   //   const mx = mouse.current.x;
// //   //   const my = mouse.current.y;

// //   //   /* ---------------- POSITION (cursor control) ---------------- */
// //   //   const targetX = mx * 2.5;
// //   //   const targetY = my * 1.6 - 0.8;
// //   //   const targetZ = -Math.abs(mx) * 0.8;

// //   //   groupRef.current.position.x = THREE.MathUtils.lerp(
// //   //     groupRef.current.position.x,
// //   //     targetX,
// //   //     0.08
// //   //   );

// //   //   groupRef.current.position.y = THREE.MathUtils.lerp(
// //   //     groupRef.current.position.y,
// //   //     targetY,
// //   //     0.08
// //   //   );

// //   //   groupRef.current.position.z = THREE.MathUtils.lerp(
// //   //     groupRef.current.position.z,
// //   //     targetZ,
// //   //     0.08
// //   //   );

// //   //   /* ---------------- ROTATION (same direction) ---------------- */
// //   //   const rotX = my * 0.45;
// //   //   const rotY = mx * 0.7 + Math.PI / 4;

// //   //   groupRef.current.rotation.x = THREE.MathUtils.lerp(
// //   //     groupRef.current.rotation.x,
// //   //     rotX,
// //   //     0.08
// //   //   );

// //   //   groupRef.current.rotation.y = THREE.MathUtils.lerp(
// //   //     groupRef.current.rotation.y,
// //   //     rotY,
// //   //     0.08
// //   //   );

// //   //   /* ---------------- SCALE ---------------- */
// //   //   groupRef.current.scale.lerp(
// //   //     new THREE.Vector3(scale, scale, scale),
// //   //     0.1
// //   //   );
// //   // });


// //   useFrame(() => {
// //   if (!groupRef.current) return;

// //   const mx = mouse.current.x;
// //   const my = mouse.current.y;

// //   /* ---------------- LOCK POSITION (CENTER) ---------------- */
// //   groupRef.current.position.set(0, 0, 0);

// //   /* ---------------- SUBTLE ROTATION ONLY ---------------- */
// //   const targetRotX = my * 0.45;              // up / down tilt
// //   const targetRotY = mx * 0.35 + Math.PI / 4; // left / right + base rotation

// //   groupRef.current.rotation.x = THREE.MathUtils.lerp(
// //     groupRef.current.rotation.x,
// //     targetRotX,
// //     0.08
// //   );

// //   groupRef.current.rotation.y = THREE.MathUtils.lerp(
// //     groupRef.current.rotation.y,
// //     targetRotY,
// //     0.08
// //   );

// //   /* ---------------- SMOOTH SCALE ---------------- */
// //   groupRef.current.scale.lerp(
// //     new THREE.Vector3(scale, scale, scale),
// //     0.1
// //   );
// // });


// //   return (
// //     <group ref={groupRef}>
// //       <primitive object={scene} position={[0, -0.8, 0]} />
// //     </group>
// //   );
// // };


// // /* ---------------- Background Canvas ---------------- */

// // interface Background3DProps {
// //   scale: number;
// //   enabled: boolean;
// // }

// // const Background3D: FC<Background3DProps> = ({ scale, enabled }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 1 }}
// //       animate={{ opacity: enabled ? 1 : 0 }}
// //       transition={{ duration: 0.8, ease: "easeOut" }} // 👈 FADE SPEED
// //       style={{
// //         position: "fixed",
// //         inset: 0,
// //         zIndex: -1,
// //         pointerEvents: "none",
// //       }}
// //     >
// //       {/* <Canvas camera={{ position: [0, 0, 6], fov: 35 }}> */}
// //       <Canvas
// //         dpr={[1, 1.5]}
// //         frameloop="always"
// //         camera={{ position: [0, 0, 6], fov: 30 }}
// //       >

// //         <ambientLight intensity={0.6} />
// //         <hemisphereLight intensity={0.4} />
// //         <directionalLight position={[3, 3, 3]} intensity={0.8} />


// //         <Environment preset="warehouse" />
// //         <Suspense fallback={null}>
// //           <BottleModel scale={scale} />
// //         </Suspense>
// //       </Canvas>
// //     </motion.div>
// //   );
// // };

// // export default Background3D;

// // useGLTF.preload("/models/plastic_bottle.glb");


// // ------------------------------------------------------------------


// const BottleModel: FC<BottleModelProps> = ({ scale }) => {
//   const { scene } = useGLTF("/models/plastic_bottle.glb") as {
//     scene: THREE.Group;
//   };

//   const groupRef = useRef<THREE.Group>(null);
//   const mouse = useRef({ x: 0, y: 0 });

//   // 🔑 intro animation state
//   const introDone = useRef(false);
//   const introProgress = useRef(0);

//   /* ---------------- Mouse tracking ---------------- */
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   /* ---------------- Center model & setup ---------------- */
//   useEffect(() => {
//     const box = new THREE.Box3().setFromObject(scene);
//     const center = box.getCenter(new THREE.Vector3());
//     scene.position.sub(center);

//     scene.traverse((child: any) => {
//       if (child.isMesh) {
//         child.material.side = THREE.DoubleSide;
//         child.material.transparent = false;
//         child.castShadow = true;
//         child.receiveShadow = true;
//       }
//     });

//     if (groupRef.current) {
//       // ✅ Initial stable transform
//       groupRef.current.scale.setScalar(scale);
//       groupRef.current.rotation.set(0, Math.PI / 4, 0);

//       // ⬇️ Start slightly below
//       groupRef.current.position.set(0, -1.8, 0);
//     }
//   }, [scene, scale]);

//   /* ---------------- Animation loop ---------------- */
//   useFrame((_, delta) => {
//     if (!groupRef.current) return;

//     /* ---------- INTRO: rise from bottom ---------- */
//     if (!introDone.current) {
//       introProgress.current += delta * 1.2; // speed control

//       groupRef.current.position.y = THREE.MathUtils.damp(
//         groupRef.current.position.y,
//         0,
//         6,
//         delta
//       );

//       if (Math.abs(groupRef.current.position.y) < 0.01) {
//         groupRef.current.position.y = 0;
//         introDone.current = true;
//       }

//       return; // ⛔ skip mouse motion until intro ends
//     }

//     /* ---------- Normal interaction ---------- */
//     const mx = mouse.current.x;
//     const my = mouse.current.y;

//     const targetRotX = my * 0.25;
//     const targetRotY = mx * 0.35 + Math.PI / 4;

//     groupRef.current.rotation.x = THREE.MathUtils.damp(
//       groupRef.current.rotation.x,
//       targetRotX,
//       6,
//       delta
//     );

//     groupRef.current.rotation.y = THREE.MathUtils.damp(
//       groupRef.current.rotation.y,
//       targetRotY,
//       6,
//       delta
//     );

//     // Stable scale (no popping)
//     groupRef.current.scale.x = THREE.MathUtils.damp(
//       groupRef.current.scale.x,
//       scale,
//       6,
//       delta
//     );
//     groupRef.current.scale.y = groupRef.current.scale.x;
//     groupRef.current.scale.z = groupRef.current.scale.x;
//   });

//   return (
//     <group ref={groupRef}>
//       <primitive object={scene} position={[0, -0.8, 0]} />
//     </group>
//   );
// };

// /* ---------------- Background Canvas ---------------- */

// interface Background3DProps {
//   scale: number;
//   enabled: boolean;
// }

// const Background3D: FC<Background3DProps> = ({ scale, enabled }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: enabled ? 1 : 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: -1,
//         pointerEvents: "none",
//       }}
//     >
//       <Canvas
//         dpr={[1, 1.5]}
//         camera={{ position: [0, 0, 6], fov: 30 }}
//       >
//         <ambientLight intensity={0.6} />
//         <hemisphereLight intensity={0.4} />
//         <directionalLight position={[3, 3, 3]} intensity={0.8} />

//         <Environment preset="warehouse" />

//         <Suspense fallback={null}>
//           <BottleModel scale={scale} />
//         </Suspense>
//       </Canvas>
//     </motion.div>
//   );
// };

// export default Background3D;

// useGLTF.preload("/models/plastic_bottle.glb");


// // ---------------------------------------------------------------------------------------------------


import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { FC, Suspense, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

/* ---------------- Bottle Model ---------------- */

interface BottleModelProps {
  scale: number;
}

const BottleModel: FC<BottleModelProps> = ({ scale }) => {
  const { scene } = useGLTF("/models/bottle 3.glb") as {
    scene: THREE.Group;
  };

  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const introDone = useRef(false);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

    


  /* ---------------- Mouse (DESKTOP ONLY) ---------------- */
  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile]);

  /* ---------------- Setup ---------------- */
  useEffect(() => {
    // center model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);

    // optimize materials
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;

        if (child.material) {
          child.material.side = THREE.FrontSide;
          child.material.transparent = false;
          child.material.depthWrite = true;
          child.material.needsUpdate = false;
        }
      }
    });

    if (groupRef.current) {
      groupRef.current.scale.setScalar(scale);
      groupRef.current.rotation.set(0, Math.PI / 12, 0);
      // groupRef.current.rotation.set(0, 0, 0);

      groupRef.current.position.set(0, -1.6, 0); // intro start
    }
  }, [scene, scale]);

  /* ---------------- Animation Loop ---------------- */
  useFrame((_, delta) => {
    if (!groupRef.current) return;

    /* ---- INTRO ---- */
    if (!introDone.current) {
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        0,
        delta * 3
      );

      if (Math.abs(groupRef.current.position.y) < 0.01) {
        groupRef.current.position.y = 0;
        introDone.current = true;
      }
      return;
    }

    /* ---- MOBILE (VERY LIGHT) ---- */
    if (isMobile) {
      groupRef.current.rotation.y += delta * 0.08;
      return;
    }

    /* ---- DESKTOP INTERACTION ---- */
    const mx = mouse.current.x;
    const my = mouse.current.y;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      my * 0.2,
      delta * 4
    );

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mx * 0.8 + Math.PI / 3,
      delta * 4
    );
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
};

/* ---------------- Background Canvas ---------------- */

interface Background3DProps {
  scale: number;
  enabled: boolean;
}

const Background3D: FC<Background3DProps> = ({ scale, enabled }) => {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: enabled ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      {/* <Canvas
        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5)}
        camera={{ position: [0, 0, 6], fov: 30 }}
      > */}

        <Canvas
          dpr={2}
          camera={{ position: [0, 0, 6], fov: 30 }}
          gl={{ alpha: false }}
          onCreated={({ gl }) => {
            gl.setClearColor("#0b0f14", 1); // dark premium background
          }}
        >


        {/* LIGHTS (CHEAP) */}
        <ambientLight intensity={0.6} />
        <hemisphereLight intensity={0.4} />
        <directionalLight position={[3, 3, 3]} intensity={0.8} />

        {/* ENVIRONMENT (DESKTOP ONLY) */}
        {!isMobile && <Environment preset="studio" />}

        <Suspense fallback={null}>
          <BottleModel scale={scale} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default memo(Background3D);

/* ---------------- Preload ---------------- */
useGLTF.preload("/models/bottle 3.glb");
