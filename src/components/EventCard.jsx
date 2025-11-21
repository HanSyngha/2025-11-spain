import React, { useState } from 'react';

export default function EventCard({ event, onImageClick }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const getIcon = (type) => {
        switch (type) {
            case 'flight': return 'flight';
            case 'stay': return 'hotel';
            case 'drive': return 'directions_car';
            case 'car': return 'key';
            case 'ticket': return 'confirmation_number';
            case 'activity': return 'attractions';
            default: return 'event';
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'flight': return 'text-blue-500';
            case 'ticket': return 'text-orange-500';
            default: return 'text-gray-500';
        }
    };

    return (
        <div className="card mb-3 flex gap-3">
            <div className={`flex flex-col items-center w-12 shrink-0 pt-1 ${getTypeColor(event.type)}`}>
                <span className="icon">{getIcon(event.type)}</span>
                <span className="text-xs font-bold mt-1">{event.time}</span>
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base truncate">{event.title}</h3>
                <p className="text-sm text-subtext">{event.description}</p>

                {event.details && (
                    <p className="text-xs mt-1 opacity-80 bg-background-light dark:bg-background-dark p-1.5 rounded inline-block">
                        {event.details}
                    </p>
                )}

                {event.image && (
                    <div className="mt-3">
                        <button
                            onClick={() => onImageClick(event)}
                            className="text-xs flex items-center gap-1 text-primary font-medium hover:underline"
                        >
                            <span className="icon text-sm">image</span>
                            예약 확인증 보기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
