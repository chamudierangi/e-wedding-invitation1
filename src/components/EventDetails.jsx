import React from 'react';
import { Clock, MapPin, Navigation } from 'lucide-react';

const EventDetails = () => {
  // Google Maps Location Link (ඔයාට කැමති Location link එකක් මෙතනට දාන්න පුළුවන්)
  const mapUrl = "https://maps.google.com/?q=Grand+Royal+Hotel+Colombo";

  return (
    <div className="space-y-4 text-left">
      <h3 className="text-center text-xs font-semibold uppercase tracking-widest text-amber-700">
        Wedding Schedule & Venue
      </h3>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        
        {/* Poruwa Ceremony Card */}
        <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-100 space-y-1">
          <p className="font-serif font-bold text-gray-800 text-base">Poruwa Ceremony</p>
          <div className="flex items-center gap-1.5 text-gray-600 text-xs">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>08:30 AM - 09:15 AM</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Main Ballroom - Level 2</p>
        </div>

        {/* Reception Card */}
        <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 space-y-1">
          <p className="font-serif font-bold text-gray-800 text-base">Wedding Reception</p>
          <div className="flex items-center gap-1.5 text-gray-600 text-xs">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>11:30 AM Onwards</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Grand Banquet Hall</p>
        </div>

      </div>

      {/* Location & Map Button */}
      <div className="p-4 bg-white rounded-xl border border-amber-200 text-center space-y-2">
        <div className="flex items-center justify-center gap-1.5 font-semibold text-gray-800 text-sm">
          <MapPin className="w-4 h-4 text-rose-500" />
          <span>Grand Royal Hotel, Colombo</span>
        </div>
        
        {/* Google Maps External Button */}
        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions (Google Maps)</span>
        </a>
      </div>
    </div>
  );
};

export default EventDetails;