"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaTimes, 
  FaBars 
} from 'react-icons/fa';

const headerData = {
  brand: { name: "V-T Scribe", url: "/" },
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
  ]
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-lg transition-all duration-300">
      
      {/* Top Info Bar */}
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

      {/* Main Navbar */}
      <div className="bg-[#014f92] backdrop-blur-md border-b border-[#013d72] py-3.5 px-6 md:px-12 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image 
              src="/logo.webp" 
              alt={headerData.brand.name} 
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 shrink-0">
            {headerData.navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={index} 
                  href={link.href} 
                  className={`font-heading font-semibold transition-all text-sm lg:text-base tracking-wider uppercase relative py-1 ${
                    isActive ? 'text-sky-200 border-b-2 border-sky-300' : 'text-white hover:text-sky-200'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-[#013d72] transition-colors z-50"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay & Content */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 top-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div 
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Sliding Panel */}
        <div 
          className={`absolute top-0 right-0 w-full max-w-sm bg-[#002742] h-screen shadow-2xl p-6 pt-24 flex flex-col justify-between text-white transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-4">
            {headerData.navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={index} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 border-b border-[#013868] text-lg font-semibold transition-colors duration-200 ${
                    isActive ? 'text-sky-300 border-sky-400 pl-2' : 'text-white hover:text-sky-200 hover:pl-2'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Contact Quick Links */}
          <div className="pt-6 pb-8 border-t border-[#013868] space-y-4 text-sm text-sky-200">
            <a href={`tel:${headerData.topBar.phone}`} className="flex items-center gap-3 hover:text-white transition-colors">
              <FaPhoneAlt className="text-sky-400 shrink-0" />
              <span>{headerData.topBar.phone}</span>
            </a>
            <a href={`mailto:${headerData.topBar.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
              <FaEnvelope className="text-sky-400 shrink-0" />
              <span>{headerData.topBar.email}</span>
            </a>
            <div className="flex items-center gap-3 text-xs text-sky-300/80 pt-2">
              <FaClock className="text-emerald-400 shrink-0" />
              <span>{headerData.topBar.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}