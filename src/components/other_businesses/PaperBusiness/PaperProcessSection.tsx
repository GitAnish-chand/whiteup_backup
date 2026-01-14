import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import paperProcessBg from '@/assets/paper_business/paper-process-bg.jpg';

const processSteps = [
  { number: "01", title: "Sourcing", description: "Sustainable raw materials" },
  { number: "02", title: "Pulping", description: "Fiber extraction process" },
  { number: "03", title: "Formation", description: "Sheet creation" },
  { number: "04", title: "Pressing", description: "Water removal" },
  { number: "05", title: "Drying", description: "Final curing" },
  { number: "06", title: "Finishing", description: "Quality coating" },
];

const PaperProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image with Scale Effect */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        <motion.img
          src={paperProcessBg}
          alt="Paper process"
          className="w-full h-full object-cover"
          style={{ opacity }}
        />
        <div className="absolute inset-0 bg-background/80" />
      </motion.div>

      {/* Animated Progress Line */}
      <motion.div 
        className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-400 to-transparent"
        style={{ width: progressWidth }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.span 
            className="text-amber-400 font-display text-sm md:text-base uppercase tracking-[0.3em] mb-6 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our Process
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
            From Pulp to
            <br />
            <span className="text-gradient-amber">Premium Paper</span>
          </h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A meticulous six-stage journey that transforms raw materials 
            into the finest paper products for global markets.
          </motion.p>
        </motion.div>

        {/* Process Steps - Grid Layout (different from soda's horizontal) */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="glass-card p-6 md:p-8 amber-glow-border group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Step Number Background */}
              <motion.span 
                className="absolute -top-4 -right-4 text-8xl md:text-9xl font-display font-bold text-amber-500/5 group-hover:text-amber-500/10 transition-colors"
              >
                {step.number}
              </motion.span>
              
              <span className="text-amber-400 font-display text-sm font-medium">{step.number}</span>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mt-2 mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-amber-500/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PaperProcessSection;
