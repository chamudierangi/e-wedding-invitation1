import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="py-6 px-4 bg-amber-50/50 rounded-xl border border-amber-200 text-center space-y-3">
      <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
        Counting Down To The Big Day
      </p>
      
      <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-white p-2 rounded-lg shadow-sm border border-amber-100 flex flex-col items-center">
            <span className="text-xl font-bold text-gray-800 font-mono">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] text-amber-600 font-medium uppercase tracking-wider">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;