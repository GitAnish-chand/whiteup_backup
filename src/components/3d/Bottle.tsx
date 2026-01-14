// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Bottle = () => {
//     const bottleRef = useRef<HTMLImageElement>(null);

//     useLayoutEffect(() => {
//         const bottle = bottleRef.current;
//         if (!bottle) return;

//         if (window.innerWidth < 768) {
//             ScrollTrigger.getAll().forEach(t => t.kill());
//         }


//         /* ---------------- BASE SETUP ---------------- */
//         gsap.set(bottle, {
//             y: -400,
//             scale: 1.6,
//             opacity: 1,
//             force3D: true,
//             willChange: "transform",
//         });

//         /* ---------------- INTRO (ONCE) ---------------- */
//         const introTL = gsap.timeline({
//             defaults: { ease: "power4.out" },
//             onComplete: () => ScrollTrigger.refresh(),
//         });

//         introTL.to(bottle, {
//             y: 0,
//             scale: 1,
//             duration: 1.8,
//         });

//         /* ---------------- HERO PARALLAX ---------------- */
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: "#hero",
//                 start: "top top",
//                 end: "bottom top",
//                 scrub: 0.6, // 👈 lower = smoother
//                 invalidateOnRefresh: true,
//             },
//         })
//             .to(bottle, {
//                 y: -140,
//                 scale: 0.7,
//                 ease: "none",
//             });

//         /* ---------------- FADE OUT (CRAFT) ---------------- */
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: "#craft",
//                 start: "top center",
//                 end: "bottom top",
//                 scrub: 0.8,
//             },
//         })
//             .to(bottle, {
//                 opacity: 0,
//                 scale: 0.85,
//                 ease: "none",
//             });

//         return () => {
//             ScrollTrigger.getAll().forEach(t => t.kill());
//             introTL.kill();
//         };
//     }, []);

//     return (
//         <div
//             className="
//         fixed
//         top-[58%] left-1/2
//         -translate-x-1/2 -translate-y-1/2
//         z-0
//         pointer-events-none
//       "
//         >
//             <img
//                 ref={bottleRef}
//                 src="/images/bottle_plain.webp"
//                 alt="Bottle"
//                 draggable={false}
//                 className="
//           w-[450px]
//           select-none
//           drop-shadow-[0_60px_120px_rgba(0,0,0,0.5)]
//         "
//             />
//         </div>
//     );
// };

// export default Bottle;






import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bottle = () => {
  const bottleRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const bottle = bottleRef.current;
    if (!bottle) return;

    if (window.innerWidth < 768) {
      ScrollTrigger.getAll().forEach(t => t.kill());
    }

    gsap.set(bottle, {
      y: -400,
      scale: 1.6,
      opacity: 1,
      force3D: true,
    });

    const introTL = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: () => ScrollTrigger.refresh(),
    });

    introTL.to(bottle, {
      y: 0,
      scale: 1,
      duration: 1.8,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    }).to(bottle, {
      y: -140,
      scale: 0.7,
      ease: "none",
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#craft",
        start: "top center",
        end: "bottom top",
        scrub: 0.8,
      },
    }).to(bottle, {
      opacity: 0,
      scale: 0.85,
      ease: "none",
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
        top-[57%] left-[50%]
        -translate-x-1/2 -translate-y-1/2
        z-10
        pointer-events-none
      "
    >
      <img
        ref={bottleRef}
        src="/images/bottle_water.png"
        alt="Bottle"
        draggable={false}
        className="
          w-[500px] md:w-[480px]
          select-none
          drop-shadow-[0_60px_120px_rgba(0,0,0,0.55)]
        "
      />
    </div>
  );
};

export default Bottle;

