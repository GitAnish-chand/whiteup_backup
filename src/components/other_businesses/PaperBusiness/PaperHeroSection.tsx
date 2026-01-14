import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParticleField from '../../ui/ParticleField';
import paperHero from '@/assets/paper_business/paper-hero.jpg';

const PaperHeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden grain-overlay">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale, rotateX }}
      >
        <img
          src={paperHero}
          alt="Paper factory interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Warm Amber Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-background/60 to-background/90" />

      {/* Ambient Glow - Warm */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 to-transparent opacity-60" />

      {/* Particles */}
      <ParticleField />

      {/* Content - Left Aligned Layout (different from soda page) */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.span
            className="inline-block text-amber-400 font-display text-sm md:text-base uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium Paper Manufacturing
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="block bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Precision in
            </span>
            <span className="block text-gradient-amber">Every Fiber.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl font-light"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            From raw pulp to premium sheets. Sustainable manufacturing
            meets uncompromising quality.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10"
          >
            <motion.button
              className="glass-card px-8 py-4 rounded-full border border-amber-500/30 hover:border-amber-500/60 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-amber-400 font-display tracking-wider">Explore Our Process</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Bottom Right */}
        <motion.div
          className="absolute bottom-12 right-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground rotate-90 origin-center mb-8">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PaperHeroSection;
