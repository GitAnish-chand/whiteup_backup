// import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
// import { useEffect } from "react";

// const BottleParallax = () => {
//   const { scrollYProgress } = useScroll();

//   /* ---------- Scroll Parallax ---------- */
//   const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

//   /* ---------- Mouse Parallax (Desktop only) ---------- */
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   useEffect(() => {
//     const isMobile = window.innerWidth < 768;
//     if (isMobile) return;

//     const handleMove = (e: MouseEvent) => {
//       mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
//       mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
//     };

//     window.addEventListener("mousemove", handleMove);
//     return () => window.removeEventListener("mousemove", handleMove);
//   }, [mouseX, mouseY]);

//   return (
//     <div className="fixed inset-0 -z-10 flex items-center justify-center pointer-events-none">
//       <motion.img
//         src="/images/bottle.webp"
//         alt="Premium Bottle"
//         className="
//           w-[260px]
//           sm:w-[300px]
//           md:w-[340px]
//           drop-shadow-[0_50px_90px_rgba(0,0,0,0.5)]
//         "
//         style={{
//           y,
//           scale,
//           x: mouseX,
//         }}
//       />
//     </div>
//   );
// };

// export default BottleParallax;
