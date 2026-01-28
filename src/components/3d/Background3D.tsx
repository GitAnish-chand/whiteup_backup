

// ------------------------------------------------------------------------------------------------------------------------------------

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, useGLTF } from "@react-three/drei";
// import { FC, Suspense, useEffect, useRef, memo } from "react";
// import { motion } from "framer-motion";
// import * as THREE from "three";



// /* ---------------- Bottle Model ---------------- */

// interface BottleModelProps {
//   scale: number;
// }

// const BottleModel: FC<BottleModelProps> = ({ scale }) => {
//   const { scene } = useGLTF("/models/bottle 3.glb") as {
//     scene: THREE.Group;
//   };

//   const groupRef = useRef<THREE.Group>(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const introDone = useRef(false);

//   const isMobile =
//     typeof window !== "undefined" && window.innerWidth < 768;

//   /* ---------------- Mouse (DESKTOP ONLY) ---------------- */
//   useEffect(() => {
//     if (isMobile) return;

//     const onMove = (e: MouseEvent) => {
//       mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener("mousemove", onMove, { passive: true });
//     return () => window.removeEventListener("mousemove", onMove);
//   }, [isMobile]);

//   /* ---------------- Setup ---------------- */
//   useEffect(() => {
//     // center model
//     const box = new THREE.Box3().setFromObject(scene);
//     const center = box.getCenter(new THREE.Vector3());
//     scene.position.sub(center);

//     // optimize materials
//     scene.traverse((child: any) => {
//       if (child.isMesh) {
//         child.castShadow = false;
//         child.receiveShadow = false;

//         if (child.material) {
//           child.material.side = THREE.FrontSide;
//           child.material.transparent = false;
//           child.material.depthWrite = true;
//           child.material.needsUpdate = false;
//         }
//       }
//     });

//     if (groupRef.current) {
//       // groupRef.current.scale.setScalar(scale *0.9);
//       const finalScale = isMobile ? scale * 0.6 : scale * 0.9;
//       groupRef.current.scale.setScalar(finalScale);

//       groupRef.current.rotation.set(0, Math.PI / 12, 0);
//       // groupRef.current.rotation.set(0, 0, 0);

//       groupRef.current.position.set(0, -1.6, 0); // intro start
//     }
//   }, [scene, scale]);

//   /* ---------------- Animation Loop ---------------- */
//   useFrame((_, delta) => {
//     if (!groupRef.current) return;

//     /* ---- INTRO ---- */
//     if (!introDone.current) {
//       groupRef.current.position.y = THREE.MathUtils.lerp(
//         groupRef.current.position.y,
//         0,
//         delta * 3
//       );

//       if (Math.abs(groupRef.current.position.y) < 0.01) {
//         groupRef.current.position.y = 0;
//         introDone.current = true;
//       }
//       return;
//     }

//     /* ---- MOBILE (VERY LIGHT) ---- */
//     if (isMobile) {
//       groupRef.current.rotation.y += delta * 0.7;
//       return;
//     }

//     /* ---- DESKTOP INTERACTION ---- */
//     const mx = mouse.current.x;
//     const my = mouse.current.y;

//     groupRef.current.rotation.x = THREE.MathUtils.lerp(
//       groupRef.current.rotation.x,
//       my * 0.2,
//       delta * 4
//     );

//     groupRef.current.rotation.y = THREE.MathUtils.lerp(
//       groupRef.current.rotation.y,
//       mx * 0.8 + Math.PI / 3,
//       delta * 4
//     );
//   });

//   return (
//     <group ref={groupRef}>
//       <primitive object={scene} />
//     </group>
//   );
// };

// /* ---------------- Background Canvas ---------------- */

// interface Background3DProps {
//   scale: number;
//   enabled: boolean;
// }

// const Background3D: FC<Background3DProps> = ({ scale, enabled }) => {
//   const isMobile =
//     typeof window !== "undefined" && window.innerWidth < 768;

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
//       {/* <Canvas
//         dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5)}
//         camera={{ position: [0, 0, 6], fov: 30 }}
//       > */}

