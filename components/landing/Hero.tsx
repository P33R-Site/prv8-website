"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Private luxury jet at sunset"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-6 text-center pt-32 pb-40">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80 mb-10"
                >
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                    </span>
                    Infrastructure for Modern Travel
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.05] mb-8"
                >
                    Experience the Future of<br />
                    <span className="text-white/60">Personalized Intelligence</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    PRV8 learns your preferences, anticipates your needs, and delivers seamless experiences across your life.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#request"
                        className="group w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
                    >
                        Explore PRV8
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
                    >
                        See How It Works
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
}
