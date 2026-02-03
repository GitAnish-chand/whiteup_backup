// import { motion } from "framer-motion";
// import {
//     CheckCircle,
//     XCircle,
//     Droplets,
//     Sparkles,
//     Leaf,
// } from "lucide-react";

// const differences = [
//     {
//         our: "Naturally balanced minerals",
//         other: "Stripped or minimal minerals",
//         icon: <Droplets className="text-neon-cyan w-5 h-5" />,
//     },
//     {
//         our: "Hydration + wellness",
//         other: "Hydration only",
//         icon: <Sparkles className="text-neon-cyan w-5 h-5" />,
//     },
//     {
//         our: "Smooth, clean taste",
//         other: "Flat or harsh taste",
//         icon: <CheckCircle className="text-neon-cyan w-5 h-5" />,
//     },
//     {
//         our: "Mineral-preserving filtration",
//         other: "Over-processed (RO) water",
//         icon: <XCircle className="text-neon-cyan w-5 h-5" />,
//     },
//     {
//         our: "Electrolyte-rich",
//         other: "Empty hydration",
//         icon: <Droplets className="text-neon-cyan w-5 h-5" />,
//     },
//     {
//         our: "Transparent composition",
//         other: "Hidden mineral details",
//         icon: <CheckCircle className="text-neon-cyan w-5 h-5" />,
//     },
//     {
//         our: "Crafted, premium quality",
//         other: "Mass-produced",
//         icon: <Sparkles className="text-neon-cyan w-5 h-5" />,
//     },
//     {
//         our: "Sustainable packaging",
//         other: "Plastic-first approach",
//         icon: <Leaf className="text-neon-cyan w-5 h-5" />,
//     },
// ];

// export const DifferenceTable = () => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="glass rounded-3xl p-4 sm:p-6 w-full"
//         >
//             <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 gradient-text">
//                 Why We're Different
//             </h3>

//             <div className="grid grid-cols-2
//                 gap-20
//                 sm:gap-24
//                 md:gap-16
//                 lg:gap-8 "
//             >
//                 {/* OUR BRAND */}
//                 <div>
//                     <h4 className="text-neon-cyan font-semibold mb-4 sm:mb-6 uppercase tracking-wider text-xs  lg:text-base ">
//                         Our Brand
//                     </h4>
//                     <ul className="space-y-3 sm:space-y-4">
//                         {differences.map((item, i) => (
//                             <li key={i} className="flex items-start gap-2 sm:gap-3">
//                                 <span className="mt-0.5 sm:mt-1 flex-shrink-0">{item.icon}</span>
//                                 <span className="text-sm sm:text-base lg:text-lg leading-relaxed ">{item.our}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* OTHER BRANDS */}
//                 <div>
//                     <h4 className="
//                         text-white/80
//                         font-semibold
//                         px-14
//                         mb-4 sm:mb-6
//                         uppercase tracking-wider
//                         text-xs sm:text-sm
//                         [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]
//                     ">
//                         Other Brands
//                     </h4>

//                     <ul className="space-y-2 sm:space-y-4  px-2 ">
//                         {differences.map((item, i) => (
//                             <li key={i} className="flex items-start gap-2 sm:gap-3 text-muted-foreground px-10">
//                                 <span className="mt-0.5 sm:mt-1 flex-shrink-0 ">
//                                     <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground text-red-500 w-4 h-5" />
//                                 </span>
//                                 <span className="text-xs sm:text-sm lg:text-base text-gradient-muted">{item.other}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };


import { motion } from "framer-motion";
import {
    CheckCircle,
    XCircle,
    Droplets,
    Sparkles,
    Leaf,
} from "lucide-react";

const differences = [
    { our: "Naturally balanced minerals", other: "Stripped or minimal minerals", icon: <Droplets className="text-neon-cyan w-4 h-4 sm:w-5 sm:h-5" /> },
    { our: "Hydration + wellness", other: "Hydration only", icon: <Sparkles className="text-neon-cyan w-4 h-4 sm:w-5 sm:h-5" /> },
    { our: "Smooth, clean taste", other: "Flat or harsh taste", icon: <CheckCircle className="text-neon-cyan w-4 h-4 sm:w-5 sm:h-5" /> },
    { our: "Mineral-preserving filtration", other: "Over-processed (RO) water", icon: <XCircle className="text-neon-cyan w-4 h-4 sm:w-5 sm:h-5" /> },
    { our: "Electrolyte-rich", other: "Empty hydration", icon: <Droplets className="text-neon-cyan w-4 h-4 sm:w-5 sm:h-5" /> },
    { our: "Transparent composition", other: "Hidden mineral details", icon: <CheckCircle className="text-neon-cyan w-4 h-4 sm:w-5 sm:h-5" /> },
    { our: "Crafted, premium quality", other: "Mass-produced", icon: <Sparkles className="text-neon-cyan w-4 h-4 sm:w-5 sm:h-5" /> },
    { our: "Sustainable packaging", other: "Plastic-first approach", icon: <Leaf className="text-neon-cyan w-4 h-4 sm:w-5 sm:h-5" /> },
];

export const DifferenceTable = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-4 sm:p-8 w-full"
        >
            {/* <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl mb-10 gradient-text text-center"> */}
            <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl mb-12 gradient-text text-center">

                Why We're Different
            </h3>

            {/* ALWAYS 3 COLUMNS */}
            <div className="grid grid-cols-3 gap-x-10 sm:gap-x-16 items-start">

                {/* OUR BRAND */}
                <div>
                    {/* <h4 className="text-neon-cyan font-semibold mb-4 uppercase tracking-wider text-xs sm:text-sm"> */}
                    <h4 className="text-neon-cyan font-semibold mb-6 uppercase tracking-wider text-sm sm:text-base lg:text-lg">
                        Our Brand
                    </h4>

                    <ul className="space-y-4">
                        {differences.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="mt-1">{item.icon}</span>
                                {/* <span className="text-[11px] sm:text-sm lg:text-base break-words max-w-full"> */}
                                <span className="text-sm sm:text-base lg:text-xl break-words max-w-full">
                                    {item.our}
                                </span>

                            </li>
                        ))}
                    </ul>
                </div>

                {/* CENTER GAP (FOR BOTTLE) */}
                <div />

                {/* OTHER BRANDS */}
                <div>
                    {/* <h4 className="text-white/70 font-semibold mb-4 uppercase tracking-wider text-xs sm:text-sm"> */}
                    <h4 className="text-white/70 font-semibold mb-6 uppercase tracking-wider text-sm sm:text-base lg:text-lg">
                        Other Brands
                    </h4>

                    <ul className="space-y-4">
                        {differences.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0 mt-1">
                                    <XCircle className="w-full h-full text-red-500" />
                                </span>

                                {/* <span className="text-[11px] sm:text-sm lg:text-base break-words max-w-full"> */}
                                <span className="text-sm sm:text-base lg:text-xl">

                                    {item.other}
                                </span>

                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </motion.div>
    );
};
