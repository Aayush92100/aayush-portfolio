import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroOverlay from './components/IntroOverlay';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  // Initialize theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Navigation Handler
  const handleNavigate = (section: string) => {
    if (section === activeSection) return;
    setLoading(true); // Trigger loader
    // The actual section switch happens, but is hidden by the loader initially
    // We delay the state update slightly or just do it immediately. 
    // Since the loader has an exit animation, we want the new content to be ready when loader fades.
    setActiveSection(section);
  };

  // Render the active component
  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Hero onNavigate={handleNavigate} />;
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'experience': return <Experience />;
      case 'contact': return <Contact />;
      default: return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <IntroOverlay 
            key="loader" 
            onComplete={() => setLoading(false)} 
            darkMode={darkMode}
          />
        )}
      </AnimatePresence>
      
      <div className={`bg-background min-h-screen text-primary selection:bg-primary selection:text-background transition-colors duration-500 overflow-hidden ${loading ? 'h-screen' : ''}`}>
        
        {/* Noise/Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
        </div>

        <div className="relative z-10 flex flex-col h-screen">
          <Navbar 
            darkMode={darkMode} 
            toggleTheme={toggleTheme} 
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
          
          {/* Main Content Area - Scrollable internally if needed, but fixed to viewport */}
          <main className="flex-grow overflow-y-auto overflow-x-hidden relative scroll-smooth pt-20">
             {/* Key ensures component remounts and triggers animations on section change */}
             {!loading && (
               <div className="min-h-full w-full animate-in fade-in duration-700">
                 {renderSection()}
               </div>
             )}
             {/* Footer is part of the scrollable area if content is long */}
             {!loading && activeSection !== 'home' && <Footer />}
          </main>
        </div>
      </div>
    </>
  );
};

export default App;