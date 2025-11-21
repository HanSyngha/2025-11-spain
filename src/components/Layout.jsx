import React from 'react';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen pb-20">
            <header className="sticky top-0 z-10 bg-card-light dark:bg-card-dark border-b border-border-light dark:border-border-dark px-4 py-3 shadow-sm">
                <div className="container flex items-center justify-between">
                    <span className="icon">flight_takeoff</span>
                    <h1 className="text-lg font-bold">Spain Trip 2025</h1>
                    <div className="w-6"></div> {/* Spacer for centering */}
                </div>
            </header>
            <main className="container pt-6">
                {children}
            </main>
        </div>
    );
}
