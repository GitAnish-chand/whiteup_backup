import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const minerals = [
  {
    title: "Vitamin B12",
    description: "Essential for energy production and nervous system health. Supports cognitive function.",
    icon: "💎",
    amount: "2.4μg"
  },
  {
    title: "Calcium (Ca)",
    description: "Strengthens bones and teeth. Supports muscle function and heart health.",
    icon: "🦴",
    amount: "80mg"
  },
  {
    title: "Magnesium (Mg)",
    description: "Aids muscle relaxation and energy metabolism. Reduces fatigue and stress.",
    icon: "⚡",
    amount: "25mg"
  },
  {
    title: "Potassium (K)",
    description: "Regulates fluid balance and blood pressure. Essential for heart function.",
    icon: "❤️",
    amount: "10mg"
  },
  {
    title: "Zinc (Zn)",
    description: "Boosts immune system and wound healing. Supports skin health.",
    icon: "🛡️",
    amount: "1.5mg"
  },
  {
    title: "Sodium (Na)",
    description: "Maintains fluid balance and supports nerve function. Natural electrolyte.",
    icon: "💧",
    amount: "15mg"
  }
];

export const CraftSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-container relative py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
        

          <span
            className="
                text-primary uppercase font-semibold block
                tracking-[0.2em]

                /* Responsive text size */
                text-xs
                sm:text-sm
                md:text-base
                lg:text-lg
                xl:text-xl

                /* Spacing & style */
                px-4 py-2
                rounded-full
                backdrop-blur-sm bg-black/30
                text-orange-300
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]
                text-glow
              "
          >
            The White Up
          </span>



          <h2 className="font-display text-5xl md:text-7xl mb-6">
            <span className="text-foreground  bg-black/20 backdrop-blur-sm" >Vitamins &</span>
            <br />
            <span
              className="gradient-text   bg-black/20 backdrop-blur-sm"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
              }}
            >
              Minerals
            </span>


          </h2>
          <p
            // className="text-muted-foreground text-lg max-w-2xl mx-auto"
            className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body px-4 py-2 rounded-xl bg-black/20 backdrop-blur-sm"
          >
            Every sip is a symphony of carefully curated ingredients,
            crafted with precision and passion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-black/10 backdrop-blur-sm">
          {minerals.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass rounded-2xl p-8 text-center group hover:bg-card/80 transition-all duration-500"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-white text-sm md:text-xl max-w-2xl mx-auto mb-12 font-body px-4 py-2 rounded-xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl" />
      <div className="absolute right-10 top-1/3 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};
