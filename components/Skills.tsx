import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from './constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-surface relative overflow-hidden transition-colors duration-500">
      {/* Subtle background text decoration */}
      <div className="absolute top-0 right-0 text-[20rem] font-bold text-primary/5 leading-none pointer-events-none select-none -translate-y-1/2 translate-x-1/4">
        SKILLS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionWrapper>
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tight">Expertise</h2>
            <div className="w-full h-[1px] bg-primary/20"></div>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl">
          {SKILLS.map((skill, index) => (
            <SectionWrapper key={skill.name} delay={index * 100} className="group">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <div className="flex justify-between mb-3 items-end">
                  <span className="text-primary text-xl font-bold uppercase tracking-wider">{skill.name}</span>
                  <span className="text-secondary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-primary/10 h-1 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                    className="bg-primary h-1 group-hover:bg-secondary transition-colors duration-300"
                  ></motion.div>
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;