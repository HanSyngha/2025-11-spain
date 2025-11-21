import React from 'react';

export default function ReservationModal({ event, onClose }) {
    if (!event) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="relative w-full max-w-2xl bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-4 border-b border-border-light dark:border-border-dark flex justify-between items-center">
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    <button onClick={onClose} className="p-1 hover:bg-background-light dark:hover:bg-background-dark rounded-full">
                        <span className="icon">close</span>
                    </button>
                </div>

                <div className="overflow-y-auto p-4 flex flex-col gap-4">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto rounded-lg object-contain"
                    />
                    {event.subImages && event.subImages.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${event.title} - ${idx + 1}`}
                            className="w-full h-auto rounded-lg object-contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
