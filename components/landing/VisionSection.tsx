"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function VisionSection() {
    return (
        <section className="py-32 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <p className="text-amber-400 text-sm font-medium mb-3">The Vision</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight">Beyond AI — The Ideal Personal World</h2>
                </div>

                {/* Large Feature Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-8"
                >
                    <Image
                        src="/images/vision-suite.jpg"
                        alt="Luxury penthouse suite with city views"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">Curated Experiences, Not Just Bookings</h3>
                        <p className="text-white/70 max-w-xl">PRV8 understands context. We don't just fulfill requests — we anticipate needs and deliver experiences tailored to your lifestyle.</p>
                    </div>
                </motion.div>

                {/* Destination Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src="/images/dest-santorini.jpg"
                            alt="Santorini, Greece"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <p className="text-white font-medium">Santorini</p>
                            <p className="text-white/60 text-sm">Greece</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src="/images/dest-maldives.jpg"
                            alt="Maldives"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <p className="text-white font-medium">Maldives</p>
                            <p className="text-white/60 text-sm">Indian Ocean</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src="/images/dest-tokyo.jpg"
                            alt="Tokyo, Japan"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <p className="text-white font-medium">Tokyo</p>
                            <p className="text-white/60 text-sm">Japan</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
