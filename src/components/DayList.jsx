import React from 'react';
import { getImagePath } from '../utils/image';

export default function DayList({ itinerary, onDayClick }) {
    // Helper to find a representative image for the day
    const getDayImage = (day) => {
        if (day.thumbnail) return getImagePath(day.thumbnail);

        // Fallback
        return 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=200&auto=format&fit=crop';
    };

    return (
        <div className="flex flex-col gap-4 pb-8">
            {itinerary.map((day, index) => (
                <a
                    key={index}
                    onClick={(e) => { e.preventDefault(); onDayClick(day); }}
                    className="block bg-card-light dark:bg-card-dark p-4 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 dark:border-gray-800 active:scale-[0.98]"
                    href="#"
                >
                    <div className="flex gap-4 items-center">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-[80px] shrink-0 shadow-inner bg-gray-200 dark:bg-gray-700"
                            style={{ backgroundImage: `url("${getDayImage(day)}")` }}
                        ></div>
                        <div className="flex flex-1 flex-col justify-center min-w-0 gap-1">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                    {day.day}
                                </span>
                                <p className="text-subtext-light dark:text-subtext-dark text-xs font-medium truncate">
                                    {day.date}
                                </p>
                            </div>
                            <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight truncate">
                                {day.title}
                            </p>
                            <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal truncate opacity-80">
                                {day.location}
                            </p>
                        </div>
                        <div className="shrink-0">
                            <div className="text-gray-400 dark:text-gray-600 flex size-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="material-symbols-outlined text-2xl">chevron_right</span>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
