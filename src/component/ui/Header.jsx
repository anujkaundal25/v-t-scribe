"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaCheckCircle, 
  FaTimes, 
  FaBars,
  FaArrowRight
} from 'react-icons/fa';

const headerData = {
  brand: {
    name: "V-T Scribe",
    url: "#"
  },
  topBar: {
    phone: "+1 (800) 123-4567",
    email: "info@vtscribe.com",
    hours: "24/7 Coverage — USA & Canada Timezones"
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact", href: "/contact" }
  ],
  callToAction: {
    label: "Start Free Trial",
    href: "#trial"
  }
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Track scroll position to hide top bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-lg transition-all duration-300">
      
      {/* 1. Desktop Top Info Bar - Hides smoothly on scroll */}
      <div 
        className={`hidden lg:block bg-[#002742] text-sky-100 border-b border-[#013563] text-xs transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0 border-none' : 'max-h-12 py-2.5 opacity-100'
        } px-6 lg:px-12`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${headerData.topBar.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <FaPhoneAlt className="text-sky-400" />
              <span className="font-medium tracking-wide">{headerData.topBar.phone}</span>
            </a>
            <a href={`mailto:${headerData.topBar.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <FaEnvelope className="text-sky-400" />
              <span className="font-medium tracking-wide">{headerData.topBar.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-sky-200">
            <FaClock className="text-emerald-400" />
            <span className="font-medium tracking-wide">{headerData.topBar.hours}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-[#014f92]/95 backdrop-blur-md border-b border-[#013d72] py-3.5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Container */}
          <a href={headerData.brand.url} className="flex items-center shrink-0">
            <Image 
              src="/logo.webp" 
              alt={headerData.brand.name} 
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation Links - Active State Border */}
          <nav className="hidden md:flex items-center gap-8 shrink-0">
            {headerData.navLinks.map((link, index) => {
              const isActive = activeLink === link.href;
              return (
                <a 
                  key={index} 
                  href={link.href} 
                  onClick={() => setActiveLink(link.href)}
                  className={`font-heading font-semibold transition-all text-sm lg:text-base tracking-wider uppercase relative py-1 ${
                    isActive 
                      ? 'text-sky-200 border-b-2 border-sky-300' 
                      : 'text-white hover:text-sky-200'
                  }`}
                >
                  {link.label}
                  {/* Hover indicator for non-active links */}
                  {!isActive && (
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-sky-300 transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call to Action Button */}
          <div className="hidden md:block shrink-0">
            <a 
              href={headerData.callToAction.href} 
              className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md transition-all active:translate-y-px inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>{headerData.callToAction.label}</span>
              <FaArrowRight className="text-xs" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-[#013d72] transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. Slide-Over Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-slate-900/60 backdrop-blur-sm md:hidden flex justify-end">
          <div className="w-full max-w-sm bg-[#002742] h-full shadow-2xl p-6 flex flex-col justify-between border-l border-[#012d54] text-white overflow-y-auto">
            
            <div className="space-y-6">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-sky-300 uppercase tracking-widest mb-2 font-heading">
                  Navigation
                </span>
                {headerData.navLinks.map((link, index) => {
                  const isActive = activeLink === link.href;
                  return (
                    <a 
                      key={index} 
                      href={link.href} 
                      onClick={() => {
                        setActiveLink(link.href);
                        setIsOpen(false);
                      }}
                      className={`font-heading text-lg font-semibold py-2.5 border-b border-[#013868] flex items-center justify-between tracking-wide transition-colors ${
                        isActive 
                          ? 'text-sky-300 border-l-4 border-l-sky-400 pl-2' 
                          : 'text-white hover:text-sky-200'
                      }`}
                    >
                      <span>{link.label}</span>
                      <FaArrowRight className={`text-xs ${isActive ? 'text-sky-300' : 'text-slate-400'}`} />
                    </a>
                  );
                })}
              </div>

              {/* Mobile Contact Quick Card */}
              <div className="bg-[#013563] p-4 rounded-xl space-y-3 text-xs border border-[#014885]">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <FaCheckCircle />
                  <span>24/7 Operations Ready</span>
                </div>
                <a href={`tel:${headerData.topBar.phone}`} className="flex items-center gap-3 text-sky-100 hover:text-white">
                  <FaPhoneAlt className="text-sky-400" />
                  <span>{headerData.topBar.phone}</span>
                </a>
                <a href={`mailto:${headerData.topBar.email}`} className="flex items-center gap-3 text-sky-100 hover:text-white">
                  <FaEnvelope className="text-sky-400" />
                  <span>{headerData.topBar.email}</span>
                </a>
              </div>
            </div>

            {/* Mobile Action Callout */}
            <div className="pt-6 border-t border-[#013868] space-y-3">
              <a 
                href={headerData.callToAction.href} 
                onClick={() => setIsOpen(false)}
                className="w-full bg-sky-500 hover:bg-sky-400 text-white py-3 rounded-xl font-bold text-center text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <span>{headerData.callToAction.label}</span>
                <FaArrowRight />
              </a>
              <p className="text-[11px] text-center text-sky-200">
                100% Encrypted & HIPAA Compliant Portal
              </p>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}