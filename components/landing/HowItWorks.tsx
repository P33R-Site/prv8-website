"use client";

import { Search, Zap, ShieldAlert, BarChart3 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">System Architecture</h2>
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Step 1 */}
                    <SpotlightCard className="group relative p-6 border border-white/5 rounded-xl bg-zinc-900/20 text-center md:text-left transition-colors hover:border-white/10">
                        <div className="text-xs font-mono text-zinc-600 mb-4 transition-colors group-hover:text-zinc-500">01</div>
                        <div className="mb-3 text-zinc-400 group-hover:text-white transition-colors"><Search className="w-6 h-6" /></div>
                        <h3 className="text-white font-medium mb-1">Understand</h3>
                        <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Ingest context, history, and real-time availability.</p>
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-zinc-800 z-10"></div>
                    </SpotlightCard>

                    {/* Step 2 */}
                    <SpotlightCard className="group relative p-6 border border-white/5 rounded-xl bg-zinc-900/20 text-center md:text-left transition-colors hover:border-white/10">
                        <div className="text-xs font-mono text-zinc-600 mb-4 transition-colors group-hover:text-zinc-500">02</div>
                        <div className="mb-3 text-zinc-400 group-hover:text-white transition-colors"><Zap className="w-6 h-6" /></div>
                        <h3 className="text-white font-medium mb-1">Act</h3>
                        <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">AI executes booking logic via voice or API.</p>
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-zinc-800 z-10"></div>
                    </SpotlightCard>

                    {/* Step 3 */}
                    <SpotlightCard className="group relative p-6 border border-white/5 rounded-xl bg-zinc-900/20 text-center md:text-left transition-colors hover:border-white/10">
                        <div className="text-xs font-mono text-zinc-600 mb-4 transition-colors group-hover:text-zinc-500">03</div>
                        <div className="mb-3 text-zinc-400 group-hover:text-white transition-colors"><ShieldAlert className="w-6 h-6" /></div>
                        <h3 className="text-white font-medium mb-1">Escalate</h3>
                        <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Nuance is detected and routed to human experts.</p>
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-zinc-800 z-10"></div>
                    </SpotlightCard>

                    {/* Step 4 */}
                    <SpotlightCard className="group relative p-6 border border-white/5 rounded-xl bg-zinc-900/20 text-center md:text-left transition-colors hover:border-white/10">
                        <div className="text-xs font-mono text-zinc-600 mb-4 transition-colors group-hover:text-zinc-500">04</div>
                        <div className="mb-3 text-zinc-400 group-hover:text-white transition-colors"><BarChart3 className="w-6 h-6" /></div>
                        <h3 className="text-white font-medium mb-1">Learn</h3>
                        <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Outcomes feed back into the preference engine.</p>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
