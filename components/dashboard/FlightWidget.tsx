import React from 'react';
import Image from 'next/image';
import { Plane, ArrowRight } from 'lucide-react';

interface FlightData {
    origin: string;
    destination: string;
    carrier: string;
    class: string;
    date: string;
    flightNumber: string;
    price: string;
}

export const FlightWidget: React.FC<{ status?: 'pending' | 'completed', data: FlightData }> = ({ status = 'completed', data }) => {
    return (
        <div className="h-full p-6 flex flex-col relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/demo/flight-exterior.png"
                    alt="Flight"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                    sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-blue-900/20" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-white font-medium text-sm opacity-80">Flight Agent</h3>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${status === 'pending'
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/20'
                        : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20'
                        }`}>
                        {status}
                    </div>
                </div>

                <div className="mt-2">
                    <div className="mt-2">
                        <p className="w-full bg-transparent border-none p-0 text-white/60 text-sm mb-4 focus:ring-0 focus:outline-none">
                            Ready to book your flight!
                        </p>
                        <div className="flex items-center gap-4">
                            <Plane className="w-8 h-8 text-white rotate-45 flex-shrink-0" />
                            <div className="flex items-center gap-2">
                                <div className="relative group/swap cursor-pointer">
                                    <span className="text-3xl font-bold text-white tracking-tight">{data.origin}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-white/40 flex-shrink-0" />
                                <div className="relative group/swap cursor-pointer">
                                    <span className="text-3xl font-bold text-white tracking-tight">{data.destination}</span>
                                </div>
                            </div>
                            <span className="w-20 bg-transparent border-none p-0 text-xl text-white/40 font-light focus:ring-0 focus:outline-none">
                                {data.flightNumber}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 pl-12 cursor-pointer hover:bg-white/5 rounded p-1 -ml-1 w-fit transition-colors">
                            <span className="text-white/40 text-xs">{data.date} • {data.class}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
