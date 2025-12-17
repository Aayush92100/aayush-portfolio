import React, { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { PERSONAL_INFO, CORE_COMPETENCIES } from '../constants';
import { User, ImageOff } from 'lucide-react';

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  // Reset error state if the profile image path changes (useful during development/debugging)
  useEffect(() => {
    setImgError(false);
  }, [PERSONAL_INFO.profileImage]);

  return (
    <section id="about" className="py-24 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tight">About Me</h2>
            <div className="w-full h-[1px] bg-primary/20"></div>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <SectionWrapper className="order-2 md:order-1" delay={200}>
            <div className="relative group max-w-md mx-auto md:mx-0">
              {/* Decorative backdrop */}
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-primary/10 z-0 group-hover:top-2 group-hover:-left-2 transition-all duration-500"></div>
              
              <div className="relative border border-primary/20 p-2 bg-surface z-10">
                 <div className="aspect-[3/4] overflow-hidden w-full relative bg-secondary/5 flex items-center justify-center">
                   {/* 
                     Check if image error occurred. 
                     If so, show a fallback placeholder. 
                     If not, show the image with onError handler.
                   */}
                   {imgError ? (
                     <div className="flex flex-col items-center justify-center text-secondary p-8 text-center w-full h-full border-2 border-dashed border-secondary/20">
                       <ImageOff size={48} className="mb-4 opacity-50" />
                       <p className="text-sm font-bold">Image Not Found</p>
                       <p className="text-xs opacity-70 mt-2 max-w-[200px] break-all">
                         Looking for: <span className="font-mono bg-primary/10 px-1 rounded">{PERSONAL_INFO.profileImage}</span>
                       </p>
                     </div>
                   ) : (
                     <img 
                      src={PERSONAL_INFO.profileImage}
                      alt="Aayush Tejani" 
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                   )}
                 </div>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper className="order-1 md:order-2" delay={400}>
            <h3 className="text-2xl font-bold text-primary mb-6 uppercase">The Developer</h3>
            <p className="text-secondary leading-relaxed mb-10 text-lg font-light">
              {PERSONAL_INFO.about}
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {CORE_COMPETENCIES.map((item, idx) => (
                <div key={idx} className="bg-surface p-6 border border-primary/10 hover:border-primary/50 transition-colors group">
                  <div className="flex items-center mb-3">
                    <item.icon className="text-primary mr-4" size={24} />
                    <h4 className="text-primary font-bold text-lg uppercase">{item.title}</h4>
                  </div>
                  <p className="text-secondary text-sm font-light group-hover:text-primary transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;