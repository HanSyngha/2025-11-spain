import React from 'react';

export default function Layout({ children, title = "Spain Trip 2025", showBack = false, onBack, actionIcon, onAction }) {
    return (
        <div className="fixed inset-0 flex flex-col w-full bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark overflow-hidden">
            {/* Top App Bar */}
            <div className="shrink-0 z-10 flex items-center bg-card-light dark:bg-card-dark p-4 justify-between border-b border-gray-200 dark:border-gray-700">
                <div className="flex size-12 shrink-0 items-center justify-start">
                    {showBack ? (
                        <button onClick={onBack} className="material-symbols-outlined text-2xl cursor-pointer">arrow_back</button>
                    ) : (
                        <span className="material-symbols-outlined text-2xl">flight_takeoff</span>
                    )}
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center truncate px-2">
                    {title}
                </h2>
                <div className="flex w-12 items-center justify-end">
                    <button
                        onClick={onAction}
                        className="flex cursor-pointer items-center justify-center rounded-lg h-12 gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
                    >
                        <span className="material-symbols-outlined text-2xl">{actionIcon || 'more_vert'}</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-3xl mx-auto overflow-hidden relative flex flex-col">
                {children}
            </main>
        </div>
    );
}
