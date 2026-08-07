'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaStethoscope, 
  FaFileMedical, 
  FaHospital, 
  FaMicrophone, 
  FaPaperPlane, 
  FaFileAlt, 
  FaSlidersH, 
  FaArchive, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaArrowRight, 
  FaClock, 
  FaUserCheck, 
  FaLock, 
  FaPercent, 
  FaChartLine, 
  FaHeadset, 
  FaVolumeUp, 
  FaCogs, 
  FaCheckDouble,
  FaBone,
  FaBrain,
  FaBed,
  FaLungs,
  FaXRay,
  FaUserMd,
  FaFemale,
  FaHeartbeat,
  FaSyringe,
  FaNotesMedical,
  FaBuilding
} from 'react-icons/fa'
import Link from 'next/link'

// Create a motion-wrapped Link component for Next.js compatibility
const MotionLink = motion.create(Link)

// Frame Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 15 } 
  }
}

const serviceCapabilities = [
  { icon: FaFileMedical, title: "Medical Transcription", desc: "End-to-end dictation conversion for all document types." },
  { icon: FaStethoscope, title: "Clinic Documentation", desc: "Tailored documentation solutions for independent practices." },
  { icon: FaHospital, title: "Hospital Documentation", desc: "High-capacity processing for large hospital departments." },
  { icon: FaMicrophone, title: "Digital Dictation", desc: "Support for digital dictaphones, phone dictation, and DSS formats." },
  { icon: FaPaperPlane, title: "Secure File Delivery", desc: "Encrypted FTP, secure email, fax, and direct portal delivery." },
  { icon: FaFileAlt, title: "Medical Report Formatting", desc: "Doctor-specific styles and standardized clinical layouts." },
  { icon: FaSlidersH, title: "Template Customization", desc: "Free MS Word template optimization to save space and pages." },
  { icon: FaArchive, title: "Electronic Record Archiving", desc: "Structured patient file archiving named by patient records." }
]

const specialtiesList = [
  { name: "Orthopedics", icon: FaBone },
  { name: "Neurology", icon: FaBrain },
  { name: "Radiology", icon: FaXRay },
  { name: "Internal Medicine", icon: FaUserMd },
  { name: "Cardiology", icon: FaHeartbeat },
  { name: "Sleep Medicine", icon: FaBed },
  { name: "Respiratory", icon: FaLungs },
  { name: "OB/GYN", icon: FaFemale },
  { name: "General Surgery", icon: FaSyringe },
  { name: "Gastroenterology", icon: FaStethoscope },
  { name: "Family Medicine", icon: FaNotesMedical },
  { name: "Multi-Specialty", icon: FaBuilding }
]

const processSteps = [
  {
    step: "01",
    title: "Secure Dictation Submission",
    desc: "Upload audio files through secure FTP, encrypted email, digital dictation systems, or other approved methods.",
    icon: FaVolumeUp
  },
  {
    step: "02",
    title: "Professional Transcription",
    desc: "Experienced medical transcriptionists prepare the report using medical dictionaries, specialty references, and physician-specific templates.",
    icon: FaCogs
  },
  {
    step: "03",
    title: "Multi-Level Quality Review",
    desc: "Every document undergoes multiple quality checks to verify medical terminology, formatting, grammar, and compliance with AAMT standards.",
    icon: FaCheckDouble
  },
  {
    step: "04",
    title: "Secure Delivery",
    desc: "Completed reports are delivered within the agreed turnaround time through secure electronic channels, ready for immediate use.",
    icon: FaPaperPlane
  }
]

