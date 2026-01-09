import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BottleGSAP = () => {
  const bottleRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const bottle = bottleRef.current;
    if (!bottle) return;

    // 🔑 CLEAR any old transforms (important on refresh)
    gsap.set(bottle, {
      clearProps: "transform",
      willChange: "transform",
    });

    /* ---------------- INTRO SET (OFFSCREEN) ---------------- */
    gsap.set(bottle, {
      y: -400,       // clearly off-screen
      scale: 1.6,
      opacity: 1,
    });

    /* ---------------- INTRO TIMELINE ---------------- */
    const introTL = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: () => {
        // 🔑 Allow ScrollTrigger to take control AFTER intro
        ScrollTrigger.refresh();
      },
    });

    introTL.to(bottle, {
      y: 0,
      scale: 1,
      duration: 1.8,
    });

    /* ---------------- SCROLL PARALLAX (HERO) ---------------- */
    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.2,
      onUpdate: (self) => {
        gsap.to(bottle, {
          y: -self.progress * 120,
          scale: 1 - self.progress * 0.3,
          ease: "none",
          overwrite: "auto",
        });
      },
    });

    /* ---------------- VANISH DURING CRAFT ---------------- */
    ScrollTrigger.create({
      trigger: "#craft",
      start: "top center",
      end: "bottom top",
      scrub: 1.2,
      onUpdate: (self) => {
        gsap.to(bottle, {
          opacity: 1 - self.progress,
          scale: 1 - self.progress * 0.2,
          ease: "none",
          overwrite: "auto",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      introTL.kill();
    };
  }, []);

  return (
    <div
      className="
        fixed
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        z-0
        pointer-events-none
      "
    >
      <img
        ref={bottleRef}
        src="/images/bottle.webp"
        alt="Bottle"
        className="
          w-[300px]
          select-none
          drop-shadow-[0_70px_120px_rgba(0,0,0,0.6)]
        "
        draggable={false}
      />
    </div>
  );
};

export default BottleGSAP;
