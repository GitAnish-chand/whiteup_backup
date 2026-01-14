
import Business2 from "@/components/other_businesses/SodaBusiness/Business2";
import ClosureSection from "@/components/other_businesses/SodaBusiness/ClosureSection";
import HeroSection from "@/components/other_businesses/SodaBusiness/HeroSection";
import HorizontalGallery from "@/components/other_businesses/SodaBusiness/HorizontalGallery";
import MetricsSection from "@/components/other_businesses/SodaBusiness/MetricsSection";
import ProcessSection from "@/components/other_businesses/SodaBusiness/ProcessSection";
import TrustSection from "@/components/other_businesses/SodaBusiness/TrustSection";
import { motion } from "framer-motion";
import "/src/soda_index.css"


const Soda = () => {
    return (

        <motion.main
            className="relative w-full overflow-hidden bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <HeroSection />
            <HorizontalGallery />
            <ProcessSection />
            <MetricsSection />
            <TrustSection />
            <ClosureSection />

        </motion.main>

    );
};

export default Soda;
