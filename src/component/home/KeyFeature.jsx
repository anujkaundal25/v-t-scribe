'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaMicrophoneAlt, 
  FaClock, 
  FaAward, 
  FaClipboardList, 
  FaChartBar, 
  FaArchive 
} from 'react-icons/fa'

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 14 }
  }
}

export default function KeyFeaturesSection() {
  const features = [
    {
      title: "Digital Dictaphone Support",
      description: "We can also work with Digital Dictaphones that make transferring voice files so much flexible.",
      icon: <FaMicrophoneAlt />
    },
    {
      title: "Fast Turnaround (8-12 hrs)",
      description: "The MDs get the reports first thing in the morning through FTP, e-mail, Fax or other secure methods as desired.",
      icon: <FaClock />
    },
    {
      title: "Excellent Quality (99.9%+)",
      description: "Delivering top-tier accuracy based on AAMT standards with an rigorous quality assurance workflow.",
      icon: <FaAward />
    },
    {
      title: "Daily Flag & Status Logs",
      description: "Provide Daily Flag Log of files and daily status log to keep your practice continuously updated.",
      icon: <FaClipboardList />
    },
    {
      title: "Weekly Line Count",
      description: "Weekly Line count for complete transparency and clear, reliable billing verification.",
      icon: <FaChartBar />
    },
    {
      title: "Electronic Archiving",
      description: "Electronics Archiving with files systematically named on Patient names for effortless retrieval.",
      icon: <FaArchive />
    }
  ]

  return (
    <section className="py-20 bg-slate-50/80 relative overflow-hidden">
      
      {/* Top Left Decorative Waves Pattern */}
      <div className="absolute top-53 left-6 sm:left-12 opacity-20 pointer-events-none">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="#0c5693" strokeWidth="2.5">
          <path d="M0 10 Q15 0, 30 10 T60 10 T90 10 T120 10" />
          <path d="M0 25 Q15 15, 30 25 T60 25 T90 25 T120 25" />
          <path d="M0 40 Q15 30, 30 40 T60 40 T90 40 T120 40" />
        </svg>
      </div>

      {/* Bottom Right Decorative Waves Pattern */}
      <div className="absolute bottom-10 right-6 sm:right-12 opacity-20 pointer-events-none">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="#0c5693" strokeWidth="2.5">
          <path d="M0 10 Q15 0, 30 10 T60 10 T90 10 T120 10" />
          <path d="M0 25 Q15 15, 30 25 T60 25 T90 25 T120 25" />
          <path d="M0 40 Q15 30, 30 40 T60 40 T90 40 T120 40" />
        </svg>
      </div>

      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            KEY <span className="text-[#0c5693]">FEATURES</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Streamlined transcription workflows tailored to maximize accuracy, speed, and transparency for medical practices.
          </p>
        </div>

        {/* 3x2 Grid Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-tl-[30px] rounded-br-[30px] p-8 shadow-xl shadow-slate-200/70 border-2 border-transparent hover:border-[#0c5693] hover:shadow-2xl hover:shadow-[#0c5693]/10 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                {/* Icon */}
                <div className="text-[#0c5693] text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0c5693] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm font-normal leading-relaxed">
                  {feature.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}