"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useMagnetic } from '@/hooks';

export const CustomCursor = () => {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(cursorDot.current, { x: clientX, y: clientY, duration: 0.1 });
      gsap.to(cursorOutline.current, { x: clientX, y: clientY, duration: 0.25, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      <div ref={cursorDot} className="absolute w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
      <div ref={cursorOutline} className="absolute w-10 h-10 border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200" />
    </div>
  );
};

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(total / windowHeight);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 h-0.5 bg-blue-500 z-[100] transition-all duration-100 ease-out" style={{ width: `${progress * 100}%` }}></div>
  );
};

export const MagneticButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useMagnetic();
  return <button ref={ref} className={className}>{children}</button>;
};