//       <Canvas
//         dpr={2}
//         camera={{ position: [0, 0, 6], fov: 30 }}
//         gl={{ alpha: false }}
//         onCreated={({ gl }) => {
//           gl.setClearColor("#0b0f14", 1); // dark premium background
//         }}
//       >
//         {/* LIGHTS (CHEAP) */}
//         <ambientLight intensity={0.6} />
//         <hemisphereLight intensity={0.4} />
//         <directionalLight position={[3, 3, 3]} intensity={0.8} />

//         {/* ENVIRONMENT (DESKTOP ONLY) */}
//         {/* {!isMobile && <Environment preset="studio" />} */}
//         <Environment preset={isMobile ? "studio" : "studio"} />


//         <Suspense fallback={null}>
//           <BottleModel scale={scale} />
//         </Suspense>
//       </Canvas>
//     </motion.div>
//   );
// };

// export default memo(Background3D);

// /* ---------------- Preload ---------------- */
// useGLTF.preload("/models/bottle 3.glb");





//-------------------------------------------------------------------------------------------------------------------------------------



import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { FC, Suspense, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";

// ✅ selective three imports (instead of * as THREE)
import {
  Box3,
  Vector3,
  MathUtils,
  FrontSide,
  Group,
} from "three";

/* ---------------- Bottle Model ---------------- */

interface BottleModelProps {
  scale: number;
}

const BottleModel: FC<BottleModelProps> = ({ scale }) => {
  const { scene } = useGLTF("/models/bottle 3.glb") as {
    scene: Group;
  };

  const groupRef = useRef<Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const introDone = useRef(false);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= 1024;

  /* ---------------- Mouse (DESKTOP ONLY) ---------------- */
  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile]);

  /* ---------------- Setup ---------------- */
  useEffect(() => {
    // center model
    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    scene.position.sub(center);

    // optimize materials
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;

        if (child.material) {
          child.material.side = FrontSide;
          child.material.transparent = false;
          child.material.depthWrite = true;
          child.material.needsUpdate = false;
        }
      }
    });

    if (groupRef.current) {
      const finalScale = isMobile ? scale * 0.6 : scale * 0.9;
      groupRef.current.scale.setScalar(finalScale);

      groupRef.current.rotation.set(0, Math.PI / 12, 0);
      groupRef.current.position.set(0, -1.6, 0); // intro start
    }
  }, [scene, scale, isMobile]);

  /* ---------------- Animation Loop ---------------- */
  useFrame((_, delta) => {
    if (!groupRef.current) return;

    /* ---- INTRO ---- */
    if (!introDone.current) {
      groupRef.current.position.y = MathUtils.lerp(
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
      groupRef.current.rotation.y += delta * 0.7;
      return;
    }

    /* ---- DESKTOP INTERACTION ---- */
    const mx = mouse.current.x;
    const my = mouse.current.y;

    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      my * 0.2,
      delta * 4
    );

    groupRef.current.rotation.y = MathUtils.lerp(
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
    typeof window !== "undefined" && window.innerWidth <= 1024;

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
      <Canvas
        dpr={2}
        camera={{ position: [0, 0, 6], fov: 30 }}
        gl={{ alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor("#0b0f14", 1); // dark premium background
        }}
      >
        {/* LIGHTS */}
        <ambientLight intensity={0.6} />
        <hemisphereLight intensity={0.4} />
        <directionalLight position={[3, 3, 3]} intensity={0.8} />

        {/* KEEP ENVIRONMENT FOR SHINE */}
        <Environment preset="studio" />

        <Suspense fallback={null}>
          <BottleModel scale={scale} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default memo(Background3D);

/* ---------------- Preload ---------------- */
// OPTIONAL: comment this if you want smaller initial load
// useGLTF.preload("/models/bottle 3.glb");


