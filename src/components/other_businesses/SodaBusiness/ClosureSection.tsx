import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroFactory from '@/assets/soda_business/hero-factory.jpg';

const ClosureSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const logoScale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0, 0.5, 1]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Video/Image Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <img 
          src={heroFactory} 
          alt="Factory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Logo/Brand Mark */}
        <motion.div
          className="mb-12"
          style={{ scale: logoScale, opacity: logoOpacity }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-primary/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-2 rounded-full border border-primary/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span 
                className="text-primary font-display text-2xl md:text-3xl font-bold neon-glow"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AQ
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            Built for Scale.
            <br />
            <span className="text-gradient-primary">Designed for Trust.</span>
          </h2>
        </motion.div>

        {/* Subtle divider */}
        <motion.div
          className="section-divider w-48 mt-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Minimal footer text */}
        <motion.p
          className="text-muted-foreground text-sm mt-8 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          AquaPure Industries
        </motion.p>
      </div>
    </section>
  );
};

export default ClosureSection;