const keyBenefits = [
  "99.9% transcription accuracy",
  "8–12 hour turnaround",
  "HIPAA-compliant security",
  "Secure FTP & encrypted communication",
  "Daily status and flag reports",
  "Weekly line count reporting",
  "Electronic document archiving",
  "Physician-specific templates",
  "Support for DSS and multiple audio formats",
  "Up to 30% reduction in transcription costs",
  "Scalable capacity for growing practices",
  "Dedicated customer support"
]

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen pt-20 pb-20 overflow-x-hidden">
      
      {/* SECTION 1: HERO & CORE SERVICES */}
      <section className="relative bg-gradient-to-b from-[#002742] via-[#013563] to-[#014f92] text-white py-16 sm:py-20 lg:py-24 px-6 overflow-hidden flex items-center min-h-[50vh]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          <motion.div 
            className="lg:col-span-7 space-y-5"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-sky-400/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-300/30 text-[11px] font-semibold text-sky-200 uppercase tracking-widest">
              <FaShieldAlt className="text-sky-300 animate-pulse" />
              <span>Accurate • Secure • Timely</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Medical Transcription <span className="text-sky-300">Services</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-xl text-sky-100/90 font-light leading-relaxed">
              We provide professional medical transcription services that convert physician dictations into precise, formatted, and ready-to-use medical reports.
            </motion.p>

            <motion.p variants={itemVariants} className="text-xs sm:text-sm text-sky-100/80 leading-relaxed max-w-2xl">
              Every transcription is handled by experienced healthcare documentation specialists and thoroughly reviewed through a multi-tier quality assurance workflow to ensure full compliance with AAMT standards and HIPAA privacy guidelines.
            </motion.p>
          </motion.div>

          {/* Quick Stats / Overview Card with Hover Glow */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-4 hover:border-sky-300/50 transition-all duration-300">
              <h2 className="text-xl font-bold text-white border-b border-white/15 pb-3">Service Guarantees</h2>
              
              <div className="grid grid-cols-2 gap-3">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-3.5 rounded-xl border border-white/10 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-amber-300">99.9%</div>
                  <div className="text-[11px] text-sky-100 mt-0.5">AAMT Accuracy Benchmark</div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-3.5 rounded-xl border border-white/10 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">8–12h</div>
                  <div className="text-[11px] text-sky-100 mt-0.5">Overnight Turnaround</div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-3.5 rounded-xl border border-white/10 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-sky-300">30%</div>
                  <div className="text-[11px] text-sky-100 mt-0.5">Average Cost Reduction</div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-3.5 rounded-xl border border-white/10 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-sky-200">100%</div>
                  <div className="text-[11px] text-sky-100 mt-0.5">HIPAA Compliant</div>
                </motion.div>
              </div>

              <div className="flex items-center gap-2 pt-3 text-[11px] text-sky-200 border-t border-white/15">
                <FaLock className="text-emerald-400 text-sm shrink-0" />
                <span>Encrypted FTP File Transfer • Daily Line Count Tracking</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SERVICES OFFERED GRID WITH ANIMATION & HOVER */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">What We Provide</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our Comprehensive Services</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Tailored solutions for independent physicians, specialty clinics, hospitals, and transcription companies.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceCapabilities.map((srv, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 space-y-3 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center text-xl group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                <srv.icon />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{srv.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 2: SPECIALTIES WE COVER WITH HOVER CARDS */}
      <section className="py-20 bg-slate-100/80 border-y border-slate-200 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12"
          >
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Specialty Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Expertise Across Multiple Healthcare Specialties</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our transcriptionists are experienced in handling complex terminology, formatting, and documentation requirements across a broad range of medical disciplines.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 shrink-0 cursor-default"
            >
              <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl text-xl">
                <FaUserCheck />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">Doctor-Specific Formatting</p>
                <p className="text-slate-500">Custom templates aligned to physician guidelines</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          >
            {specialtiesList.map((spec, i) => {
              const SpecIcon = spec.icon
              return (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center shadow-sm hover:border-sky-400 hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-2.5 bg-sky-50 rounded-lg group-hover:bg-sky-600 transition-colors duration-300">
                    <SpecIcon className="text-sky-600 text-lg group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-sky-700 transition-colors">{spec.name}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: WORKFLOW PROCESS WITH STAGGER ANIMATION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Step-By-Step Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">A Quality-Driven Workflow</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Our streamlined process guarantees 99.9% accuracy while delivering rapid turnaround times.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {processSteps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-4 flex flex-col justify-between hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-sky-200 group-hover:text-sky-500 transition-colors duration-300">{step.step}</span>
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl text-lg group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <step.icon />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-300">
                  <FaArrowRight className="text-sm" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 4: PROVEN BENEFITS SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-[#002742] to-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Proven Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Designed to Improve Your Documentation Workflow
            </h2>
            <p className="text-sky-100/80 text-sm sm:text-base leading-relaxed">
              Our services are built around the needs of modern healthcare providers, offering a combination of speed, security, quality, and cost efficiency.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4 cursor-default"
            >
              <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl text-2xl font-bold">
                30%
              </div>
              <div>
                <p className="text-sm font-bold text-white">Cost Reduction Guarantee</p>
                <p className="text-xs text-sky-200">Lower existing transcription expenses while improving TAT</p>
              </div>
            </motion.div>

            <div className="pt-2">
              <MotionLink 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact" 
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-sky-500/30 transition-all text-sm"
              >
                <span>Start Your 1-Week Free Trial</span>
                <FaArrowRight className="text-xs" />
              </MotionLink>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Benefits You'll Receive
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyBenefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 4, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5 transition-colors"
                  >
                    <FaCheckCircle className="text-emerald-400 text-sm shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-sky-100">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  )
}