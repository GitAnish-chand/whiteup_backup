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
  const ref = useRef<HTMLSpanElement | null>(null);
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
    <span
      ref={ref}
      className="stat-value
        block
        w-full
        truncate
        text-center
        font-display
        font-bold
        tabular-nums
        tracking-tight
        leading-none
        text-3xl
        sm:text-4xl
        lg:text-5xl
        text-foreground
      "
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};






// const Counter = ({ end, suffix = "", prefix = "", duration = 2 }: CounterProps) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   useEffect(() => {
//     if (!isInView) return;

//     let startTime: number;
//     let animationFrame: number;

//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
//       // Ease out cubic
//       const easeOut = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(easeOut * end));

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, [isInView, end, duration]);

//   return (
//     <span ref={ref} className="stat-value">
//       {prefix}{count.toLocaleString()}{suffix}
//     </span>
//   );
// };

const metrics = [
  { value: 25, suffix: " Cr", prefix: "₹", label: "Monthly Sales" },
  { value: 5000000, suffix: "+", label: "Bottles Per Month" },
  { value: 150, suffix: "+", label: "Distribution Cities" },
  { value: 12, suffix: " Years", label: "Of Excellence" },
];

const MetricsSection = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Numbers That <span className="text-gradient-primary">Define Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Our commitment to scale and quality, measured
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="glass-card p-8 text-center neon-border group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              >
                <Counter 
                  end={metric.value} 
                  suffix={metric.suffix} 
                  prefix={metric.prefix}
                  duration={2.5}
                />
              </motion.div>
              <p className="stat-label">{metric.label}</p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl animate-pulse-glow" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;







