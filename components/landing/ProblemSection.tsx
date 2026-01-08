"use client";

import { PhoneOff, FileClock, BrainCircuit } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ProblemSection() {
    return (
        <section className="py-32 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16">
                    <p className="text-amber-400 text-sm font-medium mb-3">The Challenge</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">The Friction in Luxury</h2>
                    <p className="text-zinc-500 max-w-lg">Current concierge services are high-touch but low-intelligence.</p>
                </div>

                {/* Bento Grid: 2+1 Layout */}
                <div className="grid md:grid-cols-3 gap-4">
                    {/* Left column: 2 stacked cards */}
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                        <SpotlightCard className="group p-8 transition-all hover:border-white/10">
                            <div className="icon-accent mb-6">
                                <PhoneOff className="w-5 h-5 text-amber-400" />
                            </div>
                            <h3 className="font-serif text-xl font-medium text-white mb-3">Runs on Phone Calls</h3>
                            <p className="text-sm leading-relaxed text-zinc-500">
                                Async communication is non-existent. Simple requests require holding times and verbal confirmation loops.
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className="group p-8 transition-all hover:border-white/10">
                            <div className="icon-accent mb-6">
                                <FileClock className="w-5 h-5 text-amber-400" />
                            </div>
                            <h3 className="font-serif text-xl font-medium text-white mb-3">Manual Workflows</h3>
                            <p className="text-sm leading-relaxed text-zinc-500">
                                Agents operate reactively with zero foresight. Preferences are lost in unstructured notes.
                            </p>
                        </SpotlightCard>
                    </div>

                    {/* Right column: 1 tall card */}
                    <SpotlightCard className="group p-8 transition-all hover:border-white/10 flex flex-col justify-center">
                        <div className="icon-accent mb-6">
                            <BrainCircuit className="w-5 h-5 text-amber-400" />
                        </div>
                        <h3 className="font-serif text-xl font-medium text-white mb-3">Unintelligent High-Touch</h3>
                        <p className="text-sm leading-relaxed text-zinc-500">
                            Human effort is wasted on booking logistics instead of curation and relationship management. The service layer lacks intelligence.
                        </p>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
