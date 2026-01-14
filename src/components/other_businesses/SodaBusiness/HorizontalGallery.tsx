// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';

import factory1 from '@/assets/soda_business/factory-1.jpg';
import factory2 from '@/assets/soda_business/factory-2.jpg';
import factory3 from '@/assets/soda_business/factory-3.jpg';
import factory4 from '@/assets/soda_business/factory-4.jpg';

// const galleryImages = [
//   { src: factory1, title: "Precision Filling", description: "Automated bottle filling systems" },
//   { src: factory2, title: "Purification", description: "Multi-stage water treatment" },
//   { src: factory3, title: "Mass Production", description: "High-speed bottling lines" },
//   { src: factory4, title: "Quality Control", description: "Rigorous testing protocols" },
// ];

// const HorizontalGallery = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["20%", "-60%"]);
//   const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

//   return (
//     <section ref={containerRef} className="relative py-32 overflow-hidden">
//       {/* Background Layer (slower) */}
//       <motion.div 
//         className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"
//         style={{ x: backgroundX }}
//       />

//       {/* Section Header */}
//       <motion.div 
//         className="relative z-10 text-center mb-16 px-4"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
//           Inside the <span className="text-gradient-primary">Factory</span>
//         </h2>
//         <p className="text-muted-foreground text-lg max-w-xl mx-auto">
//           A glimpse into our state-of-the-art manufacturing facility
//         </p>
//       </motion.div>

//       {/* Horizontal Scrolling Gallery */}
//       <motion.div 
//         className="flex gap-8 px-8"
//         style={{ x }}
//       >
//         {galleryImages.map((image, index) => (
//           <motion.div
//             key={index}
//             className="gallery-card flex-shrink-0 w-80 md:w-96 neon-border"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             whileHover={{ 
//               scale: 1.02,
//               rotateY: 2,
//               transition: { duration: 0.3 }
//             }}
//           >
//             <div className="relative overflow-hidden rounded-2xl">
//               <motion.img
//                 src={image.src}
//                 alt={image.title}
//                 className="w-full h-72 md:h-80 object-cover"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <h3 className="text-xl font-display font-semibold text-foreground mb-1">
//                   {image.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground">
//                   {image.description}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default HorizontalGallery;




import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const galleryImages = [
  { src: factory1, title: "Precision Filling", description: "Automated bottle filling systems" },
  { src: factory2, title: "Purification", description: "Multi-stage water treatment" },
  { src: factory3, title: "Mass Production", description: "High-speed bottling lines" },
  { src: factory4, title: "Quality Control", description: "Rigorous testing protocols" },
];

const HorizontalGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [manualOffset, setManualOffset] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], ["20%", "-60%"]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const cardWidth = 400;
  const maxOffset = (galleryImages.length - 1) * cardWidth;

  const scrollLeft = () => {
    setManualOffset(prev => Math.max(prev - cardWidth, 0));
  };

  const scrollRight = () => {
    setManualOffset(prev => Math.min(prev + cardWidth, maxOffset));
  };

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"
        style={{ x: backgroundX }}
      />

      <motion.div 
        className="relative z-10 text-center mb-16 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
          Inside the <span className="text-gradient-primary">Factory</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          A glimpse into our state-of-the-art manufacturing facility
        </p>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="relative z-20 flex justify-center gap-4 mb-8">
        <motion.button
          onClick={scrollLeft}
          className="glass-card p-3 rounded-full neon-border hover:bg-primary/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          disabled={manualOffset === 0}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </motion.button>
        <motion.button
          onClick={scrollRight}
          className="glass-card p-3 rounded-full neon-border hover:bg-primary/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          disabled={manualOffset >= maxOffset}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </motion.button>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <motion.div 
        ref={galleryRef}
        className="flex gap-8 px-8"
        style={{ x: scrollX }}
        animate={{ x: `calc(20% - ${manualOffset}px)` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-card flex-shrink-0 w-80 md:w-96 neon-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src={image.src}
                alt={image.title}
                className="w-full h-72 md:h-80 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {image.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Dot Indicators */}
      <div className="relative z-20 flex justify-center gap-2 mt-8">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setManualOffset(index * cardWidth)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              Math.round(manualOffset / cardWidth) === index 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HorizontalGallery;
