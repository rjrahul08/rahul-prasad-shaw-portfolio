"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SKILLS, PROFILE } from '@/data';

export const AISystemViz = () => {
  const pathRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    const path = pathRef.current;
    if(!path) return;
    const length = path.getTotalLength();
    
    gsap.set(path, {
      strokeDasharray: "10 50",
      strokeDashoffset: length
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 3,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".node-ring", {
      scale: 1.5,
      opacity: 0,
      duration: 2,
      repeat: -1,
      stagger: 0.5,
      ease: "power1.out"
    });
  }, []);

  return (
    <section id="skills" className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-video bg-white/5 rounded-xl border border-white/10 p-8 overflow-hidden">
          <div className="absolute inset-0 bg-[length:50px_50px] bg-grid-pattern opacity-30" />
          
          <svg viewBox="0 0 600 300" className="w-full h-full">
            <path d="M 50 150 L 200 150 C 250 150 250 100 300 100 L 450 100 C 500 100 500 200 550 200" 
                  fill="none" stroke="#333" strokeWidth="2" />
            
            <path ref={pathRef} 
                  d="M 50 150 L 200 150 C 250 150 250 100 300 100 L 450 100 C 500 100 500 200 550 200" 
                  fill="none" stroke="#3b82f6" strokeWidth="3" filter="drop-shadow(0 0 4px #3b82f6)" />
            
            <g transform="translate(50,150)">
                <circle r="15" fill="#000" stroke="#fff" strokeWidth="2" />
                <circle className="node-ring" r="15" fill="none" stroke="#3b82f6" strokeWidth="1" />
                <text y="35" fill="#666" fontSize="10" textAnchor="middle" fontFamily="monospace">INPUT</text>
            </g>

            <g transform="translate(300,100)">
                <rect x="-25" y="-25" width="50" height="50" rx="4" fill="#000" stroke="#fff" strokeWidth="2" />
                <text y="45" fill="#666" fontSize="10" textAnchor="middle" fontFamily="monospace">LLM</text>
            </g>

            <g transform="translate(550,200)">
                <circle r="15" fill="#000" stroke="#22c55e" strokeWidth="2" />
                <circle className="node-ring" r="15" fill="none" stroke="#22c55e" strokeWidth="1" />
                <text y="35" fill="#666" fontSize="10" textAnchor="middle" fontFamily="monospace">OUTPUT</text>
            </g>
          </svg>
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            Technical <span className="text-blue-500">Arsenal</span>
          </h2>
          <div className="space-y-8">
            {Object.entries(SKILLS).map(([cat, skills]) => (
              <div key={cat}>
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3 border-b border-white/10 pb-1">
                  {cat.replace("_", " & ")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map(s => (
                    <span key={s} className="px-3 py-1.5 text-sm text-gray-300 bg-white/5 rounded border border-white/5 hover:border-white/20 hover:text-white hover:bg-white/10 transition-all cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#080808] text-center border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-display font-bold text-white mb-6">Ready to Scale?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Open to discussing backend challenges, system architecture, and full-time engineering roles.
        </p>
        <a href={`mailto:${PROFILE.email}`} className="inline-block px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
          Start Conversation
        </a>
        <div className="mt-8 flex justify-center gap-8 font-mono text-sm text-gray-500">
          <a href={PROFILE.social.linkedin} target="_blank" className="hover:text-blue-400 transition-colors" rel="noreferrer">LinkedIn</a>
          <a href={PROFILE.social.github} target="_blank" className="hover:text-blue-400 transition-colors" rel="noreferrer">GitHub</a>
        </div>
        <p className="mt-8 text-xs text-gray-600 font-mono">
          Designed & Built by {PROFILE.name}. System Online.
        </p>
      </div>
    </section>
  );
};
