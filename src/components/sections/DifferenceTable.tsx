import { motion } from "framer-motion";
import {
    CheckCircle,
    XCircle,
    Droplets,
    Sparkles,
    Leaf,
} from "lucide-react";

const differences = [
    {
        our: "Naturally balanced minerals",
        other: "Stripped or minimal minerals",
        icon: <Droplets className="text-neon-cyan w-5 h-5" />,
    },
    {
        our: "Hydration + wellness",
        other: "Hydration only",
        icon: <Sparkles className="text-neon-cyan w-5 h-5" />,
    },
    {
        our: "Smooth, clean taste",
        other: "Flat or harsh taste",
        icon: <CheckCircle className="text-neon-cyan w-5 h-5" />,
    },
    {
        our: "Mineral-preserving filtration",
        other: "Over-processed (RO) water",
        icon: <XCircle className="text-red-400 w-5 h-5" />,
    },
    {
        our: "Electrolyte-rich",
        other: "Empty hydration",
        icon: <Droplets className="text-neon-cyan w-5 h-5" />,
    },
    {
        our: "Transparent composition",
        other: "Hidden mineral details",
        icon: <CheckCircle className="text-neon-cyan w-5 h-5" />,
    },
    {
        our: "Crafted, premium quality",
        other: "Mass-produced",
        icon: <Sparkles className="text-neon-cyan w-5 h-5" />,
    },
    {
        our: "Sustainable packaging",
        other: "Plastic-first approach",
        icon: <Leaf className="text-neon-cyan w-5 h-5" />,
    },
];

export const DifferenceTable = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-4 sm:p-6 w-full"
        >
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 gradient-text">
                Why We're Different
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* OUR BRAND */}
                <div>
                    <h4 className="text-neon-cyan font-semibold mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm lg:text-base">
                        Our Brand
                    </h4>
                    <ul className="space-y-3 sm:space-y-4">
                        {differences.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 sm:gap-3">
                                <span className="mt-0.5 sm:mt-1 flex-shrink-0">{item.icon}</span>
                                <span className="text-sm sm:text-base lg:text-lg leading-relaxed">{item.our}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* OTHER BRANDS */}
                <div>
                    <h4 className="text-muted-foreground font-semibold mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">
                        Other Brands
                    </h4>
                    <ul className="space-y-3 sm:space-y-4">
                        {differences.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                                <span className="mt-0.5 sm:mt-1 flex-shrink-0">
                                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                                </span>
                                <span className="text-xs sm:text-sm lg:text-base">{item.other}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};
