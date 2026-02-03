import { motion } from "framer-motion";

const images = [
  "/images/about1.jpg",
  "/images/about2.jpg",
  "/images/about3.jpg",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-32 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
          ABOUT 
          {/* <span className="text-neon-cyan text-">WHITEUP</span> */}
          <span className="gradient-text gradient-red-classic z-10 "> White</span>
            <span className="text-foreground text-glow ">up</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-white/70 text-lg">
          A new generation of mineral water crafted for innovation, purity, and elevated hydration.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Who We Are
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            WhiteUp is a premium mineral water brand built on the idea that hydration
            should be more than just water — it should be an experience. We combine
            natural mineral balance with advanced purification techniques to deliver
            water that is clean, refreshing, and intelligently composed.
          </p>
          <p className="text-white/70 leading-relaxed">
            Our mission is to redefine everyday hydration through innovation,
            sustainability, and design-driven packaging that reflects modern lifestyles.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.img
          src="/images/about-main.jpg"
          alt="WhiteUp Bottle"
          className="rounded-3xl shadow-2xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 bg-black/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Crafted for the Future
          </h2>

          <motion.video
            className="w-full rounded-3xl shadow-2xl"
            src="/videos/shoot.mp4"
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          

          <p className="mt-6 text-white/70 max-w-3xl mx-auto">
            Our product shoots reflect the purity, strength, and elegance of WhiteUp.
            Every bottle represents a fusion of science, nature, and design.
          </p>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Inside WhiteUp
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="WhiteUp Gallery"
              className="rounded-2xl object-cover h-72 w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-gradient-to-b from-black/40 to-transparent">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            What We Stand For
          </h2>

          <p className="text-white/70 leading-relaxed max-w-3xl mx-auto">
            At WhiteUp, we believe hydration should be intelligent, transparent, and
            responsible. We focus on mineral balance, sustainable packaging, and
            premium-quality sourcing — creating water that supports wellness without
            compromising the planet.
          </p>
        </div>
      </section>

    </div>
  );
}
