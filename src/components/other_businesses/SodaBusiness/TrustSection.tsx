import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const TrustSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [customerCount, setCustomerCount] = useState(50000);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Simulate growing customer count
  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Floating abstract shapes
  const floatingShapes = [
    { size: 200, x: "10%", y: "20%", delay: 0 },
    { size: 150, x: "80%", y: "30%", delay: 1 },
    { size: 100, x: "20%", y: "70%", delay: 2 },
    { size: 180, x: "70%", y: "60%", delay: 0.5 },
    { size: 120, x: "50%", y: "40%", delay: 1.5 },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 animate-gradient"
        style={{ 
          y: backgroundY,
          background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.3) 50%, hsl(var(--background)) 100%)',
          backgroundSize: '400% 400%'
        }}
      />

      {/* Floating Abstract Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-primary/5 blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by Thousands.
            <br />
            <span className="text-gradient-primary">Growing Every Month.</span>
          </motion.h2>

          {/* Customer Counter Ticker */}
          <motion.div
            className="mt-12 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card inline-block px-12 py-8 neon-border">
              <motion.p 
                className="stat-value text-5xl md:text-7xl"
                key={customerCount}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {customerCount.toLocaleString()}+
              </motion.p>
              <p className="stat-label mt-4">Happy Customers & Growing</p>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            From local retailers to national chains, our water reaches 
            millions of homes every day.
          </motion.p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {["ISO Certified", "FDA Approved", "BIS Standards", "FSSAI Compliant"].map((badge, index) => (
            <motion.div
              key={badge}
              className="glass-card px-6 py-3"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.3)" }}
            >
              <span className="text-foreground font-medium text-sm">{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
