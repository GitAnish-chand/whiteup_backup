
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BubbleParticles } from "@/components/effects/BubbleParticles";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { CraftSection } from "@/components/sections/CraftSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { CTASection } from "@/components/sections/CTASection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { ProductsSection } from "@/components/sections/ProductsSection";
import PrebookedCustomers from "@/components/sections/PreBookedCustomers";
import Bottle from "@/components/3d/Bottle";


import Background3D from "@/components/3d/Background3D";


// import BottleHero from "@/components/3d/BottleHero";
// import BottleParallax from "@/components/3d/BottleParallax";



const Index = () => {
  const { scrollProgress } = useScrollProgress();

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const lastScrollRef = useRef(0);

  const [rotationY, setRotationY] = useState(0);
  const [bottleScale, setBottleScale] = useState(0.1);

  // 👇 controls fade-out
  const [showBottle, setShowBottle] = useState(true);

  /* ---------------------------------------------
     Fade bottle AFTER story section
  --------------------------------------------- */
  // useEffect(() => {
  //   const story = document.getElementById("craft");
  //   if (!story) return;

  //   const onScroll = () => {
  //     const rect = story.getBoundingClientRect();

  //     // Story fully passed → fade bottle
  //     if (rect.bottom <= 0) {
  //       setShowBottle(false);
  //     }

  //     // When story is visible again → show bottle
  //     if (rect.top < window.innerHeight && rect.bottom > 0) {
  //       setShowBottle(true);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  /* ---------------------------------------------
   Fade bottle AFTER Craft section
--------------------------------------------- */
useEffect(() => {
  const craft = document.getElementById("craft");
  if (!craft) return;

  const onScroll = () => {
    const rect = craft.getBoundingClientRect();

    // Craft fully passed → hide bottle
    if (rect.bottom <= 0) {
      setShowBottle(false);
      return;
    }

    // Craft visible or above → show bottle
    if (rect.top < window.innerHeight) {
      setShowBottle(true);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on load

  return () => window.removeEventListener("scroll", onScroll);
}, []);




  /* ---------------------------------------------
     Bottle scaling (Hero + Story)
  --------------------------------------------- */
  useEffect(() => {
    const hero = document.getElementById("craft");
    if (!hero) return;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const heroHeight = rect.height;

      const progress = Math.min(
        Math.max(-rect.top / heroHeight, 0),
        1
      );

      const BASE_SCALE = 0.08;
      const MIN_SCALE = 0.08;

      const scale =
        BASE_SCALE - progress * (BASE_SCALE - MIN_SCALE);

      setBottleScale(scale);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------------------------------------
     Sound effects
  --------------------------------------------- */
  const { playBubbleSound } = useSoundEffects({
    enabled: soundEnabled,
    volume: 0.4,
  });

  // useEffect(() => {
  //   const scrollDelta = Math.abs(scrollProgress - lastScrollRef.current);

  //   if (scrollDelta > 0.01 && soundEnabled) {
  //     if (scrollProgress > 0.01 && scrollProgress < 0.5) {
  //       playBubbleSound();
  //     }
  //   }

  //   lastScrollRef.current = scrollProgress;
  // }, [scrollProgress, soundEnabled, playBubbleSound]);

  useEffect(() => {
    if (!soundEnabled) return;

    const delta = scrollProgress - lastScrollRef.current;
    const absDelta = Math.abs(delta);
    const now = performance.now();

    // Only downward scroll
    if (delta <= 0) {
      lastScrollRef.current = scrollProgress;
      return;
    }

    // Ignore tiny movement
    if (absDelta < 0.01) {
      lastScrollRef.current = scrollProgress;
      return;
    }

    // Cooldown (natural bubbling)
    if (!lastScrollRef.current || now - lastScrollRef.current < 120) {
      lastScrollRef.current = scrollProgress;
      return;
    }

    // Active bubbling zone
    if (scrollProgress > 0.02 && scrollProgress < 0.5) {
      playBubbleSound();
      lastScrollRef.current = now;
    }
  }, [scrollProgress, soundEnabled, playBubbleSound]);




  /* ---------------------------------------------
     Loader
  --------------------------------------------- */

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Loader */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-soda-orange animate-pulse" />
              <div className="flex items-center gap-1">
                <h2 className="font-display text-4xl gradient-text">
                  WHITE
                </h2>
                <h2 className="font-display text-4xl text-foreground text-glow">
                  UP
                </h2>
              </div>
              <p className="text-muted-foreground mt-2">
                Loading Experience...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sound toggle */}
      <button
        onClick={toggleSound}
        className="fixed top-6 right-6 z-40 glass rounded-full p-3 hover:bg-card/80 transition-all duration-300"
      >
        {soundEnabled ? "🔊" : "🔇"}
      </button>

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-40">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-neon-cyan to-primary"
          style={{ scaleX: scrollProgress, transformOrigin: "left" }}
        />
      </div>

      {/* Bubble background */}
      <BubbleParticles scrollProgress={scrollProgress} />

      {/* Content */}
      <div className="relative z-20">
        {/* 3D Bottle with fade */}
        <Background3D scale={bottleScale} enabled={showBottle} />

        {/* Bottle (Mobile image / Desktop 3D) */}
        {/* <BottleHero scale={bottleScale} enabled={showBottle} /> */}
        {/* <BottleParallax /> */}
        {/* <Bottle /> */}

        <HeroSection setRotationY={setRotationY} />
        <CraftSection />
        <StorySection /> 
        <PrebookedCustomers />
        <VisionSection />
        <ProductsSection />
        <CTASection />
      </div>
    </div>
  );
};

export default Index;
