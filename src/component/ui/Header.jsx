"use client";

import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f8fafc] border-b border-slate-200 w-full py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="logo">
          <a href="#" className="text-2xl font-bold text-[#0e7490] no-underline">
            V-T Scribe
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-slate-800 font-medium hover:text-[#0e7490] transition-colors">Home</a>
          <a href="#about" className="text-slate-800 font-medium hover:text-[#0e7490] transition-colors">About</a>
          <a href="#services" className="text-slate-800 font-medium hover:text-[#0e7490] transition-colors">Services</a>
          <a href="#why-us" className="text-slate-800 font-medium hover:text-[#0e7490] transition-colors">Why Us</a>
          <a href="#contact" className="text-slate-800 font-medium hover:text-[#0e7490] transition-colors">Contact</a>
        </nav>

        {/* Desktop Call to Action Button */}
        <div className="hidden md:block">
          <a 
            href="#trial" 
            className="bg-[#06b6d4] hover:bg-[#0891b2] text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-md transition-all active:translate-y-px"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-200 flex flex-col gap-4">
          <a href="#home" className="text-slate-800 font-medium hover:text-[#0e7490]">Home</a>
          <a href="#about" className="text-slate-800 font-medium hover:text-[#0e7490]">About</a>
          <a href="#services" className="text-slate-800 font-medium hover:text-[#0e7490]">Services</a>
          <a href="#why-us" className="text-slate-800 font-medium hover:text-[#0e7490]">Why Us</a>
          <a href="#contact" className="text-slate-800 font-medium hover:text-[#0e7490]">Contact</a>
          <a 
            href="#trial" 
            className="bg-[#06b6d4] hover:bg-[#0891b2] text-white px-5 py-2.5 rounded-lg font-semibold text-center text-sm shadow-md mt-2"
          >
            Start Free Trial
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;