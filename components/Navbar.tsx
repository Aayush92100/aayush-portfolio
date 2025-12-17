import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 bg-background/80 backdrop-blur-md shadow-sm border-b border-primary/5 py-4 top-0"
    >
      {/* Changed container to full width with responsive padding to push items to corners */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo - Aligned to Left Corner */}
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => handleNavClick('home')} className="block focus:outline-none">
              <Logo />
            </button>
          </div>
          
          {/* Desktop Menu - Aligned to Right Corner */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors relative group uppercase tracking-wider ${
                  activeSection === link.id ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-violet transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <div className="border-l border-primary/20 pl-8">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full border border-secondary/20 text-primary hover:bg-surface transition-colors hover:text-neon-cyan hover:border-neon-cyan/50"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button - Aligned to Right Corner on mobile */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-secondary/20 text-primary hover:bg-surface transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-primary/10 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md transition-colors uppercase tracking-wider ${
                     activeSection === link.id 
                     ? 'text-primary bg-background/50' 
                     : 'text-secondary hover:text-primary hover:bg-background/50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;