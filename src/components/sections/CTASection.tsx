// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const CTASection = () => {
//   const ref = useRef(null);
//   const navigate = useNavigate();
  
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="section-container relative py-32 overflow-hidden">
//       {/* Background effects */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-water-deep/20 via-neon-cyan/10 to-transparent rounded-full blur-3xl" />
//       </div>

//       <div className="container relative z-20 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           {/* Logo/Brand mark */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mb-8"
//           >
//             <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-neon-cyan to-water-deep flex items-center justify-center">
//               <span className="font-display text-3xl text-background">Wu</span>
//             </div>
//           </motion.div>

//           <h2 className="font-display text-6xl md:text-8xl mb-6">
//             <span className="gradient-text-water ">white</span>
//             <span className="text-foreground text-glow">up</span>
//           </h2>

//           <p className="text-2xl lg:text-3xl text-muted-foreground font-body mb-4
//            text-primary  tracking-[0.1em] text-base md:text-lg font-semibold mb-4 block bg-black/20 backdrop-blur-sm text-glow">
//             Hydration Reimagined
//           </p>

//           <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12
//           text-white  mx-auto mb-12 font-body px-4 py-2 rounded-xl bg-black/20 backdrop-blur-sm">
//             Experience the perfect blend of nature's minerals and modern wellness.
//             Every sip brings you closer to optimal health.
//           </p>

//           {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//             <button className="btn-premium text-lg px-10 py-4">
//               Contact Us
//             </button>
//             <button className="btn-outline-neon text-lg px-10 py-4">
//               Learn More
//             </button>
//           </div> */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">

//             {/* PRIMARY CTA — ORANGE GRADIENT */}
//             <button
//               className="
//                   relative overflow-hidden
//                   text-lg font-semibold
//                   px-10 py-4 rounded-full
//                   text-white

//                   bg-gradient-to-r
//                   from-orange-400 via-orange-500 to-amber-400

//                   shadow-[0_10px_30px_rgba(251,146,60,0.45)]
//                   hover:shadow-[0_15px_45px_rgba(251,146,60,0.7)]
//                   hover:scale-105

//                   transition-all duration-300 ease-out
//                 "
//             >
//               Contact Us
//             </button>

//             {/* SECONDARY CTA — COOL BUSINESS COLOR */}
//             <button
//               onClick={() => navigate("/paper")}
//               className="
//                   relative overflow-hidden
//                   text-lg font-semibold
//                   px-10 py-4 rounded-full
//                   text-white

//                   bg-gradient-to-r
//                   from-purple-500 via-fuchsia-500 to-pink-500

//                   shadow-[0_10px_30px_rgba(168,85,247,0.45)]
//                   hover:shadow-[0_15px_45px_rgba(236,72,153,0.6)]
//                   hover:scale-105

//                   transition-all duration-300 ease-out
//                 "
//             >
//               Other Business
//             </button>
//           </div>


//           {/* Mineral badges */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             {['B12', 'Ca', 'Mg', 'K', 'Zn', 'Na'].map((mineral) => (
//               <span
//                 key={mineral}
//                 className="px-4 py-2 rounded-full glass text-neon-cyan text-sm font-semibold border border-neon-cyan/30"
//               >
//                 {mineral}
//               </span>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Footer info */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-20 pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm"
//         >
//           <p>© 2026 WhiteUp Mineral Water. All rights reserved.</p>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-neon-cyan transition-colors">Privacy</a>
//             <a href="#" className="hover:text-neon-cyan transition-colors">Terms</a>
//             <a href="#" className="hover:text-neon-cyan transition-colors">Contact</a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };




// -------------------------------------------------------------------------


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-container relative py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-water-deep/20 via-neon-cyan/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-neon-cyan to-water-deep flex items-center justify-center">
              <span className="font-display text-2xl text-background">
                whiteup
              </span>
            </div>
          </motion.div>

          <h2 className="font-display text-6xl md:text-8xl mb-6">
            <span className="gradient-text-water">white</span>
            <span className="text-foreground text-glow">up</span>
          </h2>

          <p className="tracking-[0.1em] text-base md:text-lg font-semibold mb-4 block bg-black/20 backdrop-blur-sm text-glow">
            Hydration Reimagined
          </p>

          <p className="text-white text-lg max-w-xl mx-auto mb-12 font-body px-4 py-2 rounded-xl bg-black/20 backdrop-blur-sm">
            Experience the perfect blend of nature's minerals and modern
            wellness. Every sip brings you closer to optimal health.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* Contact */}
            {/* <a
              href="tel:+919876543210"
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
            </a> */}

            {/* Other Business */}
            <button
              onClick={() => navigate("/about")}
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
              About us
            </button>
          </div>

          {/* Mineral badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {["B12", "Ca", "Mg", "K", "Zn", "Na"].map((mineral) => (
              <span
                key={mineral}
                className="px-4 py-2 rounded-full glass text-neon-cyan text-sm font-semibold border border-neon-cyan/30"
              >
                {mineral}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* FOOTER (Professional layout) */}
        <motion.div
        id="footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="
            mt-20 pt-8 border-t border-muted-foreground/20
            flex flex-col md:flex-row
            justify-between items-center
            gap-4
            text-muted-foreground text-sm
          "
        >
          {/* Copyright */}
          <p className="text-center md:text-left">
            © 2026 WhiteUp Mineral Water. All rights reserved.
          </p>

          {/* Location */}
          <p className="text-center">
            📍 Gujarat, India
          </p>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4 text-center md:text-right">
            <a
              href="tel:+919876543210"
              className="hover:text-neon-cyan transition-colors"
            >
              📞 +91 98765 43210
            </a>
            <a
              href="mailto:contact@whiteupwater.com"
              className="hover:text-neon-cyan transition-colors"
            >
              📧 contact@whiteupwater.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
