import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_LINKS, PERSONAL_INFO } from './constants';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const handleMailClick = () => {
    window.location.href = `mailto:${PERSONAL_INFO.email}`;
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-primary/10 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionWrapper>
           <div className="mb-12">
            <h2 className="text-4xl md:text-7xl font-black text-primary mb-6 uppercase tracking-tight">Let's Connect</h2>
            <p className="text-secondary text-xl font-light max-w-2xl mx-auto">
              I'm currently exploring new projects in AI Automation and Full Stack Development. 
              Whether you have a question, a project idea, or just want to discuss the latest in tech, I'm all ears.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={200}>
          <div className="flex flex-col items-center justify-center space-y-12">
            
            {/* Main Action Button */}
            <button 
              onClick={handleMailClick}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-background bg-primary overflow-hidden transition-all duration-300 hover:bg-opacity-90 hover:scale-105 shadow-lg hover:shadow-primary/25 cursor-pointer"
            >
              <span className="relative flex items-center gap-3">
                SEND MESSAGE <Mail size={20} />
              </span>
            </button>

            {/* Email Text */}
            <div className="flex flex-col items-center">
               <span className="text-secondary text-sm uppercase tracking-widest mb-2">Or email directly</span>
               <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl md:text-2xl text-primary font-bold hover:text-secondary transition-colors border-b-2 border-primary/20 hover:border-primary pb-1">
                 {PERSONAL_INFO.email}
               </a>
            </div>

            {/* Social Grid - Updated to Flex for better centering of 3 items */}
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-3xl mt-8">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.platform} profile`}
                  className="flex flex-col items-center justify-center p-6 border border-primary/10 hover:border-primary hover:bg-primary/5 transition-all duration-300 group min-w-[140px]"
                >
                  <link.icon className="text-primary group-hover:scale-110 transition-transform duration-300 mb-3" size={28} />
                  <span className="text-secondary font-medium group-hover:text-primary transition-colors uppercase tracking-wider text-xs">
                    {link.platform}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default Contact;