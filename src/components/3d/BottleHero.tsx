// import { FC, useEffect, useState } from "react";
// import Background3D from "./Background3D";

// interface BottleHeroProps {
//   scale: number;
//   enabled: boolean;
// }

// const BottleHero: FC<BottleHeroProps> = ({ scale, enabled }) => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();

//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   // 📱 MOBILE → STATIC IMAGE
//   if (isMobile) {
//     return (
//       <div
//         className="
//           fixed inset-0 -z-10 bg-background flex items-center justify-center
//         "
//       >
//         {/* <img
//           src="/images/bottle.webp"
//           alt="WhiteUp Bottle"
//           className="
//             w-[260px]
//             sm:w-[300px]
//             md:w-[340px]
//             object-contain
//             drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
//             animate-fade-up
//           "
//         /> */}
//         <img
//           src="/images/bottle.webp"
//           alt="Bottle"
//           className="w-[300px] border-4 border-yellow-400"
//           style={{
//             backgroundColor: "#111827",
//             opacity: 1,
//             filter: "contrast(1.2) brightness(1.2)",
//           }}
//         />


//       </div>
//     );
//   }

//   // 🖥 DESKTOP → FULL 3D
//   return <Background3D scale={scale} enabled={enabled} />;
// };

// export default BottleHero;
