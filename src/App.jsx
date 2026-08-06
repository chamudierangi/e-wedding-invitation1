import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';

// Import Assets (Make sure images are in src/assets)
import BrideImg from './assets/bride.jpg';
import GroomImg from './assets/groom.jpg';
import CoupleMainImg from './assets/couple.jpg';

// Rose Petal Component
const RosePetal = ({ delay, left, size, duration }) => (
  <motion.div
    initial={{ y: '-10vh', opacity: 0, rotate: 0 }}
    animate={{
      y: '105vh',
      opacity: [0, 1, 1, 0],
      rotate: [0, 180, 360],
      x: ['0px', '25px', '-25px', '0px']
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: 'linear'
    }}
    style={{ left: `${left}%` }}
    className="fixed top-0 pointer-events-none z-50"
  >
    {/* SVG Rose Petal Shape */}
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#e11d48"
      className="drop-shadow-md opacity-80"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </motion.div>
);

function App() {
  // Generate random data for 25 falling rose petals
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const generatedPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      size: Math.floor(Math.random() * 12) + 16,
      duration: Math.random() * 4 + 5
    }));
    setPetals(generatedPetals);
  }, []);

  // Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  const imageHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-100 py-10 px-4 flex flex-col items-center font-serif text-amber-950 relative overflow-hidden">
      
      {/* 🌹 Falling Rose Petals Effect Layer */}
      {petals.map((petal) => (
        <RosePetal
          key={petal.id}
          delay={petal.delay}
          left={petal.left}
          size={petal.size}
          duration={petal.duration}
        />
      ))}

      {/* Outer Card Container */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-amber-300 p-6 sm:p-8 space-y-8 text-center relative overflow-hidden z-10"
      >
        {/* Background Decorative Glow */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-200/40 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-200/40 rounded-full blur-xl pointer-events-none" />

        {/* 1. Header & Main Couple Image */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-widest uppercase border border-amber-300 shadow-sm">
              <Sparkles size={14} className="text-amber-600" /> Save The Date
            </span>
          </div>
          
          {/* MAIN COUPLE IMAGE */}
          <motion.div 
            whileHover="hover"
            variants={imageHover}
            className="flex justify-center relative py-2"
          >
            <div className="w-60 h-60 sm:w-64 sm:h-64 rounded-full border-8 border-white shadow-xl overflow-hidden bg-white">
              <img 
                src={CoupleMainImg} 
                alt="Traditional Sri Lankan Couple" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-2 right-12 bg-white p-1.5 rounded-full border-2 border-amber-400 shadow-md">
               <Star size={16} className='text-amber-600'/>
            </div>
          </motion.div>
        </motion.div>

        <hr className="border-amber-200/60" />

        {/* 2. Couple Name Box */}
        <motion.div 
          variants={scaleIn}
          className="p-5 rounded-2xl bg-gradient-to-r from-amber-100/50 via-rose-100/50 to-amber-100/50 border border-amber-200 shadow-sm relative"
        >
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-0.5 rounded-full border border-rose-300">
            <Heart size={16} className="text-rose-400" fill='currentColor'/>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 tracking-wide font-serif pt-2">
            Kasun <span className="text-rose-500 font-normal">&</span> Nisha
          </h1>
        </motion.div>

        {/* 3. Heritage / Parent Details & Side Images */}
        <motion.div 
          variants={fadeInUp}
          className="grid grid-cols-3 gap-3 items-center bg-amber-50/80 p-5 rounded-xl border border-amber-200/80 text-amber-800"
        >
          {/* GROOM IMAGE */}
          <motion.div whileHover="hover" variants={imageHover} className="flex flex-col items-center gap-1.5 col-span-1">
             <div className="w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                <img src={GroomImg} alt="Kasun" className="w-full h-full object-contain"/>
             </div>
             <span className="text-xs font-semibold text-amber-950">Kasun</span>
          </motion.div>

          {/* PARENT TEXT */}
          <div className="col-span-1 text-center text-xs space-y-1">
            <p className="italic"><strong className="font-semibold text-amber-950">Son of:</strong><br/>Mr. & Mrs. Perera</p>
            <div className="text-rose-300 py-1">✦ ✦ ✦</div>
            <p className="italic"><strong className="font-semibold text-amber-950">Daughter of:</strong><br/>Mr. & Mrs. Silva</p>
          </div>

          {/* BRIDE IMAGE */}
          <motion.div whileHover="hover" variants={imageHover} className="flex flex-col items-center gap-1.5 col-span-1">
            <div className="w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                <img src={BrideImg} alt="Nisha" className="w-full h-full object-contain"/>
             </div>
             <span className="text-xs font-semibold text-amber-950">Nisha</span>
          </motion.div>
        </motion.div>

        {/* 4. Live Countdown */}
        <motion.div variants={fadeInUp} className="space-y-2">
          <h3 className="text-xs font-semibold tracking-wider text-amber-700 uppercase">Counting Down To The Big Day</h3>
          <div className="p-2 rounded-2xl bg-white/90 border border-amber-200 shadow-sm">
            <Countdown />
          </div>
        </motion.div>

        <hr className="border-amber-200/60" />

        {/* 5. Event Details & Location Button */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-700">
            Invitation Details
          </div>
          
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3 text-sm text-amber-900 leading-relaxed italic">
            <p>
              "Together with their families, Kasun and Nisha cordially invite you to celebrate their wedding ceremony as they begin their journey together."
            </p>
          </div>

          {/* Event Details Component (Which includes Venue & Map Button) */}
          <EventDetails />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default App;