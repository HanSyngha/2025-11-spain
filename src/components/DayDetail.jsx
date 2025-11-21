import React, { useState } from 'react';
import { getImagePath } from '../utils/image';
import MapComponent from './MapComponent';

export default function DayDetail({ day, onBack, onImageClick }) {
    const [mapCenter, setMapCenter] = useState(day.coordinates);
    const [mapZoom, setMapZoom] = useState(13);

    // Helper to get icon based on event type
    const getIcon = (type) => {
        switch (type) {
            case 'flight': return 'flight';
            case 'stay': return 'bed';
            case 'drive': return 'directions_car';
            case 'car': return 'key';
            case 'ticket': return 'confirmation_number';
            case 'activity': return 'camera_alt';
            default: return 'circle';
        }
    };

    // Helper to get color based on event type
    const getColorClass = (type) => {
        switch (type) {
            case 'flight': return 'text-blue-500 bg-blue-500/10 ring-1 ring-blue-500/20';
            case 'stay': return 'text-teal-500 bg-teal-500/10 ring-1 ring-teal-500/20';
            case 'drive': return 'text-orange-500 bg-orange-500/10 ring-1 ring-orange-500/20';
            case 'car': return 'text-purple-500 bg-purple-500/10 ring-1 ring-purple-500/20';
            case 'ticket': return 'text-red-500 bg-red-500/10 ring-1 ring-red-500/20';
            default: return 'text-primary bg-primary/10 ring-1 ring-primary/20';
        }
    };

    const handleEventClick = (event) => {
        if (event.coordinates) {
            setMapCenter(event.coordinates);
            setMapZoom(15);
        }
    };

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden relative">
            {/* Map Section - Sticky at top */}
            <div className="w-full h-[35vh] shrink-0 z-0 relative">
                <MapComponent
                    events={day.events}
                    center={mapCenter}
                    zoom={mapZoom}
                />
                {/* Gradient overlay for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background-light/20 to-transparent dark:from-background-dark/20 pointer-events-none"></div>
            </div>

            {/* Content Section - Scrollable */}
            <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark relative z-10 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] rounded-t-3xl -mt-6">
                {/* Sticky Header inside scroll view */}
                <div className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-800 rounded-t-3xl">
                    <div className="flex items-center justify-between mb-1">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight tracking-tight">
                            {day.title}
                        </h2>
                        <button onClick={onBack} className="p-2 -mr-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">calendar_today</span>
                        {day.date}
                    </p>
                </div>

                {/* Timeline */}
                <div className="grid grid-cols-[auto_1fr] gap-x-5 px-6 py-6 pb-24">
                    {day.events.map((event, index) => {
                        const isLast = index === day.events.length - 1;
                        const colorClass = getColorClass(event.type);

                        return (
                            <React.Fragment key={index}>
                                {/* Timeline Line & Icon */}
                                <div className="flex flex-col items-center pt-1 relative">
                                    {/* Connector Line */}
                                    {!isLast && (
                                        <div className="absolute top-10 bottom-[-24px] w-[2px] bg-gray-100 dark:bg-gray-800"></div>
                                    )}

                                    <button
                                        onClick={() => handleEventClick(event)}
                                        className={`flex items-center justify-center size-10 rounded-full ${colorClass} z-10 transition-transform active:scale-95 shadow-sm shrink-0 bg-background-light dark:bg-background-dark ring-4 ring-background-light dark:ring-background-dark`}
                                    >
                                        <span className="material-symbols-outlined text-xl">{getIcon(event.type)}</span>
                                    </button>
                                </div>

                                {/* Content */}
                                <div
                                    className="flex flex-col py-1 pb-8 cursor-pointer group min-w-0"
                                    onClick={() => handleEventClick(event)}
                                >
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <p className="text-subtext-light dark:text-subtext-dark text-xs font-bold font-mono tracking-wide uppercase opacity-70">
                                            {event.time}
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all">
                                        <p className="text-text-light dark:text-text-dark text-base font-bold leading-snug group-hover:text-primary transition-colors break-words">
                                            {event.title}
                                        </p>
                                        <p className="text-subtext-light dark:text-subtext-dark text-sm mt-1.5 leading-relaxed break-words text-pretty">
                                            {event.description}
                                        </p>

                                        {/* Reservation Button */}
                                        {event.image && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); onImageClick(event); }}
                                                className="mt-3 w-full py-2.5 bg-primary/5 hover:bg-primary/10 text-primary text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 border border-primary/10"
                                            >
                                                <span className="material-symbols-outlined text-lg">confirmation_number</span>
                                                <span>예약 확인</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
