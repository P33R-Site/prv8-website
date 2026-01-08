"use client";

import { motion } from "framer-motion";

export function TrustSection() {
    return (
        <section className="py-32 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-amber-400 text-sm font-medium mb-6">Built for High-Expectation Users</p>
                    <blockquote className="font-serif text-2xl md:text-4xl font-medium text-white tracking-tight mb-10 leading-relaxed">
                        &quot;The only infrastructure capable of handling the complexity of modern high-net-worth travel.&quot;
                    </blockquote>
                    <div className="flex justify-center items-center gap-12 opacity-30">
                        {/* Minimal brand placeholders */}
                        <span className="text-lg font-bold tracking-[0.2em] text-zinc-400">ATLAS</span>
                        <span className="text-lg font-serif font-bold tracking-[0.2em] text-zinc-400">NOIR</span>
                        <span className="text-lg font-mono font-bold tracking-[0.2em] text-zinc-400">VECTOR</span>
                        <span className="text-lg font-bold tracking-[0.2em] text-zinc-400">MERIDIAN</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
