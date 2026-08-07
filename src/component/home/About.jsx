'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaChartLine, 
  FaShieldAlt, 
  FaUsers, 
  FaAward,
  FaCheckCircle
} from 'react-icons/fa'

const stats = [
  {
    icon: <FaAward className="text-[#0c5693] text-2xl" />,
    value: "18+ Years",
    label: "Industry Experience",
    subtext: "Based in Dehradun, India"
  },
  {
    icon: <FaChartLine className="text-[#0c5693] text-2xl" />,
    value: "6,000+",
    label: "Daily Lines Delivered",
    subtext: "+2,000 capacity reserve"
  },
  {
    icon: <FaShieldAlt className="text-[#0c5693] text-2xl" />,
    value: "99.9%",
    label: "AAMT Accuracy Standard",
    subtext: "HIPAA compliant & encrypted"
  },
  {
    icon: <FaUsers className="text-[#0c5693] text-2xl" />,
    value: "25+",
    label: "Medical Specialists",
    subtext: "Serving USA & Canada"
  }
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden text-slate-800">
      
      {/* Background Decorative Accent Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            About <span className="text-[#0c5693]">Us</span>
          </motion.h2>
          <p className="mt-3 text-slate-600 font-medium">
            Empowering healthcare practices across North America with reliable, accurate, and secure transcription services.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story & Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0c5693] text-xs font-bold uppercase tracking-wider">
              <FaCheckCircle className="text-emerald-500" />
              <span>Full Specialty Coverage & Enterprise Support</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Trusted Medical Transcription Partner for Clinics and Healthcare Firms
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Operating out of Dehradun, India, we have spent over 18 years providing high-precision transcription solutions tailored to medical practices across Canada and the USA. Our team of 25+ dedicated specialists delivers fast, compliant, and dependable turnaround every single day.
            </p>

            <p className="text-slate-600 leading-relaxed">
              We specialize across all key medical disciplines — including Orthopedics, Neurology, Radiology, Internal Medicine, Sleep Studies, and OB/GYN — ensuring doctor-specific quality standards with strict adherence to AAMT standards.
            </p>

            {/* Quick Feature Badges */}
            <div className="pt-2 flex flex-wrap gap-3">
              {['Orthopedic', 'Neurology', 'Radiology', 'Internal Medicine', 'OB/GYN', 'Sleep Studies'].map((specialty, idx) => (
                <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 shadow-sm">
                  {specialty}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 2x2 Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}