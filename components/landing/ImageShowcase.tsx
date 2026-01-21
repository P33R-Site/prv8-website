"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const showcaseImages = [
    {
        src: "/images/demo/flight-business.png",
        alt: "Luxury business class flight",
        title: "Premium Travel",
        subtitle: "First-class experiences"
    },
    {
        src: "/images/demo/hotel-suite.png",
        alt: "Luxury hotel suite",
        title: "Curated Stays",
        subtitle: "World-class accommodations"
    },
    {
        src: "/images/demo/dining-restaurant.png",
        alt: "Fine dining restaurant",
        title: "Exclusive Dining",
        subtitle: "Reserved tables at top venues"
    },
    {
        src: "/images/demo/ride-chauffeur-new.png",
        alt: "Luxury chauffeur service",
        title: "Private Transport",
        subtitle: "Seamless ground transfers"
    },
    {
        src: "/images/demo/experience-safari-new.png",
        alt: "Desert safari experience",
        title: "Unique Experiences",
        subtitle: "Unforgettable moments"
    }
];

export function ImageShowcase() {
    return (
        <section className="py-24 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-amber-400 text-sm font-medium mb-3">The Experience</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
                        Every Detail, Handled
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-xl mx-auto">
                        From booking to arrival, PRV8 orchestrates premium experiences with invisible precision.
                    </p>
                </motion.div>

                {/* Image Grid - Bento Style */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {/* Large featured image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer"
                    >
                        <div className="aspect-square md:aspect-auto md:h-full relative">
                            <Image
                                src={showcaseImages[0].src}
                                alt={showcaseImages[0].alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-white font-serif text-2xl mb-1">{showcaseImages[0].title}</h3>
                                <p className="text-white/60 text-sm">{showcaseImages[0].subtitle}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Smaller images */}
                    {showcaseImages.slice(1).map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                            className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-square"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-white font-medium text-sm mb-0.5">{image.title}</h3>
                                <p className="text-white/50 text-xs">{image.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
