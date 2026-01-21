
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";



interface HeroSectionProps {
  setRotationY: (value: number) => void;
}

export const HeroSection = ({ setRotationY }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();


  // Section-based scroll (SAFE)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Map scroll → rotation (0 → ~160deg)
  const rotateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.PI * 0.9]
  );

  // Bridge scroll value → Three.js
  useEffect(() => {
    return rotateY.on("change", (v) => {
      if (!Number.isFinite(v)) return;
      setRotationY(v);
    });
  }, [rotateY, setRotationY]);

  return (
    <section ref={sectionRef} className="section-container relative min-h-screen text-center" id="hero">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-20  px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] leading-none mb-6 ">
            <span className="gradient-text gradient-red-classic z-10 ">White</span>
            {/* <span className="inline-block w-12 md:w-20 lg:w-28" /> */}
            {/* <span className="w-full h-64 md:h-auto md:w-[300px] lg:w-[450px] " /> */}
            <span className="text-foreground text-glow ">up</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className=" text-white text-base md:text-lg lg:text-xl
            font-body px-4 py-7
            rounded-xl bg-black/20 backdrop-blur-sm"
        >
          Pure innovation. Elevated hydration.
        </motion.p>
        

        {/* Scroll indicator */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1.5 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2"
>
  <div className="flex flex-col items-center gap-10 ">
    <span
      className="
        text-sm uppercase tracking-widest
        px-2 py-2 rounded-full mb-2
        backdrop-blur-sm bg-black/30
        text-orange-300
        drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]
      "
    >
      Scroll to explore
    </span>

    <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2 ">
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
      />
    </div>
  </div>
</motion.div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center  ">

            {/* PRIMARY CTA — ORANGE GRADIENT */}
            <button

              onClick={() => {
                const footer = document.getElementById("footer");
                footer?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="
                  relative overflow-hidden
                  text-lg font-semibold
                  px-10 py-4 rounded-full
                  text-white

                  bg-gradient-to-r
                  from-orange-400 via-orange-500 to-amber-400

                  shadow-[0_10px_30px_rgba(251,146,60,0.45)]
                  hover:shadow-[0_15px_45px_rgba(251,146,60,0.7)]
                  hover:scale-105

                  transition-all duration-300 ease-out
                  
                "
            >
              Contact Us
            </button>

            {/* SECONDARY CTA — COOL BUSINESS COLOR */}
            {/* <button
              onClick={() => navigate("/other-business")}
              className="
                  relative overflow-hidden
                  text-lg font-semibold
                  px-10 py-4 rounded-full
                  text-white

                  bg-gradient-to-r
                  from-purple-500 via-fuchsia-500 to-pink-500

                  shadow-[0_10px_30px_rgba(168,85,247,0.45)]
                  hover:shadow-[0_15px_45px_rgba(236,72,153,0.6)]
                  hover:scale-105

                  transition-all duration-300 ease-out
                "
            >
              Other Business
            </button> */}
          </div>    
          {/* <button
              className="
              lg:left-[28%]
              // sm:left-[45%]
                  relative overflow-hidden
                  text-lg font-semibold
                  px-10 py-4 rounded-full
                  text-white

                  bg-gradient-to-r
                  from-orange-400 via-orange-500 to-amber-400

                  shadow-[0_10px_30px_rgba(251,146,60,0.45)]
                  hover:shadow-[0_15px_45px_rgba(251,146,60,0.7)]
                  hover:scale-105
                  transition-all duration-300 ease-out
                  
                "
            >
              Contact Us
            </button> */}
      </div>
    </section>
  );
};









// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef } from "react";

// interface HeroSectionProps {
//   setRotationY: (value: number) => void;
// }
// export const HeroSection = ({ setRotationY }: HeroSectionProps) => {
//   const sectionRef = useRef<HTMLElement>(null);

//   // ... (Keep your useScroll and useEffect logic here)

//   return (
//     <section 
//       ref={sectionRef} 
//       className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center" 
//       id="hero"
//     >
//       {/* 1. CONTENT CONTAINER */}
//       <div className="container relative z-20 mx-auto px-4 flex flex-col items-center">
        
//         {/* 2. THE TITLE HOLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//           className="w-full"
//         >
//           {/* CONTROLLING THE GAP: 
//               - 'gap-y-64' creates vertical space for the bottle on mobile.
//               - 'md:gap-x-[15vw]' creates a responsive horizontal hole for the bottle.
//               - Using 'vw' (viewport width) ensures the gap shrinks/grows with the screen.
//           */}
//           <h1 className="flex flex-col md:flex-row items-center justify-center 
//                          font-display text-[18vw] md:text-[12vw] lg:text-[11rem] 
//                          leading-[0.8] tracking-tighter uppercase italic
//                          gap-y-64 md:gap-y-0 md:gap-x-[15vw] lg:gap-x-[20vw]">
            
//             <span className="gradient-text gradient-red-classic">White</span>
            
//             <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Up</span>
//           </h1>
//         </motion.div>

//         {/* 3. SUBTEXT & BUTTON (Positioned to avoid bottle base) */}
//         <div className="mt-10 md:mt-20 flex flex-col items-center gap-8 text-center">
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="max-w-md text-white/70 text-base md:text-lg px-6 py-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/5"
//           >
//             Where innovation meets refreshment. Experience the future of craft beverages.
//           </motion.p>

//           <button className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-xl hover:scale-105 transition-transform">
//             CONTACT US
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };