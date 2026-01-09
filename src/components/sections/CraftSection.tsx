// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// const minerals = [
//   {
//     title: "Vitamin B12",
//     description: "Essential for energy production and nervous system health. Supports cognitive function.",
//     icon: "💎",
//     amount: "2.4μg"
//   },
//   {
//     title: "Calcium (Ca)",
//     description: "Strengthens bones and teeth. Supports muscle function and heart health.",
//     icon: "🦴",
//     amount: "80mg"
//   },
//   {
//     title: "Magnesium (Mg)",
//     description: "Aids muscle relaxation and energy metabolism. Reduces fatigue and stress.",
//     icon: "⚡",
//     amount: "25mg"
//   },
//   {
//     title: "Potassium (K)",
//     description: "Regulates fluid balance and blood pressure. Essential for heart function.",
//     icon: "❤️",
//     amount: "10mg"
//   },
//   {
//     title: "Zinc (Zn)",
//     description: "Boosts immune system and wound healing. Supports skin health.",
//     icon: "🛡️",
//     amount: "1.5mg"
//   },
//   {
//     title: "Sodium (Na)",
//     description: "Maintains fluid balance and supports nerve function. Natural electrolyte.",
//     icon: "💧",
//     amount: "15mg"
//   }
// ];

// export const CraftSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="section-container relative py-32">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       <div className="container relative z-20 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
        

//           <span
//             className="
//                 text-primary uppercase font-semibold block
//                 tracking-[0.2em]

//                 /* Responsive text size */
//                 text-xs
//                 sm:text-sm
//                 md:text-base
//                 lg:text-lg
//                 xl:text-xl

//                 /* Spacing & style */
//                 px-4 py-2
//                 rounded-full
//                 backdrop-blur-sm bg-black/30
//                 text-orange-300
//                 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]
//                 text-glow
//               "
//           >
//             The White Up
//           </span>



//           <h2 className="font-display text-5xl md:text-7xl mb-6">
//             <span className="text-foreground  bg-black/20 backdrop-blur-sm" >Vitamins &</span>
//             <br />
//             <span
//               className="gradient-text   bg-black/20 backdrop-blur-sm"
//               style={{
//                 WebkitTextStroke: "1px rgba(255,255,255,0.4)",
//               }}
//             >
//               Minerals
//             </span>


//           </h2>
//           <p
//             // className="text-muted-foreground text-lg max-w-2xl mx-auto"
//             className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body px-4 py-2 rounded-xl bg-black/20 backdrop-blur-sm"
//           >
//             Every sip is a symphony of carefully curated ingredients,
//             crafted with precision and passion.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-black/10 backdrop-blur-sm">
//           {minerals.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.1 * index }}
//               className="glass rounded-2xl p-8 text-center group hover:bg-card/80 transition-all duration-500"
//             >
//               <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
//                 {item.icon}
//               </div>
//               <h3 className="font-display text-xl text-foreground mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-muted-foreground text-sm leading-relaxed text-white text-sm md:text-xl max-w-2xl mx-auto mb-12 font-body px-4 py-2 rounded-xl">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl" />
//       <div className="absolute right-10 top-1/3 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      
//     </section>
//   );
// };



//---------------------------------------------------------------------------------------------------


// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const minerals = [
//   { title: "Vitamin B12", icon: "💎" },
//   { title: "Calcium (Ca)", icon: "🦴" },
//   { title: "Magnesium (Mg)", icon: "⚡" },
//   { title: "Potassium (K)", icon: "❤️" },
//   { title: "Zinc (Zn)", icon: "🛡️" },
//   { title: "Sodium (Na)", icon: "💧" },
// ];

// export const CraftSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const bubbleRefs = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const LEFT_X = -360;
//     const RIGHT_X = 360;

//     // 🔒 FIXED vertical slots (NO OVERLAP EVER)
//     const Y_SLOTS = [-220, -60, 100];

//     bubbleRefs.current.forEach((bubble, i) => {
//       const isLeft = i < 3;
//       const slotIndex = isLeft ? i : i - 3;

//       const targetX = isLeft ? LEFT_X : RIGHT_X;
//       const targetY = Y_SLOTS[slotIndex];

//       // ENTRY animation (center → slot)
//       gsap.fromTo(
//         bubble,
//         {
//           x: 0,
//           y: 0,
//           scale: 0,
//           opacity: 0,
//         },
//         {
//           x: targetX,
//           y: targetY,
//           scale: 1,
//           opacity: 1,
//           duration: 1.4,
//           ease: "power3.out",
//           delay: i * 0.12,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%",
//           },
//         }
//       );

//       // 🫧 FLOATING (SAFE — uses yPercent, not y)
//       gsap.to(bubble, {
//         yPercent: gsap.utils.random(-6, 6),
//         duration: gsap.utils.random(3, 5),
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         delay: i * 0.4,
//       });
//     });
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen py-40 overflow-hidden flex items-center justify-center"
//     >
//       {/* Heading */}
//       <div className="absolute top-24 text-center z-10">
//         <span className="uppercase tracking-[0.3em] text-orange-300 text-sm">
//           The White Up
//         </span>
//         <h2 className="font-display text-5xl md:text-7xl mt-4">
//           <span className="text-white">Mineral</span>{" "}
//           <span className="gradient-text">Composition</span>
//         </h2>
//       </div>

