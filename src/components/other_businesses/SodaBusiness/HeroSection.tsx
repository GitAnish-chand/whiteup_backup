import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParticleField from './ParticleField';
import heroFactory from '@/assets/soda_business/hero-factory.jpg';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden grain-overlay">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <img 
          src={heroFactory} 
          alt="Factory interior" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 video-overlay" />

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50" />

      {/* Particles */}
      <ParticleField />

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center px-4"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-center max-w-5xl"
        >
          <motion.h1 
            className="hero-title mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Crafted at Scale.
            <br />
            <span className="text-gradient-primary">Delivered with Precision.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Where cutting-edge technology meets uncompromising quality.
            Every drop, perfected.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
