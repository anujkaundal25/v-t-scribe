'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaShieldAlt, 
  FaAward, 
  FaClock, 
  FaUsers, 
  FaCheckCircle, 
  FaStethoscope, 
  FaLock, 
  FaChartLine, 
  FaFileInvoice, 
  FaServer, 
  FaArrowRight, 
  FaHandshake,
  FaHeadset,
  FaPercent
} from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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

const specialties = [
  "Orthopedics", "Neurology", "Sleep Studies", "Respiratory Medicine",
  "Radiology", "Internal Medicine", "Obstetrics & Gynecology",
  "Cardiology", "Surgery", "Gastroenterology"
]

const commitmentHighlights = [
  { title: "Multi-level Quality Assurance", desc: "Two tiers of rigorous QA review before delivery." },
  { title: "99.9% Accuracy Standards", desc: "Strict adherence to official AAMT benchmark guidelines." },
  { title: "HIPAA-Compliant Workflows", desc: "Signed Business Associate agreements and strict protocols." },
  { title: "Secure FTP & Encryption", desc: "End-to-end encrypted file transfer and secure storage." },
  { title: "Daily Status & Progress Reports", desc: "Transparent daily flag logs and line count tracking." },
  { title: "Electronic Document Archiving", desc: "Organized patient chart archiving and retrieval." },
  { title: "Fast Turnaround Time", desc: "Reliable 8–12 hour overnight report delivery." },
  { title: "Continuous Improvements", desc: "Free MS Word template optimization for better page efficiency." }
]

