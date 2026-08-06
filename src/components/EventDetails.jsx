import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventDetails = () => {
  return (
    <div className="space-y-3 pt-2 text-left">
      {/* Date */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/90 border border-amber-200 shadow-sm">
        <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
          <Calendar size={20} />
        </div>
        <div>
          <h4 className="text-xs text-amber-700 font-semibold uppercase">Date</h4>
          <p className="text-sm font-bold text-amber-950">Sunday, August 30, 2026</p>
        </div>
      </div>

      {/* Time */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/90 border border-amber-200 shadow-sm">
        <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
          <Clock size={20} />
        </div>
        <div>
          <h4 className="text-xs text-amber-700 font-semibold uppercase">Time</h4>
          <p className="text-sm font-bold text-amber-950">10:00 AM onwards</p>
        </div>
      </div>

      {/* Location / Venue */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/90 border border-amber-200 shadow-sm">
        <div className="p-2 bg-rose-100 rounded-lg text-rose-700">
          <MapPin size={20} />
        </div>
        <div>
          <h4 className="text-xs text-rose-700 font-semibold uppercase">Venue</h4>
          <p className="text-sm font-bold text-amber-950">Green Heritage - Gampaha</p>
        </div>
      </div>

      {/* Location Map Button (Right below Venue) */}
      <div className="pt-2">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Green+Heritage+Gampaha" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
        >
          <MapPin size={18} /> View Green Heritage (Gampaha) on Map
        </a>
      </div>
    </div>
  );
};

export default EventDetails;