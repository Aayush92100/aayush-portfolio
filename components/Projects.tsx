import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from './constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
           <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-2 uppercase tracking-tight">Selected Work</h2>
              <p className="text-secondary">Engineering solutions for the modern web.</p>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-primary/20 mb-4"></div>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <SectionWrapper key={project.id} delay={index * 150}>
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-surface border border-primary/10 hover:border-primary transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:shadow-primary/5"
              >
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden border-b border-primary/10">
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute top-0 right-0 p-4"
                  >
                    <ArrowUpRight className="text-primary" size={24} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-primary mb-3 uppercase tracking-wide">{project.title}</h3>
                  <p className="text-secondary text-sm mb-6 line-clamp-3 leading-relaxed flex-grow font-light">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 border border-primary/20 text-[10px] uppercase tracking-wider text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6 mt-auto">
                    <a 
                      href={project.link} 
                      className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wider"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors uppercase tracking-wider"
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;