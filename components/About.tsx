import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { PERSONAL_INFO, CORE_COMPETENCIES } from './constants';
import { ImageOff } from 'lucide-react';

const StatCounter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "circOut" });
    }
  }, [count, isInView, value]);

  return (
    <motion.span ref={ref} className="block text-4xl font-black text-primary">
      {rounded}
    </motion.span>
  );
};

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [PERSONAL_INFO.profileImage]);

  return (
    <section id="about" className="py-20 md:py-32 bg-background transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionWrapper>
          <div className="mb-16 md:mb-24 flex flex-col items-start">
             <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 uppercase tracking-tighter">
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-primary"></div>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Image Column - Spans 5 columns on large screens */}
          <div className="lg:col-span-5 relative">
            <SectionWrapper delay={200}>
              <div className="relative group w-full max-w-md mx-auto lg:mx-0 lg:sticky lg:top-32">
                {/* Abstract decorative corners */}
                <div className="absolute top-[-15px] left-[-15px] w-16 h-16 border-t-[3px] border-l-[3px] border-primary/20 z-0 transition-all duration-500 group-hover:top-[-10px] group-hover:left-[-10px]"></div>
                <div className="absolute bottom-[-15px] right-[-15px] w-16 h-16 border-b-[3px] border-r-[3px] border-primary/20 z-0 transition-all duration-500 group-hover:bottom-[-10px] group-hover:right-[-10px]"></div>
                
                {/* Main Image Container */}
                <div className="relative z-10 bg-surface shadow-2xl shadow-primary/5">
                   <div className="aspect-[3/4] w-full relative bg-secondary/5 flex items-center justify-center overflow-hidden">
                     {imgError ? (
                       <div className="flex flex-col items-center justify-center text-secondary p-8 text-center w-full h-full border border-primary/10">
                         <ImageOff size={48} className="mb-4 opacity-30" />
                         <p className="text-xs font-mono uppercase tracking-widest opacity-60">Image Unavailable</p>
                       </div>
                     ) : (
                       <>
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
                        <img 
                          key={PERSONAL_INFO.profileImage} 
                          src={PERSONAL_INFO.profileImage}
                          alt="Aayush Tejani" 
                          onError={() => setImgError(true)}
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                        />
                       </>
                     )}
                   </div>
                </div>
                
                {/* Decorative text */}
                <div className="absolute -right-12 top-10 hidden xl:block transform rotate-90 origin-top-left">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-secondary/40 uppercase">
                    Profile // {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </SectionWrapper>
          </div>

          {/* Content Column - Spans 7 columns */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionWrapper delay={400}>
              <div className="prose prose-lg prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary/50 inline-block"></span>
                  The Developer
                </h3>
                
                <p className="text-secondary text-lg md:text-xl leading-relaxed md:leading-loose font-light mb-10 text-justify md:text-left">
                  {PERSONAL_INFO.about}
                </p>
              </div>

              {/* Competencies Grid */}
              <div className="mt-8">
                <h4 className="text-sm font-mono font-bold text-primary/70 uppercase tracking-widest mb-6 border-b border-primary/10 pb-2 inline-block">
                  Core Competencies
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CORE_COMPETENCIES.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`group p-5 border border-primary/10 hover:border-primary/40 bg-surface/30 hover:bg-surface transition-all duration-300 flex items-start gap-4 hover:-translate-y-1 ${
                        // If it's the last item and total items are odd, make it span full width on tablet+
                        (idx === CORE_COMPETENCIES.length - 1 && CORE_COMPETENCIES.length % 2 !== 0) ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <div className="mt-1 p-2 bg-background border border-primary/5 rounded-sm text-primary group-hover:text-background group-hover:bg-primary transition-colors duration-300">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h5 className="text-primary font-bold text-base uppercase mb-1 tracking-wide">{item.title}</h5>
                        <p className="text-secondary text-sm font-light leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats / Filler for balance */}
              <div className="mt-12 pt-8 border-t border-primary/10 flex gap-12">
                 <div>
                    <StatCounter value={5} suffix="+" />
                    <span className="text-xs text-secondary font-mono uppercase tracking-wider">Projects Built</span>
                 </div>
                 <div>
                    <StatCounter value={3} suffix="+" />
                    <span className="text-xs text-secondary font-mono uppercase tracking-wider">Core Technologies</span>
                 </div>
                 <div>
                    <StatCounter value={100} suffix="%" />
                    <span className="text-xs text-secondary font-mono uppercase tracking-wider">Committed</span>
                 </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;