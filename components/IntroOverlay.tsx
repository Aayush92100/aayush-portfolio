import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, animate, Variants } from 'framer-motion';

interface IntroOverlayProps {
  onComplete: () => void;
  darkMode?: boolean;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete, darkMode = true }) => {
  const count = useMotionValue(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // We keep the animation timer to control when the loader finishes
    const controls = animate(count, 100, {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1], 
      onComplete: () => {
        setIsComplete(true);
        setTimeout(onComplete, 800); // Slight delay before unmounting
      }
    });

    return controls.stop;
  }, [count, onComplete]);

  // Logo Animation Variants
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2, 
        ease: "easeInOut" 
      }
    }
  };

  // Determine colors based on theme
  const bgColor = darkMode ? "bg-[#050505]" : "bg-[#ffffff]";
  const blobColor = darkMode ? "bg-white/5" : "bg-black/5";
  const gradientStart = darkMode ? "#ffffff" : "#000000";
  const gradientEnd = darkMode ? "#a1a1aa" : "#4b5563";

  return (
    <motion.div
      className={`fixed inset-0 z-[10000] ${bgColor} flex items-center justify-center overflow-hidden transition-colors duration-500`}
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -20, 
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-[-20%] left-[-10%] w-[50%] h-[50%] ${blobColor} rounded-full blur-[120px] transition-colors duration-500`} />
        <div className={`absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] ${blobColor} rounded-full blur-[120px] transition-colors duration-500`} />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-4">
        
        {/* Animated Logo Mark - Resized to w-11 h-11 to match Navbar */}
        <div className="w-11 h-11 flex items-center justify-center">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <defs>
              <linearGradient id="intro-gradient-bw" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
                <stop offset="0%" stopColor={gradientStart} />
                <stop offset="100%" stopColor={gradientEnd} />
              </linearGradient>
            </defs>
            
            {/* The 'a' Bowl */}
            <motion.path 
              key="path-at-bowl"
              d="M 45 57.5 A 15 15 0 1 1 15 57.5 A 15 15 0 1 1 45 57.5" 
              stroke="url(#intro-gradient-bw)" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            
            {/* The 'a' Stem & 't' Crossbar connection */}
            <motion.path 
              key="path-at-connection"
              d="M 45 80 L 45 35 L 85 35" 
              stroke="url(#intro-gradient-bw)" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            
            {/* The 't' Vertical Stem */}
            <motion.path 
              key="path-at-t-stem"
              d="M 65 20 L 65 80" 
              stroke="url(#intro-gradient-bw)" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </div>
        
      </div>
    </motion.div>
  );
};

export default IntroOverlay;