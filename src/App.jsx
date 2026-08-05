import React from 'react';
import { Heart } from 'lucide-react';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 py-8">
      {/* Wedding Card Container */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-amber-200 text-center p-6 md:p-8 space-y-6">
        
        {/* Header Badge */}
        <div className="flex justify-center items-center gap-2 text-amber-600 font-semibold tracking-widest uppercase text-xs">
          <span>Save The Date</span>
          <Heart className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
        </div>

        {/* Couple Names */}
        <div className="space-y-2">
          <h1 className="text-4xl font-serif font-bold text-gray-800">Kasun</h1>
          <p className="text-amber-600 font-serif italic text-xl">&</p>
          <h1 className="text-4xl font-serif font-bold text-gray-800">Nisha</h1>
        </div>

        <hr className="border-t border-amber-200 w-1/2 mx-auto" />

        {/* Invitation Text */}
        <p className="text-gray-600 italic text-sm">
          We invite you to celebrate our special day with us!
        </p>

        {/* Live Countdown Timer Component */}
        <Countdown targetDate="2026-12-28T10:00:00" />

        {/* Event Schedule & Google Maps Location Component */}
        <EventDetails />

      </div>
    </div>
  );
}

export default App;