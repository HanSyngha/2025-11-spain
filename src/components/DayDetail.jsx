import React from 'react';
import { getImagePath } from '../utils/image';

export default function DayDetail({ day, onBack, onImageClick }) {
    // Helper to get icon based on event type
    const getIcon = (type) => {
        switch (type) {
            case 'flight': return 'flight';
            case 'stay': return 'bed'; // Changed to 'bed' to match design
            case 'drive': return 'directions_car';
            case 'car': return 'key';
            case 'ticket': return 'confirmation_number';
            case 'activity': return 'camera_alt'; // Generic activity
            default: return 'circle';
        }
    };

    // Helper to get color based on event type (using Tailwind classes)
    const getColorClass = (type) => {
        switch (type) {
            case 'flight': return 'text-blue-500 bg-blue-500/20';
            case 'stay': return 'text-teal-500 bg-teal-500/20';
            case 'drive': return 'text-orange-500 bg-orange-500/20';
            case 'car': return 'text-purple-500 bg-purple-500/20';
            case 'ticket': return 'text-red-500 bg-red-500/20';
            default: return 'text-primary bg-primary/20';
        }
    };

    // Map image logic (simulated based on location)
    const getMapImage = (location) => {
        // In a real app, this would be dynamic. Using placeholders for now.
        return 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAD_ugVaB_m7oOspuKT_EtFNLgGTHCA-BPdL0CaeD0HIlgLnjatUfLYmcTty1tMLyNAaNxQwRJZoQklxfKhBl91VfYHDNO7R59w2NkvLFQ-x3TJGEQrjuPUeIQfQP6KEshGo-oelPRBiZUZ-ReO7ABOQKXK7Czh_3oTlBr7KvedrwLNz64hTK0vSis_Kxg_jXdYGCeCixYN478YEhmSjwX8lKRfeayffA25jXqHnnHI-WaJDumjLSz9sT1Kh_XhlmyxJ6riD9bBmTa';
    };

    return (
        <div className="flex flex-col h-full">
            {/* Map Section */}
            <div className="px-4 py-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover shadow-sm"
                    style={{ backgroundImage: `url("${getMapImage(day.location)}")` }}
                ></div>
            </div>

            {/* Section Header */}
            <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                {day.title}
            </h2>

            {/* Timeline */}
            <div className="grid grid-cols-[auto_1fr] gap-x-4 px-4 pb-8">
                {day.events.map((event, index) => {
                    const isLast = index === day.events.length - 1;
                    const colorClass = getColorClass(event.type);

                    return (
                        <React.Fragment key={index}>
                            {/* Timeline Line & Icon */}
                            <div className="flex flex-col items-center gap-1 pt-1">
                                {index === 0 && <div className="h-3"></div>} {/* Top spacing for first item */}

                                <div className={`flex items-center justify-center size-10 rounded-full ${colorClass}`}>
                                    <span className="material-symbols-outlined">{getIcon(event.type)}</span>
                                </div>

                                {!isLast && (
                                    <div className="w-[2px] bg-gray-200 dark:bg-gray-700 h-full min-h-[2rem]"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col py-3 pb-6">
                                <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                                    {event.time}
                                </p>
                                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                                    {event.title}
                                </p>
                                <p className="text-subtext-light dark:text-subtext-dark text-sm mt-1">
                                    {event.description}
                                </p>

                                {/* Reservation Button */}
                                {event.image && (
                                    <button
                                        onClick={() => onImageClick(event)}
                                        className="mt-2 self-start px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors flex items-center gap-1"
                                    >
                                        <span className="material-symbols-outlined text-base">confirmation_number</span>
                                        예약 확인
                                    </button>
                                )}
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}
