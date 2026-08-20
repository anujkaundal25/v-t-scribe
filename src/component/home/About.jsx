'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaChartLine, 
  FaShieldAlt, 
  FaUsers, 
  FaAward,
  FaCheckCircle,
  FaStethoscope,
  FaLock,
  FaDollarSign,
  FaArrowRight,
  FaBone,
  FaBrain,
  FaXRay,
  FaUserMd,
  FaFemale,
  FaBed,
  FaHeartbeat,
  FaSyringe
} from 'react-icons/fa'

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('vision')

  const tabContents = {
    vision: {
      title: "18+ Years of Medical Transcription Excellence",
      description: "Operating out of Dehradun, India, scribers delivers high-precision transcription tailored specifically to medical practices across Canada and the USA. We combine human expertise with disciplined multi-tier quality assurance workflows to eliminate documentation burdens for healthcare providers.",
      bullets: ["AAMT Benchmark Guidelines", "Doctor-Specific Preferences", "Dedicated Account Managers"]
    },
    security: {
      title: "Uncompromised Data Governance & HIPAA Compliance",
      description: "Patient confidentiality is built directly into every phase of our operations. From end-to-end encrypted file transfers (FTP/SFTP) to restricted local network access and strict zero-paper print policies, your data remains secure.",
      bullets: ["Signed Business Associate Agreements", "Private Dedicated Server Space", "256-bit Encrypted Workflows"]
    },
    value: {
      title: "Scale Operations while Reducing Overhead by 30%+",
      description: "We assist medical clinics in cutting operational costs without compromising output quality or turnaround times. Our team manages daily processing volumes of 6,000+ lines with an additional 2,000-line daily reserve capacity ready for peak demands.",
      bullets: ["30%+ Immediate Cost Reduction", "8–12 Hour Overnight Delivery", "Free Template & System Upgrades"]
    }
  }


  return (
    <section className="py-20 text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 border-b flex flex-col justify-center items-center text-center border-slate-200 pb-8">
          <div className="flex items-center gap-2 text-[#0c5693] text-xs font-bold uppercase tracking-widest mb-2">
            <FaShieldAlt />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            About <span className="text-[#0c5693]">Us</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base max-w-2xl font-medium">
            Empowering medical practices across Canada and the USA with reliable, accurate, and secure medical transcription solutions.
          </p>
        </div>

        {/* Story Section & Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Navigation Items */}
          <div className="lg:col-span-4 space-y-2">
            {[
              { id: 'vision', label: 'Our Story & Expertise', icon: FaAward },
              { id: 'security', label: 'Security & Compliance', icon: FaLock },
              { id: 'value', label: 'Cost Savings & Scale', icon: FaDollarSign }
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left py-3.5 px-2 border-l-2 flex items-center justify-between text-sm font-bold transition-all ${
                    isActive 
                      ? 'border-[#0c5693] text-[#0c5693] cursor-pointer pl-4' 
                      : 'border-slate-200 text-slate-500 cursor-pointer hover:text-slate-900 hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-base" />
                    <span>{tab.label}</span>
                  </div>
                  <FaArrowRight className={`text-xs transition-transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                </button>
              )
            })}
          </div>

          {/* Active Tab Content */}
          <div className="lg:col-span-8 pl-0 lg:pl-6 border-l-0 lg:border-l border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {tabContents[activeTab].title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {tabContents[activeTab].description}
                </p>

                <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2">
                  {tabContents[activeTab].bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <FaCheckCircle className="text-emerald-600 text-sm" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}