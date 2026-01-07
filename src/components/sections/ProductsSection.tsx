import { useRef } from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "WhiteUp Classic", image: "/products/p1.png" },
  { id: 2, name: "WhiteUp Lime", image: "/products/p2.png" },
  { id: 3, name: "WhiteUp Orange", image: "/products/p3.png" },
  { id: 4, name: "WhiteUp Berry", image: "/products/p4.png" },
  { id: 5, name: "WhiteUp Zero", image: "/products/p5.png" },
  { id: 6, name: "WhiteUp Energy", image: "/products/p6.png" },
];

export const ProductsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ---------------------------------------------
     Responsive scroll (1 card per click)
  --------------------------------------------- */
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount =
      window.innerWidth < 640
        ? 200 // mobile
        : window.innerWidth < 1024
        ? 260 // tablet
        : 320; // desktop

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-1/2 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl gradient-text mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Crafted for every mood. Discover the WhiteUp range.
          </p>
        </motion.div>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="
            absolute left-4 top-1/2 -translate-y-1/2 z-30
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
            flex items-center justify-center
            rounded-full glass backdrop-blur-xl
            border border-white/10
            text-white text-lg sm:text-xl md:text-2xl
            hover:scale-110
            hover:shadow-[0_0_30px_rgba(0,255,255,0.35)]
            transition-all duration-300
          "
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="
            absolute right-4 top-1/2 -translate-y-1/2 z-30
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
            flex items-center justify-center
            rounded-full glass backdrop-blur-xl
            border border-white/10
            text-white text-lg sm:text-xl md:text-2xl
            hover:scale-110
            hover:shadow-[0_0_30px_rgba(0,255,255,0.35)]
            transition-all duration-300
          "
        >
          ›
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 sm:gap-8
            overflow-x-auto scrollbar-hide
            snap-x snap-mandatory
            px-6
          "
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                snap-center shrink-0
                w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]
                glass rounded-3xl
                p-4 sm:p-6
                flex flex-col items-center
                hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
                transition-all
              "
            >
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-24 h-40
                  sm:w-32 sm:h-52
                  md:w-36 md:h-60
                  lg:w-40 lg:h-64
                  object-contain
                  mb-4 sm:mb-6
                "
              />

              <h3 className="text-base sm:text-lg font-semibold text-white text-center">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
