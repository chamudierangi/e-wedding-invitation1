import React, { useState, useEffect } from 'react';

const Countdown = () => {
  // Target Wedding Date: August 30, 2026
  const targetDate = new Date('2026-08-30T10:00:00');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 text-center p-2">
      <div className="bg-amber-100/70 p-2.5 rounded-xl border border-amber-200">
        <span className="text-xl sm:text-2xl font-bold text-amber-950 font-sans">
          {timeLeft.days || '0'}
        </span>
        <p className="text-[10px] sm:text-xs text-amber-800 uppercase tracking-wider font-sans mt-0.5">Days</p>
      </div>

      <div className="bg-amber-100/70 p-2.5 rounded-xl border border-amber-200">
        <span className="text-xl sm:text-2xl font-bold text-amber-950 font-sans">
          {timeLeft.hours || '0'}
        </span>
        <p className="text-[10px] sm:text-xs text-amber-800 uppercase tracking-wider font-sans mt-0.5">Hours</p>
      </div>

      <div className="bg-amber-100/70 p-2.5 rounded-xl border border-amber-200">
        <span className="text-xl sm:text-2xl font-bold text-amber-950 font-sans">
          {timeLeft.minutes || '0'}
        </span>
        <p className="text-[10px] sm:text-xs text-amber-800 uppercase tracking-wider font-sans mt-0.5">Mins</p>
      </div>

      <div className="bg-amber-100/70 p-2.5 rounded-xl border border-amber-200">
        <span className="text-xl sm:text-2xl font-bold text-rose-600 font-sans animate-pulse">
          {timeLeft.seconds || '0'}
        </span>
        <p className="text-[10px] sm:text-xs text-rose-700 uppercase tracking-wider font-sans mt-0.5">Secs</p>
      </div>
    </div>
  );
};

export default Countdown;