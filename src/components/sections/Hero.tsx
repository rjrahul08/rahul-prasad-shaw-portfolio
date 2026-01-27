"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PROFILE } from '@/data';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(".hero-text-line", 
        { y: 120, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
      )
      .fromTo(".hero-sub",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8 }, "-=0.5"
      );

      gsap.to(".hero-grid", {
        backgroundPosition: "50px 50px",
        duration: 8,
        repeat: -1,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-obsidian">
      {/* Dynamic Grid Background */}
      <div className="hero-grid absolute inset-0 opacity-20 bg-grid-pattern bg-[length:50px_50px] pointer-events-none" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 max-w-5xl">
        <div className="hero-sub mb-8 flex items-center space-x-3 text-blue-400 font-mono text-xs tracking-widest">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
          <span>SYSTEM ONLINE // {PROFILE.location.toUpperCase()}</span>
        </div>

        <div className="overflow-hidden mb-2">
          <h1 className="hero-text-line text-6xl md:text-9xl font-display font-bold text-white tracking-tighter leading-none">
            {PROFILE.name.split(" ")[0]}
          </h1>
        </div>
        <div className="overflow-hidden mb-6">
          <h1 className="hero-text-line text-6xl md:text-9xl font-display font-bold text-charcoal tracking-tighter leading-none text-gray-500">
            {PROFILE.name.split(" ").slice(1).join(" ")}
          </h1>
        </div>
        
        <div className="hero-text-line max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed font-light">
          {PROFILE.tagline}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 text-xs font-mono text-gray-600">
        <span>SCROLL TO INITIALIZE</span>
        <div className="w-12 h-px bg-gray-800" />
      </div>
    </section>
  );
};
