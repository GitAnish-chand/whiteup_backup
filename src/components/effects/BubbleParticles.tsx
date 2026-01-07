

import { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BubbleParticlesProps {
  scrollProgress: number;
}

interface Bubble {
  id: number;
  size: number;
  left: string;
  delay: number;
  duration: number;
  opacity: number;
}

export const BubbleParticles = ({ scrollProgress }: BubbleParticlesProps) => {
  /* -------------------------------------------
     Detect first user interaction
  -------------------------------------------- */
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const onFirstInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("wheel", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
    };

    window.addEventListener("scroll", onFirstInteraction, { once: true });
    window.addEventListener("wheel", onFirstInteraction, { once: true });
    window.addEventListener("touchstart", onFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("wheel", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
    };
  }, []);

  /* -------------------------------------------
     Bubble configuration
  -------------------------------------------- */
  const bubbleCount = hasInteracted ? 90 : 280;

  const bubbles = useMemo<Bubble[]>(() => {
    return Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      size:
        (hasInteracted ? 4 : 8) +
        Math.random() * (hasInteracted ? 20 : 30),
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration:
        (hasInteracted ? 8 : 6) + Math.random() * 10,
      opacity:
        (hasInteracted ? 0.1 : 0.25) + Math.random() * 0.4,
    }));
  }, [hasInteracted]);

  /* -------------------------------------------
     Intensity control
  -------------------------------------------- */
  const intensity = hasInteracted
    ? Math.min(1, scrollProgress * 2)
    : 1.2;

  /* -------------------------------------------
     Render
  -------------------------------------------- */
  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: "-5%",
            background: `radial-gradient(
              circle at 30% 30%,
              hsl(var(--bubble-white) / ${bubble.opacity * intensity}),
              hsl(var(--neon-cyan) / ${bubble.opacity * 0.5 * intensity})
            )`,
            boxShadow: `0 0 ${bubble.size}px hsl(var(--neon-cyan) / ${
              bubble.opacity * 0.3 * intensity
            })`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -window.innerHeight * 1.2],
            x: [0, Math.sin(bubble.delay) * 50, 0],
            scale: [1, 1.2, 0.8],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
