import React from 'react';

interface TimezoneWidgetProps {
    city: string;
    time: string;
    offset: string;
}

export const TimezoneWidget: React.FC<TimezoneWidgetProps> = ({ city, time, offset }) => {
    return (
        <div className="h-full p-4 flex flex-col justify-between bg-gradient-to-br from-zinc-900/90 to-zinc-800/50 border border-white/10">
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{city}</div>
            <div>
                <div className="text-white text-2xl font-light tracking-tight">{time}</div>
                <div className="text-white/50 text-xs">{offset}</div>
            </div>
        </div>
    );
};