//       {/* Bubble Stage */}
//       <div className="relative w-full h-[700px] flex items-center justify-center">
//         {minerals.map((m, i) => (
//           <div
//             key={m.title}
//             ref={(el) => {
//               if (el) bubbleRefs.current[i] = el;
//             }}
//             className="
//               absolute
//               w-40 h-40
//               rounded-full
//               flex flex-col items-center justify-center
//               text-center
//               bg-white/10
//               backdrop-blur-xl
//               border border-white/20
//               shadow-[0_0_40px_rgba(0,255,255,0.25)]
//               text-white
//               pointer-events-none
//             "
//           >
//             <div className="text-3xl mb-2">{m.icon}</div>
//             <div className="font-semibold tracking-wide text-sm">
//               {m.title}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Ambient Glows */}
//       <div className="absolute left-1/3 top-1/2 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-3xl" />
//       <div className="absolute right-1/4 top-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
//     </section>
//   );
// };


// ---------------------------------------------------------------------------------------------------

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const minerals = [
  { title: "Vitamin B12", icon: "💎" },
  { title: "Calcium (Ca)", icon: "🦴" },
  { title: "Magnesium (Mg)", icon: "⚡" },
  { title: "Potassium (K)", icon: "❤️" },
  { title: "Zinc (Zn)", icon: "🛡️" },
  { title: "Sodium (Na)", icon: "💧" },
];

type Point = { x: number; y: number };

export const CraftSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bubbleRefs = useRef<HTMLDivElement[]>([]);
  const positions = useRef<Point[]>([]);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  /* ---------------- FIXED SIZES ---------------- */
  const BUBBLE_SIZE = isMobile ? 90 : 150;
  const HALF = BUBBLE_SIZE / 2;
  const SAFE_DISTANCE = BUBBLE_SIZE + (isMobile ? 20 : 30);

  /* ---------------- STAGE ---------------- */
  const STAGE_WIDTH = isMobile ? window.innerWidth : 900;
  const STAGE_HEIGHT = isMobile ? 420 : 520;

  const MIN_X = -STAGE_WIDTH / 2 + HALF;
  const MAX_X = STAGE_WIDTH / 2 - HALF;
  const MIN_Y = -STAGE_HEIGHT / 2 + HALF;
  const MAX_Y = STAGE_HEIGHT / 2 - HALF;

  /* ---------------- OVERLAP CHECK ---------------- */
  const overlaps = (p: Point) =>
    positions.current.some(
      q => Math.hypot(p.x - q.x, p.y - q.y) < SAFE_DISTANCE
    );

  /* ---------------- SAFE POSITION GENERATOR ---------------- */
  const generatePosition = (): Point => {
    let tries = 0;

    while (tries < 120) {
      const x = gsap.utils.random(MIN_X, MAX_X);
      const y = gsap.utils.random(MIN_Y, MAX_Y);

      const point = { x, y };

      if (!overlaps(point)) {
        positions.current.push(point);
        return point;
      }

      tries++;
    }

    // Guaranteed fallback (never overlaps, always visible)
    const index = positions.current.length;
    return {
      x: 0,
      y: MIN_Y + index * SAFE_DISTANCE,
    };
  };

  /* ---------------- ANIMATION ---------------- */
  useLayoutEffect(() => {
    positions.current = [];

    bubbleRefs.current.forEach((bubble, i) => {
      const { x, y } = generatePosition();

      /* Initial state */
      gsap.set(bubble, {
        x,
        y,
        scale: 0.85,
        opacity: 0,
        force3D: true,
        willChange: "transform",
      });

      /* Entrance */
      gsap.to(bubble, {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        delay: i * 0.08,
        ease: "power3.out",
      });

      /* Smooth bounded float (ABSOLUTE) */
      gsap.to(bubble, {
        y: y + gsap.utils.random(-10, 10),
        duration: gsap.utils.random(4, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="craft"
      className="relative min-h-screen py-32 overflow-hidden flex items-center justify-center"
    >
      {/* Heading */}
      <div className="absolute top-20 text-center z-10 px-4">
        <span className="uppercase tracking-[0.3em] text-orange-300 text-xs backdrop-blur-sm bg-black/30 px-4 py-1 rounded-full">
          The White Up
        </span>
        <h2 className="font-display text-4xl sm:text-6xl mt-4">
          <span className="text-white">Mineral</span>{" "}
          <span className="gradient-text">Composition</span>
        </h2>
      </div>

      {/* Bubble Stage */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: STAGE_WIDTH,
          height: STAGE_HEIGHT,
        }}
      >
        {minerals.map((m, i) => (
          <div
            key={m.title}
            ref={el => el && (bubbleRefs.current[i] = el)}
            style={{
              width: BUBBLE_SIZE,
              height: BUBBLE_SIZE,
            }}
            className="
              absolute
              rounded-full
              flex flex-col items-center justify-center
              text-center
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              shadow-[0_0_30px_rgba(0,255,255,0.25)]
              text-white
              pointer-events-none
            "
          >
            <div className="text-xl sm:text-2xl mb-1">
              {m.icon}
            </div>
            <div className="font-semibold tracking-wide text-[10px] sm:text-sm px-2">
              {m.title}
            </div>
          </div>
        ))}
      </div>

      {/* Ambient Glows */}
      <div className="absolute left-1/3 top-1/2 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute right-1/4 top-1/3 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl hidden sm:block" />
    </section>
  );
};
