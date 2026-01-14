import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import paper1 from '@/assets/paper_business/paper-1.jpg';
import paper2 from '@/assets/paper_business/paper-2.jpg';
import paper3 from '@/assets/paper_business/paper-3.jpg';
import paper4 from '@/assets/paper_business/paper-4.jpg';

const galleryImages = [
  { src: paper1, title: "Pulp Processing", description: "Raw material transformation" },
  { src: paper2, title: "Paper Rolls", description: "Industrial-scale production" },
  { src: paper3, title: "Precision Cutting", description: "Automated finishing lines" },
  { src: paper4, title: "Quality Assurance", description: "Rigorous testing standards" },
];

const PaperVerticalGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  const navigateUp = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  const navigateDown = () => {
    setActiveIndex(prev => Math.min(prev + 1, galleryImages.length - 1));
  };

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Layer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/10 to-background"
        style={{ y: backgroundY, opacity: opacityProgress }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Inside the <span className="text-gradient-amber">Paper Mill</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Experience the art and science of premium paper production
          </p>
        </motion.div>

        {/* Stacked Card Gallery - Different from horizontal scroll */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Main Image Display */}
          <motion.div 
            className="relative flex-1 w-full lg:w-2/3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              key={activeIndex}
              className="glass-card overflow-hidden rounded-3xl amber-glow-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={galleryImages[activeIndex].src}
                  alt={galleryImages[activeIndex].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {galleryImages[activeIndex].title}
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {galleryImages[activeIndex].description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Thumbnail Strip & Navigation */}
          <div className="flex lg:flex-col gap-4 items-center">
            {/* Navigation Buttons */}
            <motion.button
              onClick={navigateUp}
              className="glass-card p-3 rounded-full amber-glow-border hover:bg-amber-500/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={activeIndex === 0}
              aria-label="Previous image"
            >
              <ChevronUp className="w-6 h-6 text-amber-400" />
            </motion.button>

            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                    activeIndex === index 
                      ? 'ring-2 ring-amber-500 scale-105' 
                      : 'opacity-50 hover:opacity-80'
                  }`}
                  whileHover={{ scale: activeIndex === index ? 1.05 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-16 h-16 lg:w-20 lg:h-20 object-cover"
                  />
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0 border-2 border-amber-500 rounded-xl"
                      layoutId="activeThumb"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={navigateDown}
              className="glass-card p-3 rounded-full amber-glow-border hover:bg-amber-500/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={activeIndex >= galleryImages.length - 1}
              aria-label="Next image"
            >
              <ChevronDown className="w-6 h-6 text-amber-400" />
            </motion.button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {galleryImages.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-amber-500 w-12' 
                  : 'bg-muted-foreground/30 w-4'
              }`}
              layout
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaperVerticalGallery;
