'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaDollarSign, 
  FaClock, 
  FaTools, 
  FaServer, 
  FaChevronDown 
} from 'react-icons/fa'

export default function WhyChooseUsSection() {
  // Track open item index (default opens the first item)
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const benefits = [
    {
      icon: <FaDollarSign />,
      badge: "Cost Savings",
      title: "Reduce Costs by 30%+",
      description: "Slash your existing medical transcription expenses by at least 30% without sacrificing speed, accuracy, or service reliability."
    },
    {
      icon: <FaClock />,
      badge: "24/7/365 Support",
      title: "Round-the-Clock Operations",
      description: "Access transcription assistance 24 hours a day, 7 days a week, 365 days a year with superior document quality and faster Turnaround Times (TAT)."
    },
    {
      icon: <FaTools />,
      badge: "Free Upgrade",
      title: "System & Template Upgrades",
      description: "Within 2 months of signing the Business Agreement (BA), our expert tech team will upgrade your dictating system, supply a new dictaphone, and optimize your MS Office templates to maximize reports per page—at zero extra cost."
    },
    {
      icon: <FaServer />,
      badge: "Secure Access",
      title: "Dedicated Server Space",
      description: "Gain private server space complete with customized Login IDs and passwords, ensuring confidential access restricted exclusively to your authorized team."
    }
  ]

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden select-none">
      {/* Background Decorative Gradient Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why <span className="text-[#0c5693]">Choose</span> Us
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Empowering medical practices with cost-efficient, highly secure, and technology-driven transcription solutions.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => {
            const isOpen = openIndex === index

            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen 
                    ? 'border-[#0c5693] shadow-lg shadow-[#0c5693]/5' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Accordion Header / Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon Badge Container */}
                    <div className={`p-3 rounded-xl text-xl transition-colors ${
                      isOpen 
                        ? 'bg-[#0c5693] text-white' 
                        : 'bg-blue-50 text-[#0c5693]'
                    }`}>
                      {benefit.icon}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-[#0c5693] bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-blue-100">
                          {benefit.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>

                  {/* Expand / Collapse Indicator */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 p-2"
                  >
                    <FaChevronDown className="text-sm" />
                  </motion.div>
                </button>

                {/* Accordion Collapsible Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {benefit.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}