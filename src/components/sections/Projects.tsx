"use client";

import React from 'react';
import { useScrollReveal, useTilt } from '@/hooks';
import { PROJECTS, Project } from '@/data';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useTilt();
  
  return (
    <div ref={cardRef} className="group relative h-full bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm overflow-hidden flex flex-col tilt-card">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex justify-between items-start mb-8">
        <span className="font-mono text-xs text-blue-400 border border-blue-500/20 px-2 py-1 rounded">
          {project.category}
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
          <ArrowUpRight className="text-white" size={24} />
        </div>
      </div>

      <h3 className="relative z-10 text-2xl md:text-3xl font-display font-bold text-white mb-4">
        {project.title}
      </h3>
      
      <p className="relative z-10 text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
        {project.shortSummary}
      </p>

      <div className="relative z-10 pt-6 border-t border-white/5 space-y-4">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-gray-500 block mb-2">Architecture</span>
          <p className="text-xs text-gray-300 line-clamp-2">{project.solution}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span key={tech} className="text-[10px] px-2 py-1 bg-black/50 text-gray-400 rounded border border-white/5">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const containerRef = useScrollReveal();

  return (
    <section id="projects" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div ref={containerRef} className="mb-20">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-6">
            System <span className="text-blue-500">Registry</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            A collection of deployed systems focusing on automation, scalability, and AI integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
