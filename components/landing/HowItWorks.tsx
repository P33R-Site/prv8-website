"use client";

import { Search, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 text-center mb-16">
                <p className="text-amber-400 text-sm font-medium mb-3">How It Works</p>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight">System Architecture</h2>
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Step 1 */}
                    <SpotlightCard className="group relative p-6 text-center transition-all hover:border-white/10">
                        <div className="text-xs font-mono text-amber-500/60 mb-4">01</div>
                        <div className="icon-accent mb-4 mx-auto">
                            <Search className="w-5 h-5 text-amber-400" />
                        </div>
                        <h3 className="font-serif text-lg text-white mb-2">Understand</h3>
                        <p className="text-xs text-zinc-500">Ingest context, history, and real-time availability.</p>
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-amber-500/20 z-10"></div>
                    </SpotlightCard>

                    {/* Step 2 */}
                    <SpotlightCard className="group relative p-6 text-center transition-all hover:border-white/10">
                        <div className="text-xs font-mono text-amber-500/60 mb-4">02</div>
                        <div className="icon-accent mb-4 mx-auto">
                            <Zap className="w-5 h-5 text-amber-400" />
                        </div>
                        <h3 className="font-serif text-lg text-white mb-2">Act</h3>
                        <p className="text-xs text-zinc-500">AI executes booking logic via voice or API.</p>
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-amber-500/20 z-10"></div>
                    </SpotlightCard>

                    {/* Step 3 */}
                    <SpotlightCard className="group relative p-6 text-center transition-all hover:border-white/10">
                        <div className="text-xs font-mono text-amber-500/60 mb-4">03</div>
                        <div className="icon-accent mb-4 mx-auto">
                            <ShieldCheck className="w-5 h-5 text-amber-400" />
                        </div>
                        <h3 className="font-serif text-lg text-white mb-2">Escalate</h3>
                        <p className="text-xs text-zinc-500">Nuance is detected and routed to human experts.</p>
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-amber-500/20 z-10"></div>
                    </SpotlightCard>

                    {/* Step 4 */}
                    <SpotlightCard className="group relative p-6 text-center transition-all hover:border-white/10">
                        <div className="text-xs font-mono text-amber-500/60 mb-4">04</div>
                        <div className="icon-accent mb-4 mx-auto">
                            <TrendingUp className="w-5 h-5 text-amber-400" />
                        </div>
                        <h3 className="font-serif text-lg text-white mb-2">Learn</h3>
                        <p className="text-xs text-zinc-500">Outcomes feed back into the preference engine.</p>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
