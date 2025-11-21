import React from 'react';
import { getImagePath } from '../utils/image';

export default function DayList({ itinerary, onDayClick }) {
    // Helper to find a representative image for the day
    const getDayImage = (day) => {
        const eventWithImage = day.events.find(e => e.image);
        if (eventWithImage) return getImagePath(eventWithImage.image);

        // Fallback images based on location/title keywords (simulated)
        if (day.location.includes('Barcelona')) return 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=200&auto=format&fit=crop';
        if (day.location.includes('Sevilla')) return 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=200&auto=format&fit=crop';
        if (day.location.includes('Granada')) return 'https://images.unsplash.com/photo-1620633629329-2816a62c4444?q=80&w=200&auto=format&fit=crop';
        if (day.location.includes('Ronda')) return 'https://images.unsplash.com/photo-1562672286-192f6872961c?q=80&w=200&auto=format&fit=crop';
        if (day.location.includes('Cordoba')) return 'https://images.unsplash.com/photo-1563816686-9e364691456e?q=80&w=200&auto=format&fit=crop';
        if (day.location.includes('Valencia')) return 'https://images.unsplash.com/photo-1572086022972-105571660742?q=80&w=200&auto=format&fit=crop';

        return 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=200&auto=format&fit=crop'; // Default travel
    };

    return (
        <div className="flex flex-col gap-4">
            {itinerary.map((day, index) => (
                <a
                    key={index}
                    onClick={(e) => { e.preventDefault(); onDayClick(day); }}
                    className="block bg-card-light dark:bg-card-dark p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    href="#"
                >
                    <div className="flex gap-4 items-center">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px] shrink-0"
                            style={{ backgroundImage: `url("${getDayImage(day)}")` }}
                        ></div>
                        <div className="flex flex-1 flex-col justify-center min-w-0">
                            <p className="text-text-light dark:text-text-dark text-base font-bold leading-normal truncate">{day.day}</p>
                            <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal truncate">{day.title}</p>
                            <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal pt-1">{day.date}</p>
                        </div>
                        <div className="shrink-0">
                            <div className="text-text-light dark:text-text-dark flex size-7 items-center justify-center">
                                <span className="material-symbols-outlined text-2xl">chevron_right</span>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
