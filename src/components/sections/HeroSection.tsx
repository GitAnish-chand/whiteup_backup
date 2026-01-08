
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
    <section ref={sectionRef} className="section-container relative min-h-screen" id="hero">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 text-center px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] leading-none mb-6">
            <span className="gradient-text gradient-red-classic">White</span>
            <span className="text-foreground text-glow">up</span>
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
          Where innovation meets refreshment. Experience the future of craft beverages.
        </motion.p>
        

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-10">
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

            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">

            {/* PRIMARY CTA — ORANGE GRADIENT */}
            <button
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
        
        
      </div>
      



      
    </section>
  );
};
