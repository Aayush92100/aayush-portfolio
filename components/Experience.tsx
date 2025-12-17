import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE } from './constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-surface transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tight">Timeline</h2>
            <div className="w-full md:w-1/3 h-[1px] bg-primary/20"></div>
          </div>
        </SectionWrapper>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-primary/10"></div>

          <div className="space-y-16">
            {EXPERIENCE.map((exp, index) => (
              <SectionWrapper key={exp.id} delay={index * 200}>
                <div className={`flex flex-col md:flex-row gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  
                  {/* Content Box */}
                  <div className="flex-1 pl-12 md:pl-0">
                    <div className={`relative ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}>
                      <h3 className="text-2xl font-bold text-primary uppercase tracking-wide">{exp.role}</h3>
                      <h4 className="text-primary font-medium mb-2 text-lg">{exp.company}</h4>
                      <p className="text-xs text-secondary mb-4 font-mono tracking-widest uppercase border border-primary/20 inline-block px-2 py-1">{exp.period}</p>
                      <p className="text-secondary text-base font-light leading-relaxed">{exp.description}</p>
                    </div>
                  </div>

                  {/* Center Marker */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center pt-2 md:pt-0">
                    <div className="w-10 h-10 bg-surface border border-primary rounded-full flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;