'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaShieldAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaChevronRight,
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa'

function Footer() {
  const pageLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/specialties' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const featureLinks = [
    { name: 'Digital Dictaphone Support', href: '#features' },
    { name: 'Fast Turnaround (8-12 hrs)', href: '#features' },
    { name: 'Excellent Quality (99.9%+)', href: '#features' },
    { name: 'Daily Flag & Status Logs', href: '#features' },
    { name: 'Weekly Line Count', href: '#features' },
    { name: 'Electronic Archiving', href: '#features' },
  ]

  return (
    <footer className="relative bg-[#014f92] text-white overflow-hidden border-t border-white/10 select-none">
      {/* Background Subtle Pattern & Glow Effects */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img src="/logo.webp" alt="" className="h-15 md:h-15 w-auto object-contain" />
            </Link>

            {/* Description */}
            <p className="text-blue-100/80 text-sm leading-relaxed max-w-sm">
              Delivering AAMT-standard, 99.9% accurate medical transcription services. Partnering with healthcare providers across the USA and Canada from our operational center in Dehradun, India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FaLinkedin, href: '#' },
                { icon: FaTwitter, href: '#' },
                { icon: FaFacebook, href: '#' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-blue-200 hover:text-white transition-colors"
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Pages Link */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-b border-white/15 pb-2 inline-block lg:block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {pageLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href}
                    className="text-blue-100/80 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <FaChevronRight className="text-[10px] text-blue-300 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Features */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-b border-white/15 pb-2 inline-block lg:block">
              Key Features
            </h4>
            <ul className="space-y-2.5 text-sm">
              {featureLinks.map((feature, i) => (
                <li key={i}>
                  <a 
                    href={feature.href}
                    className="text-blue-100/80 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <FaChevronRight className="text-[10px] text-blue-300 group-hover:translate-x-1 transition-transform" />
                    <span>{feature.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-b border-white/15 pb-2 inline-block lg:block">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 text-blue-100/80">
                <FaMapMarkerAlt className="text-blue-300 text-base mt-1 flex-shrink-0" />
                <span>Dehradun, Uttarakhand, India</span>
              </div>
              
              <div className="flex items-center gap-3 text-blue-100/80">
                <FaPhoneAlt className="text-blue-300 text-sm flex-shrink-0" />
                <a href="tel:+18001234567" className="hover:text-white transition-colors">
                  +1 (800) 123-4567
                </a>
              </div>

              <div className="flex items-center gap-3 text-blue-100/80">
                <FaEnvelope className="text-blue-300 text-sm flex-shrink-0" />
                <a href="mailto:info@meditranshub.com" className="hover:text-white transition-colors">
                  info@vtscribe.com
                </a>
              </div>

              {/* Operations Note Badge */}
              <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-blue-200 font-medium">
                  <span className="text-emerald-400 font-bold">&bull; Live Support</span> &mdash; 24/7 Coverage for US & Canada Timezones
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/70">
          <p>&copy; {new Date().getFullYear()} MediTransHub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/hipaa" className="hover:text-white transition-colors">HIPAA Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer