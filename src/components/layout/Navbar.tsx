"use client";

import React from 'react';
import { MagneticButton } from '../ui';
import { PROFILE } from '@/data';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-exclusion text-white pointer-events-none">
      <div className="text-xl font-bold tracking-tighter font-display pointer-events-auto">
        RP<span className="text-blue-500">.</span>DEV
      </div>
      <div className="hidden md:flex items-center gap-8 pointer-events-auto">
        <div className="flex gap-6 text-sm font-medium opacity-80">
          {["Experience", "Projects", "Skills"].map(item => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
              {item}
            </Link>
          ))}
        </div>
        <MagneticButton className="px-5 py-2 border border-white/20 rounded-full text-xs font-bold tracking-wider hover:bg-white hover:text-black transition-colors">
          <Link href="#contact">TALK</Link>
        </MagneticButton>
      </div>
    </nav>
  );
};
