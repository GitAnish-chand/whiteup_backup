

import PaperClosureSection from "@/components/other_businesses/PaperBusiness/PaperClosureSection";
import PaperHeroSection from "@/components/other_businesses/PaperBusiness/PaperHeroSection";
import PaperMetricsSection from "@/components/other_businesses/PaperBusiness/PaperMetricsSection";
import PaperProcessSection from "@/components/other_businesses/PaperBusiness/PaperProcessSection";
import PaperVerticalGallery from "@/components/other_businesses/PaperBusiness/PaperVerticalGallery";

import { motion } from "framer-motion";


const Paper = () => {
  return (
    <motion.main
      className="relative w-full overflow-hidden bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      {/* <Business1 /> */}
      <PaperHeroSection />
      <PaperVerticalGallery />
      <PaperProcessSection />
      <PaperMetricsSection />
      <PaperClosureSection />

    </motion.main>



  );
};

export default Paper;
