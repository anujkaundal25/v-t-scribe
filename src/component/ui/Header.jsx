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
      <div className="bg-[#014f92] backdrop-blur-md border-b border-[#013d72] py-3.5 px-6 md:px-12">
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
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-[#013d72] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-slate-900/60 backdrop-blur-sm md:hidden flex justify-end">
          <div className="w-full max-w-sm bg-[#002742] h-full shadow-2xl p-6 flex flex-col justify-between text-white">
            <div className="space-y-4">
              {headerData.navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={index} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 border-b border-[#013868] text-lg font-semibold ${
                      isActive ? 'text-sky-300' : 'text-white hover:text-sky-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact Quick Links */}
            <div className="pt-6 border-t border-[#013868] space-y-3 text-sm text-sky-200">
              <a href={`tel:${headerData.topBar.phone}`} className="flex items-center gap-3 hover:text-white">
                <FaPhoneAlt className="text-sky-400" />
                <span>{headerData.topBar.phone}</span>
              </a>
              <a href={`mailto:${headerData.topBar.email}`} className="flex items-center gap-3 hover:text-white">
                <FaEnvelope className="text-sky-400" />
                <span>{headerData.topBar.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}