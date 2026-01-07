import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DifferenceTable } from "./DifferenceTable";

// export const StorySection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="section-container relative py-32" id="story">
//       {/* Background effects */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
//         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
//       </div>

//       <div className="container relative z-20 px-4">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <span className="text-neon-cyan uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
//               Our Story
//             </span>
//             <h2 className="font-display text-5xl md:text-7xl mb-6">
//               <span className="text-foreground">Sourced from </span>
//               <br />
//               <span className="gradient-text-water">Nature</span>
//             </h2>
//             <p className="text-muted-foreground text-lg leading-relaxed mb-8">
//               Deep beneath pristine mountain ranges, our water begins its journey through
//               ancient mineral-rich rock formations. This natural
//               filtration process enriches every drop with essential minerals and vitamins that your body craves
//             </p>

//             <div className="flex gap-8">
//               <div>
//                 <span className="font-display text-4xl text-primary">100%</span>
//                 <p className="text-muted-foreground text-sm">Natural Minerals</p>
//               </div>
//               <div>
//                 <span className="font-display text-4xl text-neon-cyan">0%</span>
//                 <p className="text-muted-foreground text-sm">Added Chemicals</p>
//               </div>
//               <div>
//                 <span className="font-display text-4xl text-soda-orange">pH</span>
//                 <p className="text-muted-foreground text-sm">Balanced Taste</p>
//               </div>
//             </div>


//           </motion.div>

//           {/* Right visual placeholder - 3D bottle takes this space */}

//           {/* <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="relative flex justify-end lg:pr-12 xl:pr-24"
//           >
//             <DifferenceTable />
//           </motion.div> */}


//         </div>
//       </div>

//       {/* RIGHT-SIDE DIFFERENCE TABLE (FLOATING) */}
//       <motion.div
//         initial={{ opacity: 0, x: 80 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.9, delay: 0.4 }}
//         className="
//     absolute
//     top-24
//     right-0
//     hidden
//     lg:block
//     pr-12
//     xl:pr-24
//     z-30
//     max-h-[calc(100vh-8rem)]
//     overflow-y-auto
//   "
//       >
//         <DifferenceTable />
//       </motion.div>

//     </section>
//   );
// };


export const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story"
      className="section-container relative py-32"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="container relative z-20 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <span className="text-neon-cyan uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
              Our Story
            </span>

            <h2 className="font-display text-5xl md:text-7xl mb-6">
              <span className="text-foreground">Sourced from</span>
              <br />
              <span className="gradient-text-water">Nature</span>
            </h2>

            <p className="
                  text-neutral-100
                  text-lg
                  leading-relaxed
                  mb-8
                  drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
            >
              Deep beneath pristine mountain ranges, our water begins its journey
              through ancient mineral-rich rock formations. This natural
              filtration process enriches every drop with essential minerals.
            </p>


            <div className="flex gap-8">
              <div>
                <span className="font-display text-4xl text-primary">
                  100%
                </span>
                <p className="text-muted-foreground text-md  text-green-400">
                  Natural Minerals
                </p>
              </div>
              <div>
                <span className="font-display text-4xl text-neon-cyan">
                  0%
                </span>
                <p className="text-muted-foreground text-md text-red-700">
                  Added Chemicals
                </p>
              </div>
              <div>
                <span className="font-display text-4xl text-soda-orange">
                  pH
                </span>
                <p className="text-muted-foreground text-md">
                  Balanced Taste
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT (Difference Table) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-full max-w-xl mx-auto  bg-white/5 p-6 rounded-lg shadow-lg"
          >
            <DifferenceTable />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
