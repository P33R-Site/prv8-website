"use client";

import { CreditCard, Plane, Building2, Shield, Lock, Key } from "lucide-react";
import { motion } from "framer-motion";

export function EnterpriseSection() {
    return (
        <section id="enterprise" className="py-32 border-t border-white/5 bg-zinc-900/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-amber-400 text-sm font-medium mb-3">For Enterprise</p>
                        <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Built for High-Expectation Ecosystems</h2>
                        <p className="text-zinc-500 mb-10 leading-relaxed">
                            PRV8 is the white-label infrastructure layer for organizations that demand discretion, reliability, and speed.
                        </p>

                        <ul className="space-y-6">
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4"
                            >
                                <div className="icon-accent">
                                    <CreditCard className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-white text-base mb-1">Premium Card Programs</h4>
                                    <p className="text-sm text-zinc-500">Enhance cardholder retention with a concierge that actually works.</p>
                                </div>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="icon-accent">
                                    <Plane className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-white text-base mb-1">Travel &amp; Lifestyle Platforms</h4>
                                    <p className="text-sm text-zinc-500">Embed high-touch service capabilities directly into your digital product.</p>
                                </div>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-start gap-4"
                            >
                                <div className="icon-accent">
                                    <Building2 className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-white text-base mb-1">Enterprise Concierge Operators</h4>
                                    <p className="text-sm text-zinc-500">Operational leverage for existing teams handling thousands of requests.</p>
                                </div>
                            </motion.li>
                        </ul>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/5 rounded-3xl blur-2xl opacity-60"></div>
                        <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 flex flex-col items-center justify-center text-center min-h-[380px]">
                            {/* Top decorative icons */}
                            <div className="absolute top-6 right-6 flex gap-2">
                                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Lock className="w-4 h-4 text-zinc-600" />
                                </div>
                                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Key className="w-4 h-4 text-zinc-600" />
                                </div>
                            </div>

                            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/20 flex items-center justify-center backdrop-blur-sm shadow-xl shadow-amber-500/10 mb-6">
                                <Shield className="w-10 h-10 text-amber-400" />
                            </div>
                            <h3 className="font-serif text-white text-2xl mb-3">Private by Design</h3>
                            <p className="text-zinc-500 max-w-sm leading-relaxed">
                                We don't sell data. We protect it. Our infrastructure is built for clients who value discretion above all.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