const promiseItems = [
  { title: "Better Quality", icon: FaAward, color: "text-amber-500", bg: "bg-amber-50 border-amber-100" },
  { title: "Faster Turnaround", icon: FaClock, color: "text-sky-500", bg: "bg-sky-50 border-sky-100" },
  { title: "Lower Costs", icon: FaPercent, color: "text-emerald-500", bg: "bg-emerald-50 border-emerald-100" },
  { title: "Complete Confidentiality", icon: FaLock, color: "text-indigo-500", bg: "bg-indigo-50 border-indigo-100" },
  { title: "Long-Term Partnership", icon: FaHandshake, color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
  { title: "Exceptional Support", icon: FaHeadset, color: "text-teal-500", bg: "bg-teal-50 border-teal-100" }
]

export default function AboutPage() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen pt-24 pb-20">
      
      {/* SECTION 1: HERO & OUR STORY */}
      <section className="relative bg-gradient-to-b from-[#002742] via-[#013563] to-[#014f92] text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-sky-400/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-300/30 text-xs font-semibold text-sky-200 uppercase tracking-widest">
              <FaShieldAlt className="text-sky-300" />
              <span>18+ Years of Medical Transcription Excellence</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Trusted Medical Transcription Experts for Over <span className="text-sky-300">18 Years</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-sky-100/90 font-light leading-relaxed">
              At V-T Scribe, we help healthcare providers across Canada and the USA transform voice dictations into accurate, physician-ready medical documentation.
            </motion.p>

            <motion.p variants={itemVariants} className="text-sm sm:text-base text-sky-100/80 leading-relaxed">
              Based in Dehradun, India, we have spent more than 18 years building a reputation for precision, reliability, and confidentiality. Every day, our experienced team processes thousands of medical transcription lines across multiple specialties while maintaining exceptional quality standards. Our commitment is simple—deliver accurate reports on time so healthcare professionals can focus on patient care instead of paperwork.
            </motion.p>
          </motion.div>

          {/* Key Quick Metrics Card */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl space-y-6">
              <h2 className="text-2xl font-bold text-white border-b border-white/15 pb-3">At a Glance</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-emerald-400">6,000+</div>
                  <div className="text-xs text-sky-100 mt-1">Lines Processed / Day</div>
                </div>

                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-sky-300">+2,000</div>
                  <div className="text-xs text-sky-100 mt-1">Daily Line Reserve Capacity</div>
                </div>

                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-amber-300">99.9%</div>
                  <div className="text-xs text-sky-100 mt-1">AAMT Quality Score</div>
                </div>

                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-sky-200">25+</div>
                  <div className="text-xs text-sky-100 mt-1">Skilled Personnel</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 text-xs text-sky-200 border-t border-white/15">
                <FaLock className="text-emerald-400 text-base shrink-0" />
                <span>Full HIPAA Compliance • Signed Business Associate Agreements</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: WHO WE ARE */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Accuracy, Experience & Healthcare Excellence
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We are a dedicated team of medical transcription professionals, quality analysts, and technology specialists committed to delivering dependable documentation services.
          </p>
        </div>

        {/* What Makes Us Different Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: FaClock, title: "18+ Years Experience", desc: "Longstanding expertise serving medical clinics and transcription firms." },
            { icon: FaChartLine, title: "6,000+ Daily Lines", desc: "Proven high-volume line capacity plus 2,000 line daily buffer." },
            { icon: FaUsers, title: "25+ Experts", desc: "In-house transcriptionists and senior quality analysts in Dehradun, India." },
            { icon: FaShieldAlt, title: "99.9% AAMT Quality", desc: "Rigorous quality compliance following official AAMT guidelines." },
            { icon: FaLock, title: "HIPAA Compliant", desc: "Secure encrypted communications, LAN controls, and zero paper prints." },
            { icon: FaClock, title: "8–12 Hour TAT", desc: "Overnight turnaround so charts are ready first thing in the morning." },
            { icon: FaServer, title: "Dedicated Server", desc: "Personal FTP access with protected password credentials." },
            { icon: FaPercent, title: "30%+ Cost Savings", desc: "Significantly cut documentation expenses without compromising accuracy." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center text-xl">
                <item.icon />
              </div>
              <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Medical Specialties Supported */}
        <div className="bg-gradient-to-r from-sky-900 to-[#002742] text-white p-8 sm:p-12 rounded-3xl shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-sky-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider mb-1">
                <FaStethoscope />
                <span>Specialized Medical Expertise</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Comprehensive Multi-Specialty Coverage
              </h3>
            </div>
            <p className="text-sky-200 text-sm max-w-md">
              Our medical transcriptionists are trained in specialized clinical vocabularies, drug dictionaries, and doctor-specific dictation preferences.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {specialties.map((spec, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl text-center text-xs sm:text-sm font-semibold text-sky-100 hover:bg-white/20 transition-colors">
                {spec}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR COMMITMENT */}
      <section className="py-20 bg-slate-100/80 border-y border-slate-200 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Our Commitment</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built Around Quality, Security & Reliability
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Every report we produce follows a structured quality assurance process designed to ensure consistency, accuracy, and absolute confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitmentHighlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500 text-lg shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200 max-w-3xl mx-auto">
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              "Our goal is to become a seamless, long-term extension of your healthcare documentation team by delivering dependable transcription services every day."
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: WHY HEALTHCARE PROVIDERS TRUST V-T SCRIBE */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              More Than a Service—A Reliable Transcription Partner
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Healthcare organizations choose V-T Scribe because we deliver measurable value beyond transcription. We help clients reduce operational costs by at least 30%, improve turnaround times, maintain strict patient confidentiality, and simplify documentation workflows.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our team also assists clients with template optimization, dictation workflow improvements, and secure document management—without additional implementation costs. Whether supporting individual clinics or large transcription firms, we remain committed to delivering dependable service, transparent communication, and exceptional quality.
            </p>

            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-95 text-sm"
              >
                <span>Request a Free Trial Week</span>
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>

          {/* Our Promise Cards Grid */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Our Promise to Every Client</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {promiseItems.map((promise, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl border ${promise.bg} flex items-center gap-3.5 transition-transform hover:scale-[1.02]`}>
                    <div className={`p-2.5 rounded-xl bg-white shadow-sm ${promise.color}`}>
                      <promise.icon className="text-lg" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">{promise.title}</span>
                  </div>
                ))}
              </div>

              <div className="bg-sky-900 text-white p-4 rounded-2xl text-xs flex items-center justify-between mt-4">
                <span>Free dictaphone equipment setup & template optimization</span>
                <span className="font-bold text-emerald-400 uppercase tracking-wider">$0 Extra Cost</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}