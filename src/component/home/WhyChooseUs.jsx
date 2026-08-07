'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaDollarSign, 
  FaClock, 
  FaTools, 
  FaServer, 
  FaShieldAlt, 
  FaCheckCircle 
} from 'react-icons/fa'

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export default function WhyChooseUsSection() {
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
    <section 
      className="py-20 bg-slate-50 relative overflow-hidden select-none bg-cover bg-center bg-no-repeat"
      >
      {/* Background Decorative Gradient Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why <span className="text-[#0c5693]">Choose</span> Us
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Empowering medical practices with cost-efficient, highly secure, and technology-driven transcription solutions.
          </p>
        </div>

        {/* 2x2 Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/60 border-2 border-transparent hover:border-[#0c5693] hover:shadow-2xl hover:shadow-[#0c5693]/10 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Badge & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold text-[#0c5693] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                    {benefit.badge}
                  </span>
                  <div className="text-[#0c5693] text-3xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0c5693] transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}