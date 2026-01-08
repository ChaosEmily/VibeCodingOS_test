import React from 'react'
import StatsHeader from './components/StatsHeader'
import DailyGrid from './components/DailyGrid'
import WeeklyTrend from './components/WeeklyTrend'

function App() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-900 overflow-x-hidden">
            <StatsHeader />

            <main className="flex-1 w-full max-w-lg mx-auto py-4 px-4">
                <DailyGrid />
                <WeeklyTrend />
            </main>

            <footer className="py-8 text-center text-gray-600 text-[10px] uppercase tracking-widest font-bold">
                Vibe Coding Diet Tracker POC • 2026
            </footer>
        </div>
    )
}

export default App
