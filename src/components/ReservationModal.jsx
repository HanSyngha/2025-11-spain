import React from 'react';
import { getImagePath } from '../utils/image';

export default function ReservationModal({ event, onClose }) {
    if (!event) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="relative w-full max-w-2xl bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="p-4 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-background-light dark:bg-background-dark">
                    <div>
                        <h3 className="font-bold text-lg text-text-light dark:text-text-dark">{event.title}</h3>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">예약 확인증</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 flex flex-col gap-4 bg-gray-100 dark:bg-gray-900">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm">
                        <img
                            src={getImagePath(event.image)}
                            alt={event.title}
                            className="w-full h-auto rounded object-contain"
                        />
                    </div>
                    {event.subImages && event.subImages.map((img, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm">
                            <img
                                src={getImagePath(img)}
                                alt={`${event.title} - ${idx + 1}`}
                                className="w-full h-auto rounded object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
}
