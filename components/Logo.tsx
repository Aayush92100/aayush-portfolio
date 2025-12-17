import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* SVG Container */}
      <div className="relative w-11 h-11 flex items-center justify-center">
         {/* The Glow Effect - Monochrome */}
         <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
         
         <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 transform group-hover:scale-105 transition-transform duration-300">
            <defs>
              {/* Monochrome Gradient using CSS variables for theme support */}
              <linearGradient id="logo-gradient-bw" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
                <stop offset="0%" stopColor="rgb(var(--primary))" />
                <stop offset="100%" stopColor="rgb(var(--secondary))" />
              </linearGradient>
            </defs>
            
            {/* The 'a' Bowl - Circle centered at (30, 57.5) */}
            <path 
              d="M 45 57.5 A 15 15 0 1 1 15 57.5 A 15 15 0 1 1 45 57.5" 
              stroke="url(#logo-gradient-bw)" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            
            {/* The 'a' Stem connecting to 't' Crossbar */}
            {/* Up from bottom of 'a' (45,80) to intersection (45,35) then right to T end (85,35) */}
            <path 
              d="M 45 80 L 45 35 L 85 35" 
              stroke="url(#logo-gradient-bw)" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            
            {/* The 't' Vertical Stem */}
            <path 
              d="M 65 20 L 65 80" 
              stroke="url(#logo-gradient-bw)" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
         </svg>
      </div>
    </div>
  );
};

export default Logo;