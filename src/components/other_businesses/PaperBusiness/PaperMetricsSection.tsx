import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", prefix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="stat-value-amber">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const metrics = [
  { value: 60000, suffix: "+", label: "Tons Annual Production" },
  { value: 200, suffix: "+", label: "Product Varieties" },
  { value: 25, suffix: "+", label: "Clients" },
  { value: 5, suffix: " Years", label: "Industry Excellence" },
];

const PaperMetricsSection = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Pattern - Diagonal Lines (different from grid) */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            hsl(35 100% 50% / 0.1) 0px,
            hsl(35 100% 50% / 0.1) 1px,
            transparent 1px,
            transparent 80px
          )`
        }} />
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header - Right Aligned (different from centered) */}
        <motion.div 
          className="text-right mb-20"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Impact at <span className="text-gradient-amber">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl ml-auto">
            Leading the paper industry with sustainable practices and unmatched quality
          </p>
        </motion.div>

        {/* Metrics - Alternating Layout (different from uniform grid) */}
        <div className="space-y-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="flex-1 glass-card p-8 amber-glow-border group"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'
                }`}>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    <Counter 
                      end={metric.value} 
                      suffix={metric.suffix} 
                      duration={2.5}
                    />
                  </motion.div>
                  <div className={`flex-1 ${index % 2 === 0 ? '' : 'text-right'}`}>
                    <p className="stat-label">{metric.label}</p>
                    <div className={`h-px bg-gradient-to-r from-amber-500/50 to-transparent mt-2 ${
                      index % 2 === 0 ? '' : 'bg-gradient-to-l'
                    }`} style={{ width: '60%', marginLeft: index % 2 === 0 ? 0 : 'auto' }} />
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl animate-pulse-glow-amber" />
                </div>
              </motion.div>

              {/* Decorative Element */}
              <motion.div 
                className="hidden md:flex items-center justify-center w-16 h-16 rounded-full glass-card amber-glow-border"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-amber-400 font-display font-bold">0{index + 1}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaperMetricsSection;
