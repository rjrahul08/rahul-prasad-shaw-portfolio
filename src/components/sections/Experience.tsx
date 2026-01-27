"use client";

import React from 'react';
import { useScrollReveal } from '@/hooks';
import { EXPERIENCE, EDUCATION } from '@/data';
import { BarChart2 } from 'lucide-react';

const ExperienceItem = ({ job }: { job: typeof EXPERIENCE[0] }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="relative pl-8 md:pl-0 border-l border-white/10 md:border-none pb-12 md:pb-16 last:pb-0">
      <div className="md:grid md:grid-cols-12 gap-8 items-start group">
        <div className="mb-2 md:hidden">
             <span className="font-mono text-xs text-blue-500">{job.period}</span>
        </div>
        
        <div className="hidden md:block md:col-span-3 text-right sticky top-32">
          <div className="font-display font-bold text-4xl text-white/10 group-hover:text-white/20 transition-colors">
            {job.period.split(" - ")[0]}
          </div>
        </div>

        <div className="md:col-span-9 relative">
             <div className="absolute -left-[37px] top-1 w-3 h-3 bg-blue-600 rounded-full border-4 border-black md:hidden" />
             
             <div className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-xl text-white font-bold">{job.role}</h3>
                    <span className="text-sm text-gray-500 font-mono hidden md:inline">{job.company}</span>
                </div>
                <div className="md:hidden text-sm text-gray-500 mb-4">{job.company}</div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {job.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                    {job.metrics.map(m => (
                        <div key={m} className="flex items-center space-x-2 text-xs font-mono text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded">
                            <BarChart2 size={12} />
                            <span>{m}</span>
                        </div>
                    ))}
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 border-b border-white/10 pb-8">
          <h2 className="text-sm font-mono text-blue-500 tracking-widest uppercase">
            / Career_Timeline
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map(job => <ExperienceItem key={job.id} job={job} />)}
          
          <div className="mt-12 pt-12 border-t border-white/5 pl-8 md:pl-0">
            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Education</h3>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start p-6 bg-[#111] rounded-xl border border-white/5">
                <div>
                    <div className="text-lg text-white font-bold">{EDUCATION.degree}</div>
                    <div className="text-gray-400 text-sm mt-1">{EDUCATION.institution}</div>
                    <div className="text-gray-500 text-xs mt-2">{EDUCATION.gpa}</div>
                </div>
                <div className="text-blue-500 font-mono text-sm mt-4 md:mt-0">{EDUCATION.year}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
