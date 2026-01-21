"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlightWidget } from '@/components/dashboard/FlightWidget';
import { StayWidget } from '@/components/dashboard/StayWidget';
import { RideWidget } from '@/components/dashboard/RideWidget';
import { ActivityWidget } from '@/components/dashboard/ActivityWidget';
import { CalendarWidget } from '@/components/dashboard/CalendarWidget';
import { WeatherWidget } from '@/components/dashboard/WeatherWidget';
import { ChatDemoPreview, DemoProvider, useDemoContext } from '@/components/landing/ChatDemoPreview';

const DEMO_DATA = {
    flight: {
        origin: "SFO",
        destination: "DXB",
        carrier: "Emirates",
        class: "Business Class",
        date: "June 5 - June 9",
        flightNumber: "EK 226",
        price: "$6,200"
    },
    stay: {
        hotelName: "One&Only Royal Mirage",
        roomType: "King Suite",
        guests: 2,
        checkIn: "June 6",
        checkOut: "June 9",
        price: "$5,800"
    },
    ride: {
        pickup: "Dubai Int'l (DXB)",
        serviceLevel: "Luxury",
        dropoff: "Burj Al Arab",
        price: "Included"
    }
};

// Widget container with animation - matches visit-dubai's simple opacity fade
const WidgetContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

function DashboardWidgets() {
    const { demoStep } = useDemoContext();

    return (
        <div className="flex-1 p-6 overflow-hidden bg-zinc-950/50">
            {/* Grid matching visit-dubai DemoCard exactly: 12 columns with auto-rows */}
            <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-6 auto-rows-max grid-flow-row-dense">
                <AnimatePresence>

                    {/* STEP 1: Context Overview + Flight (Calendar, Weather, Flight appear together) */}
                    {demoStep >= 1 && (
                        <React.Fragment key="overview-fragment">
                            {/* Calendar (3 cols) */}
                            <WidgetContainer key="calendar" className="col-span-1 md:col-span-3 min-h-[160px] md:min-h-[200px]">
                                <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-amber-500/50 transition-all border border-white/10 bg-zinc-900/80">
                                    <CalendarWidget />
                                </div>
                            </WidgetContainer>

                            {/* Weather (3 cols) */}
                            <WidgetContainer key="weather" className="col-span-1 md:col-span-3 min-h-[160px] md:min-h-[200px]">
                                <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-amber-500/50 transition-all border border-white/10">
                                    <WeatherWidget temperature="95" />
                                </div>
                            </WidgetContainer>

                            {/* Flight (6 cols) - Pending until step 2, then completed */}
                            <WidgetContainer key="flight" className="col-span-2 md:col-span-6 min-h-[200px]">
                                <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-amber-500/50 transition-all border border-white/10 bg-zinc-900/80">
                                    <FlightWidget status={demoStep >= 2 ? 'completed' : 'pending'} data={DEMO_DATA.flight} />
                                </div>
                            </WidgetContainer>
                        </React.Fragment>
                    )}

                    {/* STEP 3: Hotel (4 cols) */}
                    {demoStep >= 3 && (
                        <WidgetContainer key="hotel" className="col-span-2 md:col-span-4 min-h-[200px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-amber-500/50 transition-all border border-white/10">
                                <StayWidget data={DEMO_DATA.stay} />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 4: Ride (4 cols) */}
                    {demoStep >= 4 && (
                        <WidgetContainer key="ride" className="col-span-1 md:col-span-4 min-h-[160px] md:min-h-[200px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-amber-500/50 transition-all border border-white/10 bg-zinc-900/80">
                                <RideWidget data={DEMO_DATA.ride} />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 5: Dining (4 cols) */}
                    {demoStep >= 5 && (
                        <WidgetContainer key="dining" className="col-span-1 md:col-span-4 min-h-[160px] md:min-h-[200px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-amber-500/50 transition-all border border-white/10">
                                <ActivityWidget
                                    title="Ossiano"
                                    subtitle="Underwater Fine Dining"
                                    image="/images/demo/dining-ossiano.png"
                                    category="Dining"
                                />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 6: Shopping (4 cols) */}
                    {demoStep >= 6 && (
                        <WidgetContainer key="shopping" className="col-span-1 md:col-span-4 min-h-[160px] md:min-h-[200px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-amber-500/50 transition-all border border-white/10">
                                <ActivityWidget
                                    title="SunSport SPF 50"
                                    subtitle="High SPF Protection"
                                    price="$8.97"
                                    image="/images/demo/shopping-sunscreen.png"
                                    category="Shopping"
                                />
                            </div>
                        </WidgetContainer>
                    )}

                    {/* STEP 7: Experience (8 cols) */}
                    {demoStep >= 7 && (
                        <WidgetContainer key="experiences" className="col-span-2 md:col-span-8 min-h-[200px]">
                            <div className="glass-card rounded-3xl overflow-hidden h-full cursor-pointer hover:border-amber-500/50 transition-all border border-white/10">
                                <ActivityWidget
                                    title="Private Desert Safari"
                                    subtitle="Vintage Land Rovers"
                                    image="/images/demo/experience-safari.png"
                                    category="Experiences"
                                />
                            </div>
                        </WidgetContainer>
                    )}

                </AnimatePresence>

                {/* Empty state when no widgets yet */}
                {demoStep === 0 && (
                    <div className="col-span-2 md:col-span-12 flex items-center justify-center h-[400px] text-white/30 text-sm">
                        <div className="text-center">
                            <p className="text-lg mb-2">🎯</p>
                            <p>Watching the conversation...</p>
                            <p className="text-xs mt-1">Widgets will appear as bookings are confirmed</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export function DashboardPreview() {
    return (
        <DemoProvider>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden"
            >
                {/* Ambient glow */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

                {/* Split View Container - Chat + Dashboard */}
                <div className="flex flex-col lg:flex-row min-h-[600px] lg:h-[700px] relative z-10">

                    {/* Left: Chat Demo */}
                    <div className="w-full lg:w-[380px] h-[400px] lg:h-full shrink-0 border-b lg:border-b-0 lg:border-r border-white/10">
                        <ChatDemoPreview />
                    </div>

                    {/* Right: Dashboard Widgets - Progressive appearance matching visit-dubai */}
                    <DashboardWidgets />
                </div>
            </motion.div>
        </DemoProvider>
    );
}
