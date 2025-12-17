import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from './constants';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // Typewriter State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);
  
  // ONLY Aayush Tejani as requested
  const toRotate = ["AAYUSH TEJANI"];
  const period = 2000; // Time to wait before deleting

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.8); // Accelerate deletion
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // Pause at end
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150); // Reset speed for next word
    } else if (!isDeleting && updatedText !== fullText) {
        // Add slight randomness to typing speed for realism
        setDelta(150 - Math.random() * 50); 
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-background transition-colors duration-500">
      
      {/* Clean Background - Effects Removed */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        
        <p className="text-secondary font-medium tracking-[0.2em] uppercase mb-6 text-sm">
          Welcome to my digital space
        </p>
        
        {/* Typewriter Heading */}
        <h1 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tighter min-h-[1.2em]">
          {text}
          <span className="animate-pulse ml-1 text-secondary font-light">|</span>
        </h1>
        
        <h2 className="text-lg md:text-2xl text-secondary mb-10 max-w-3xl font-light">
          {PERSONAL_INFO.tagline}
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-4 bg-primary text-background font-bold rounded-none hover:bg-opacity-90 transition-all border border-primary"
          >
            VIEW WORK
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-transparent border border-primary/30 text-primary font-medium rounded-none hover:bg-primary hover:text-background transition-all"
          >
            LET'S TALK
          </button>
        </div>

        <div className="mt-16 flex space-x-8">
           {SOCIAL_LINKS.map((item, idx) => (
             <a 
               key={idx}
               href={item.url} 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label={`Visit my ${item.platform} profile`}
               className="text-secondary hover:text-primary transition-all duration-300 hover:scale-110 transform"
             >
               <item.icon size={28} />
             </a>
           ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => onNavigate('about')}
          className="text-secondary hover:text-primary transition-colors block animate-bounce focus:outline-none"
        >
          <ArrowDown size={32} strokeWidth={1} />
        </button>
      </div>
    </section>
  );
};

export default Hero;