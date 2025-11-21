import React from 'react';
import EventCard from './EventCard';

export default function Timeline({ itinerary, onImageClick }) {
    return (
        <div className="flex flex-col gap-6">
            {itinerary.map((day, index) => (
                <div key={index} className="animate-fade-in">
                    <div className="flex items-baseline justify-between mb-2 px-1">
                        <h2 className="text-xl font-bold text-primary">{day.day}</h2>
                        <span className="text-sm font-medium text-subtext">{day.date}</span>
                    </div>
                    <div className="mb-3 px-1">
                        <h3 className="text-lg font-semibold">{day.title}</h3>
                        <p className="text-sm text-subtext">{day.description}</p>
                    </div>

                    <div className="pl-2 border-l-2 border-border-light dark:border-border-dark ml-2 space-y-4">
                        {day.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="pl-4 relative">
                                {/* Timeline dot */}
                                <div className="absolute -left-[1.35rem] top-4 w-3 h-3 rounded-full bg-border-light dark:bg-border-dark border-2 border-background-light dark:border-background-dark"></div>
                                <EventCard event={event} onImageClick={onImageClick} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
