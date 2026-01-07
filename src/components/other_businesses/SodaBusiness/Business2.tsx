import { motion } from "framer-motion";

const Business1 = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-display text-6xl md:text-8xl
            gradient-text mb-6
          "
        >
          Soda Business
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            max-w-2xl mx-auto
            text-muted-foreground text-lg md:text-xl
            mb-16
          "
        >
          Beyond beverages, we build innovative businesses focused on
          technology, branding, and next-generation experiences.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Brand Consulting",
              desc: "Helping brands craft identity, strategy, and presence.",
            },
            {
              title: "3D Experiences",
              desc: "Immersive web & product experiences using modern tech.",
            },
            {
              title: "Digital Products",
              desc: "Design-driven SaaS, tools, and platforms.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="
                glass rounded-3xl p-8
                hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]
                transition-all
              "
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24"
        >
          <button
            onClick={() => window.history.back()}
            className="
              px-8 py-3 rounded-full
              text-white font-semibold
              glass
              hover:scale-105
              transition-all
            "
          >
            ← Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Business1;
