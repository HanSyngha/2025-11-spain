import React, { useState } from 'react';
import { getImagePath } from '../utils/image';

export default function ReservationModal({ event, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!event) return null;

    // Combine main image and subImages into a single array
    const images = [event.image, ...(event.subImages || [])].filter(Boolean);
    const hasMultiple = images.length > 1;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4 bg-black/90 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="relative w-full max-w-2xl bg-card-light dark:bg-card-dark md:rounded-xl rounded-t-2xl overflow-hidden shadow-2xl h-[95dvh] md:h-auto md:max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="p-4 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-background-light dark:bg-background-dark shrink-0 z-10">
                    <div>
                        <h3 className="font-bold text-lg text-text-light dark:text-text-dark">{event.title}</h3>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">
                            예약 확인증 {hasMultiple ? `(${currentIndex + 1}/${images.length})` : ''}
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Carousel Content */}
                <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden group">
                    <img
                        src={getImagePath(images[currentIndex])}
                        alt={`${event.title} - ${currentIndex + 1}`}
                        className="max-w-full max-h-full object-contain"
                    />

                    {/* Navigation Buttons (only if multiple) */}
                    {hasMultiple && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                            >
                                <span className="material-symbols-outlined text-3xl">chevron_left</span>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                            >
                                <span className="material-symbols-outlined text-3xl">chevron_right</span>
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/40'
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark flex justify-end shrink-0 pb-8 md:pb-4 z-10">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors w-full md:w-auto"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
}
