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
  FaCheckDouble 
} from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
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
  "Orthopedics", "Neurology", "Radiology", "Internal Medicine",
  "Cardiology", "Sleep Medicine", "Respiratory Medicine", "Obstetrics & Gynecology",
  "General Surgery", "Gastroenterology", "Family Medicine", "Multi-Specialty Clinics"
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
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen pt-24 pb-20">
      
      {/* SECTION 1: HERO & CORE SERVICES */}
      <section className="relative bg-gradient-to-b from-[#002742] via-[#013563] to-[#014f92] text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-4"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-sky-400/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-300/30 text-xs font-semibold text-sky-200 uppercase tracking-widest">
              <FaShieldAlt className="text-sky-300" />
              <span>Accurate • Secure • Timely</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              Medical Transcription Services
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-sky-100/90 font-light leading-relaxed">
              We provide professional medical transcription services that convert physician dictations into precise, formatted, and ready-to-use medical reports. Every transcription is handled by experienced professionals and reviewed through a rigorous quality assurance process.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES OFFERED GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">What We Provide</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Our Comprehensive Services</h2>
          <p className="text-slate-600 text-sm">
            Tailored solutions for independent physicians, specialty clinics, hospitals, and transcription companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCapabilities.map((srv, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center text-xl">
                <srv.icon />
              </div>
              <h3 className="text-lg font-bold text-slate-800">{srv.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: SPECIALTIES WE COVER */}
      <section className="py-16 bg-slate-100/80 border-y border-slate-200 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Specialty Expertise</span>
              <h2 className="text-3xl font-extrabold text-slate-900">Expertise Across Multiple Healthcare Specialties</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our transcriptionists are experienced in handling complex terminology, formatting, and documentation requirements across a broad range of medical disciplines.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl text-xl">
                <FaUserCheck />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">Doctor-Specific Formatting</p>
                <p className="text-slate-500">Custom templates aligned to physician guidelines</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {specialtiesList.map((spec, i) => (
              <div key={i} className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm hover:border-sky-300 transition-colors">
                <span className="text-xs sm:text-sm font-bold text-slate-800">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR TRANSCRIPTION PROCESS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Step-By-Step Workflow</span>
          <h2 className="text-3xl font-extrabold text-slate-900">A Quality-Driven Workflow</h2>
          <p className="text-slate-600 text-sm">
            Our streamlined process guarantees 99.9% accuracy while delivering rapid turnaround times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-sky-200">{step.step}</span>
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl text-lg">
                    <step.icon />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <FaArrowRight className="text-sm" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: WHY OUR SERVICES STAND OUT */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-[#002742] to-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Proven Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Designed to Improve Your Documentation Workflow
            </h2>
            <p className="text-sky-100/80 text-sm sm:text-base leading-relaxed">
              Our services are built around the needs of modern healthcare providers, offering a combination of speed, security, quality, and cost efficiency.
            </p>

            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl text-2xl font-bold">
                30%
              </div>
              <div>
                <p className="text-sm font-bold text-white">Cost Reduction Guarantee</p>
                <p className="text-xs text-sky-200">Lower existing transcription expenses while improving TAT</p>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm"
              >
                <span>Start Your 1-Week Free Trial</span>
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Benefits You'll Receive
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <FaCheckCircle className="text-emerald-400 text-sm shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-sky-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}