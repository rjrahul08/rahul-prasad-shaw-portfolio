import { useEffect, useRef, useState, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin globally (safe in Next.js client components)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: `top ${100 - (threshold * 100)}%`,
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, [threshold]);
  
  return ref;
};

export const useTilt = (active = true) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !ref.current) return;
    
    const el = ref.current;
    
    const ctx = gsap.context(() => {
      const handleMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(el, {
          rotateX,
          rotateY,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out",
          transformPerspective: 1000
        });
      };

      const handleLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)"
        });
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => ctx.revert();
  }, [active]);

  return ref;
};

export const useMagnetic = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const handleMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
      };

      const handleLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => ctx.revert();
  }, []);

  return ref;
};
