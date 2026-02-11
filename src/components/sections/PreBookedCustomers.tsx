import { motion } from "framer-motion";

const customers = [
    "AquaFresh Distributors",
    "BlueDrop Traders",
    "Tea Post ",
    "PureLife Wholesale",
    "Crystal Water Co.",
    "Himalayan Springs",
    "Urban Mart Wholesale",
    "FreshFlow Suppliers",
    "ClearSip Traders",
    "NatureDrop Co.",
    "Prime Aqua Distributors",
];

const PrebookedCustomers = () => {
    return (
        <section className="relative py-16 overflow-hidden pt-24 pb-40">
            {/* Heading */}
            <div className="text-center mb-10 ">
                <h3 className=" uppercase tracking-widest text-xl mb-3  text-neon-cyan/80 text-glow ">
                    Trusted by Doctors
                </h3>

                <h2 className="text-3xl sm:text-4xl font-display text-neon-cyan/90 text-glow-clinical ">
                    10+ Customers Have Already Pre-Booked
                </h2>
            </div>

            {/* Carousel */}
            
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 w-max will-change-transform"
                    whileHover={{ animationPlayState: "paused" }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 35,
                        ease: "linear",
                    }}
                >
                    {[...customers, ...customers].map((name, index) => (
                        <div
                            key={index}
                            className="min-w-[220px] px-6 py-4 rounded-2xl
                                bg-white/5 backdrop-blur-md
                                border border-white/10
                                text-center text-white/90
                                shadow-[0_0_20px_rgba(0,255,255,0.08)]
                                text-lg
                                leading-relaxed
                                mb-8
                                glass-bg

                             "
                        >
                            {name}
                        </div>
                    ))}
                </motion.div>
            
            </div>
            
            
        </section>
        
    );
};

export default PrebookedCustomers;
