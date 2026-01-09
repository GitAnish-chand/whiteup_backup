// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// const visionItems = [
//   {
//     year: "2026",
//     title: "Mineral water",
//     description: "Recommended daily intake of mineral water for a healthy lifestyle."
//   },
//   {
//     year: "2028",
//     title: "Global Expansion",
//     description: "Bringing refreshment innovation to 50 new markets worldwide."
//   },
//   {
//     year: "2030",
//     title: "Zero Waste",
//     description: "100% recyclable packaging and zero waste production facilities."
//   }
// ];

// export const VisionSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="section-container relative py-32 overflow-hidden ">
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
//       {/* Animated background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent animate-pulse-glow" />
//       </div>

//       <div className="container relative z-20 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1.1 }}
//           className="text-center mb-20"
//         >
//           <span className=" text-primary uppercase tracking-[0.3em] text-base md:text-lg font-semibold mb-4 block bg-black/20 backdrop-blur-sm text-glow">
//             Our Vision
//           </span>
//           <h2 className="font-display text-5xl md:text-7xl mb-6 flex flex-col">
//             <span className=" bg-black/20 backdrop-blur-sm text-glow">HYDRATING </span>
//             <span className="text-foreground gradient-text bg-black/20 backdrop-blur-sm "> THE FUTURE</span>
//           </h2>
//           <p className=" text-white text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body px-4 py-2 rounded-xl bg-black/20 backdrop-blur-sm">
//             We're not just selling water – we're pioneering a sustainable future
//             for the industry and the planet.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative max-w-4xl mx-auto">
//           {/* Center line */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-neon-cyan to-primary" />

//           {visionItems.map((item, index) => (
//             <motion.div
//               key={item.year}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 * index }}
//               className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'
//                 }`}
//             >
//               {/* Timeline dot */}
//               <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-cyan shadow-glow-neon z-10" />

//               <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
//                 <span className="font-display text-4xl text-primary">{item.year}</span>
//                 <h3 className="font-display text-2xl text-foreground mt-2">{item.title}</h3>
//                 <p className="text-muted-foreground mt-2">{item.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Impact stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24"
//         >
//           {[
//             { value: "Natural", label: "Mineral Source", color: "from-emerald-400 to-teal-300" },
//             { value: "Pure", label: "Carefully Filtered", color: "from-cyan-400 to-sky-300" },
//             { value: "Balanced", label: "Taste Profile", color: "from-indigo-400 to-purple-400" },
//             { value: "Safe", label: "Quality Checked", color: "from-orange-400 to-amber-300" }
//           ].map((stat) => (
//             <div key={stat.label} className="text-center">
//               <span
//                 className={`
//           font-display font-semibold
//           text-3xl sm:text-4xl md:text-5xl lg:text-6xl
//           bg-gradient-to-r ${stat.color}
//           bg-clip-text text-transparent
//         `}
//               >
//                 {stat.value}
//               </span>

//               <p className="text-muted-foreground text-sm sm:text-base mt-3">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };



// --------- -------------------------------------------------------------



import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";

const visionItems = [
  {
    year: "2026",
    title: "Mineral water",
    description: "Recommended daily intake of mineral water for a healthy lifestyle."
  },
  {
    year: "2028",
    title: "Global Expansion",
    description: "Bringing refreshment innovation to 50 new markets worldwide."
  },
  {
    year: "2030",
    title: "Zero Waste",
    description: "100% recyclable packaging and zero waste production facilities."
  }
];

export const VisionSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  /* 🔑 Scroll progress bound to this section */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  /* 🔹 Timeline line draw */
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section
      ref={ref}
      className="section-container relative py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

      {/* Background (UNCHANGED) */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent animate-pulse-glow" />
      </div>

      <div className="container relative z-20 px-4">
        {/* Header (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="text-center mb-20"
        >
          <span className="text-primary uppercase tracking-[0.3em] text-base md:text-lg font-semibold mb-4 block bg-black/20 backdrop-blur-sm text-glow">
            Our Vision
          </span>
          <h2 className="font-display text-5xl md:text-7xl mb-6 flex flex-col">
            <span className="bg-black/20 backdrop-blur-sm text-glow">
              HYDRATING
            </span>
            <span className="gradient-text bg-black/20 backdrop-blur-sm">
              THE FUTURE
            </span>
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body px-4 py-2 rounded-xl bg-black/20 backdrop-blur-sm">
            We're not just selling water – we're pioneering a sustainable future
            for the industry and the planet.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* 🔥 CENTER LINE – DRAWS WITH SCROLL */}
          <motion.div
            style={{
              scaleY: lineScale,
              opacity: lineOpacity,
              transformOrigin: "top"
            }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-neon-cyan to-primary"
          />

          {visionItems.map((item, index) => {
            /* Scroll windows per item */
            const start = index / visionItems.length;
            const end = start + 0.1;

            

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1]
            );

            const x = useTransform(
              scrollYProgress,
              [start, end],
              [index % 2 === 0 ? -120 : 120, 0]
            );

            const scale = useTransform(
              scrollYProgress,
              [start, end],
              [0.95, 1]
            );

            return (
              <motion.div
                key={item.year}
                style={{ opacity, x }}
                className={`relative flex items-center mb-16 ${index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                  }`}
              >
                {/* 🔹 DOT – CHECKPOINT */}
                <motion.div
                  style={{ opacity, scale }}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-cyan shadow-glow-neon z-10"
                />

                <div
                  className={`w-5/12 ${index % 2 === 0
                      ? "pr-12 text-right"
                      : "pl-12 text-left"
                    }`}
                >
                  {/* 🔹 YEAR EMPHASIS */}
                  <motion.span
                    style={{ scale }}
                    className="font-display text-4xl text-primary inline-block"
                  >
                    {item.year}
                  </motion.span>

                  <h3 className="font-display text-2xl text-foreground mt-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact stats (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24"
        >
          {[
            { value: "Natural", label: "Mineral Source", color: "from-emerald-400 to-teal-300" },
            { value: "Pure", label: "Carefully Filtered", color: "from-cyan-400 to-sky-300" },
            { value: "Balanced", label: "Taste Profile", color: "from-indigo-400 to-purple-400" },
            { value: "Safe", label: "Quality Checked", color: "from-orange-400 to-amber-300" }
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <span
                className={`font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value}
              </span>
              <p className="text-muted-foreground text-sm sm:text-base mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
