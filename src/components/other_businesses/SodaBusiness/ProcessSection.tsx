import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import processBg from '@/assets/soda_business/process-bg.jpg';

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, 0]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image with Scale Effect */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        <motion.img
          src={processBg}
          alt="Water process"
          className="w-full h-full object-cover"
          style={{ 
            opacity,
            filter: blur.get() > 0 ? `blur(${blur.get()}px)` : 'none' 
          }}
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Floating Neon Lines */}
      <motion.div 
        className="absolute left-0 top-1/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{ width: lineWidth }}
      />
      <motion.div 
        className="absolute right-0 bottom-1/4 h-px bg-gradient-to-l from-transparent via-primary to-transparent"
        style={{ width: lineWidth }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.span 
            className="text-primary font-display text-sm md:text-base uppercase tracking-[0.3em] mb-6 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            The Journey
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
            From Water to
            <br />
            <span className="text-gradient-primary">Worldwide Distribution</span>
          </h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Our integrated manufacturing process ensures every bottle meets 
            the highest standards of purity and quality, ready for global markets.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {["Purification", "Bottling", "Quality Check", "Distribution"].map((step, index) => (
            <motion.div
              key={step}
              className="glass-card px-6 py-4 neon-border"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary font-display text-sm">0{index + 1}</span>
              <p className="text-foreground font-medium">{step}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
