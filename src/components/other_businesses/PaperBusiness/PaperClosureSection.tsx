import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import paperHero from '@/assets/paper_business/paper-hero.jpg';

const PaperClosureSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const logoScale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0, 0.5, 1]);
  const textY = useTransform(scrollYProgress, [0.6, 1], [60, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Video/Image Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <img 
          src={paperHero} 
          alt="Paper Factory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Logo/Brand Mark - Hexagonal (different from circular) */}
        <motion.div
          className="mb-12"
          style={{ scale: logoScale, opacity: logoOpacity }}
        >
          <div className="w-28 h-28 md:w-36 md:h-36 relative">
            {/* Hexagon Borders */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <polygon
                points="50,3 93,25 93,75 50,97 7,75 7,25"
                fill="none"
                stroke="hsl(35 100% 50% / 0.5)"
                strokeWidth="1"
              />
            </motion.svg>
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <polygon
                points="50,5 90,27 90,73 50,95 10,73 10,27"
                fill="none"
                stroke="hsl(35 100% 50% / 0.3)"
                strokeWidth="1"
              />
            </motion.svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span 
                className="text-amber-400 font-display text-2xl md:text-3xl font-bold"
                style={{ textShadow: '0 0 20px hsl(35 100% 50% / 0.5)' }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                PP
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div
          className="text-center max-w-4xl"
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
            Crafted with Care.
            <br />
            <span className="text-gradient-amber">Built to Last.</span>
          </h2>
        </motion.div>

        {/* Subtle divider */}
        <motion.div
          className="w-48 h-px mt-12"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(35 100% 50% / 0.5), transparent)' }}
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
          PrimePaper Industries
        </motion.p>
      </div>
    </section>
  );
};

export default PaperClosureSection;
