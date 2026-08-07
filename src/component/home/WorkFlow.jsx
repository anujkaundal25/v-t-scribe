'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaKeyboard, 
  FaCheckDouble, 
  FaUserCheck, 
  FaPaperPlane, 
  FaArrowRight, 
  FaArrowDown, 
  FaShieldAlt,
  FaCommentMedical
} from 'react-icons/fa'

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 15 }
  }
}

export default function WorkflowSection() {
  const steps = [
    {
      stage: "STAGE 01",
      title: "MT Level 1",
      icon: <FaKeyboard />,
      deliverable: "Deliver 80%-90% Quality",
      details: [
        "Experienced MTs aided with MT tools, dictionaries, and drug books",
        "Work-Flow managed through transcription software and custom scripts",
        "Initial transcription created directly from source dictator audio"
      ]
    },
    {
      stage: "STAGE 02",
      title: "QA Level 1",
      icon: <FaCheckDouble />,
      deliverable: "Deliver 99% Quality",
      details: [
        "Senior Quality Editors with 3+ years of medical transcription experience",
        "Doctor-specific quality confirmation & feedback loop to Level 1 MTs",
        "Flag problematic or ambiguous jobs for specialized review"
      ]
    },
    {
      stage: "STAGE 03",
      title: "QA Level 2",
      icon: <FaUserCheck />,
      deliverable: "Conformity to AAMT Standards",
      details: [
        "Validate all files are transcribed & conduct targeted review on flagged jobs",
        "Check client and physician-specific formatting guidelines",
        "Export final polished transcripts for final delivery clearance"
      ]
    },
    {
      stage: "STAGE 04",
      title: "Delivery & Feedback",
      icon: <FaPaperPlane />,
      deliverable: "Secure Distribution",
      details: [
        "Validate 100% file completion across all pending batches",
        "Distribute transcribed charts via secure Fax, Email, or FTP",
        "Continuous feedback loop with clinics, physicians, status logs, and flag logs"
      ]
    }
  ]

  return (
    <section 
      className="py-20 bg-slate-50 relative overflow-hidden select-none bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.webp')" }}
    >
      
      {/* Background Decorative Gradient Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            QUALITY PROCESS & <span className="text-[#0c5693]">WORK FLOW</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Our multi-tiered quality control workflow ensures 99.9% accuracy and compliance at every stage of transcription.
          </p>
        </div>

        {/* Workflow Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col">
              
              {/* Step Card */}
              <motion.div
                variants={stepVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/60 border-2 border-transparent hover:border-[#0c5693] hover:shadow-2xl hover:shadow-[#0c5693]/10 flex flex-col justify-between h-full transition-all duration-300 group"
              >
                <div>
                  {/* Stage Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold text-[#0c5693] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                      {step.stage}
                    </span>
                    <div className="text-[#0c5693] text-2xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0c5693] transition-colors">
                    {step.title}
                  </h3>

                  {/* Deliverable Tag */}
                  <div className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md mb-4 border border-slate-200">
                    {step.deliverable}
                  </div>

                  {/* Bullet Details */}
                  <ul className="space-y-2.5 text-xs text-slate-500 font-normal leading-relaxed">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-[#0c5693] font-bold mt-0.5">&bull;</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Status / Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#0c5693]">
                  <span>Step {index + 1} of 4</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </motion.div>

              {/* Connecting Arrows for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-[#0c5693]/40 text-xl pointer-events-none">
                  <FaArrowRight />
                </div>
              )}

              {/* Connecting Arrows for Mobile */}
              {index < steps.length - 1 && (
                <div className="flex lg:hidden justify-center my-3 text-[#0c5693]/40 text-xl">
                  <FaArrowDown />
                </div>
              )}

            </div>
          ))}
        </motion.div>

        {/* Bottom Feedback Loop Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-[#0c5693] to-sky-800 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md hidden sm:block">
              <FaCommentMedical className="text-2xl text-blue-200" />
            </div>
            <div>
              <h4 className="font-bold text-base">Continuous Operational Transparency</h4>
              <p className="text-xs text-blue-100">
                Maintained through real-time Status Logs, Daily Flag Logs, and direct feedback from physicians and clinics.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-semibold text-blue-100 whitespace-nowrap border border-white/20">
            <span>99.9% AAMT Verified</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}