'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaPercent, 
  FaClock, 
  FaMicrophone, 
  FaServer, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaLock, 
  FaSync, 
  FaUserSecret, 
  FaFileAlt, 
  FaChartLine, 
  FaLayerGroup, 
  FaArrowRight, 
  FaCheckDouble,
  FaFileInvoice
} from 'react-icons/fa'
import Link from 'next/link'

// Framer Motion Animation Variants
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

const keyBenefits = [
  {
    icon: FaPercent,
    title: "30%+ Cost Reduction",
    desc: "Reduce your existing transcription expenses by at least 30% while securing higher quality and turnaround.",
    highlight: "At least 30% Savings"
  },
  {
    icon: FaClock,
    title: "24x7 / 365 Availability",
    desc: "Round-the-clock transcription assistance every day of the year with improved quality and turnaround time.",
    highlight: "24/7/365 Coverage"
  },
  {
    icon: FaMicrophone,
    title: "Free System & Dictaphone Upgrade",
    desc: "Within 2 months of signing the BA contract, our tech team upgrades your dictating system and provides a new dictaphone at zero extra cost.",
    highlight: "$0 Upgrade Cost"
  },
  {
    icon: FaFileInvoice,
    title: "MS Template Optimization",
    desc: "Our MS Office experts optimize your existing templates to fit more reports per page, saving space and printing resources.",
    highlight: "Free Optimization"
  },
  {
    icon: FaServer,
    title: "Dedicated Storage & Login",
    desc: "Get dedicated server space secured with individual Login IDs and passwords accessible strictly by authorized personnel.",
    highlight: "Private Server Space"
  },
  {
    icon: FaShieldAlt,
    title: "99.9% AAMT Accuracy",
    desc: "Rigorous quality compliance following official AAMT guidelines across all specialties and clinic templates.",
    highlight: "AAMT Benchmark"
  }
]

const hipaaPillars = [
  {
    title: "Physical & Office Security",
    icon: FaLock,
    points: [
      "100% in-office operational work (zero home-area security concerns)",
      "Secure fax and phone communications with faxes received via secure email",
      "Encrypted transmission through secure FTP channels",
      "Secure storage and electronic archiving"
    ]
  },
  {
    title: "Data Backup & Redundancy",
    icon: FaSync,
    points: [
      "Hourly automated backups of all transcribed files",
      "Transcribed and QA'd files stored on separate physical servers",
      "Software backups deployed across multiple nodes",
      "Password-enabled LAN network with individual logins for MTs, QA, and management"
    ]
  },
  {
    title: "Patient Privacy & Destruction",
    icon: FaUserSecret,
    points: [
      "Zero paper printing of patient records",
      "Complete chart destruction after 8–10 days (or per client agreement)",
      "Dictation access restricted strictly by credential authentication",
      "Full Business Associate (BA) contracts signed for legal HIPAA compliance"
    ]
  }
]

const workflowSteps = [
  {
    stage: "Stage 1",
    role: "MT Level 1",
    quality: "80% – 90% Quality",
    desc: "Experienced MTs utilize official process documents, medical tools, dictionaries, drug books, and transcription scripts.",
    badge: "Initial Draft"
  },
  {
    stage: "Stage 2",
    role: "QA Level 1",
    quality: "99% Quality",
    desc: "Senior QA staff (3+ years experience) apply doctor-specific quality rules, flag complex jobs, and feed back to MTs.",
    badge: "Doctor Specific"
  },
  {
    stage: "Stage 3",
    role: "QA Level 2",
    quality: "99.9% Quality Standard",
    desc: "Final validation step verifying all files match AAMT guidelines and client guidelines before exporting.",
    badge: "AAMT Verification"
  },
  {
    stage: "Stage 4",
    role: "Secure Delivery",
    quality: "8–12 Hr Overnight TAT",
    desc: "Charts delivered via Secure FTP, Email, or Fax. Includes status logs, daily flag logs, and physician feedback loops.",
    badge: "Client Delivery"
  }
]

export default function WhyUsPage() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen pt-24 pb-20 overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative bg-gradient-to-b from-[#002742] via-[#013563] to-[#014f92] text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl space-y-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-4"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-sky-400/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-300/30 text-xs font-semibold text-sky-200 uppercase tracking-widest">
              <FaShieldAlt className="text-sky-300 animate-pulse" />
              <span>Proven Results • 100% HIPAA Compliant</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              Why Choose <span className="text-sky-300">V-T Scribe</span>?
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-sky-100/90 font-light leading-relaxed">
              Cut your existing transcription costs by at least 30% while acquiring 24/7/365 coverage, overnight turnaround, free dictation hardware upgrades, and 99.9% AAMT-standard quality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: KEY BENEFITS FOR YOU */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Core Value</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Key Benefits For Your Practice</h2>
          <p className="text-slate-600 text-sm">
            Everything you need to streamline clinical documentation, reduce costs, and upgrade dictation technology.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {keyBenefits.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 space-y-4 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center text-xl group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <item.icon />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                    {item.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 3: KEY FEATURES BAR */}
      <section className="py-12 bg-sky-900 text-white px-6 border-y border-sky-800">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="space-y-1 cursor-default p-2 rounded-xl transition-colors hover:bg-white/5">
            <p className="text-2xl font-black text-sky-300">8–12 Hrs</p>
            <p className="text-xs text-sky-100">Overnight TAT (FTP, Email, Fax)</p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="space-y-1 cursor-default p-2 rounded-xl transition-colors hover:bg-white/5">
            <p className="text-2xl font-black text-emerald-400">Digital DSS</p>
            <p className="text-xs text-sky-100">Flexible Dictaphone Compatibility</p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="space-y-1 cursor-default p-2 rounded-xl transition-colors hover:bg-white/5">
            <p className="text-2xl font-black text-amber-300">Daily Logs</p>
            <p className="text-xs text-sky-100">Daily Status & Flag File Logs</p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="space-y-1 cursor-default p-2 rounded-xl transition-colors hover:bg-white/5">
            <p className="text-2xl font-black text-sky-200">Weekly Counts</p>
            <p className="text-xs text-sky-100">Transparent Weekly Line Audits</p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 4: HIPAA CONFIDENTIALITY & SECURITY */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Compliance First</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Full HIPAA Confidentiality Compliance</h2>
          <p className="text-slate-600 text-sm">
            We sign formal Business Associate (BA) contracts and enforce multi-layered security controls to protect patient health information.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {hipaaPillars.map((pillar, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 space-y-4 group cursor-pointer"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl text-lg group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <pillar.icon />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{pillar.title}</h3>
              </div>

              <ul className="space-y-2.5">
                {pillar.points.map((pt, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 3 }}
                    className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed transition-transform"
                  >
                    <FaCheckCircle className="text-emerald-500 text-sm shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 5: QUALITY PROCESS & WORKFLOW */}
      <section className="py-20 bg-slate-100/80 border-t border-slate-200 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Multi-Tier QA</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Quality Process & Work Flow</h2>
            <p className="text-slate-600 text-sm">
              Our 3-tier inspection process guarantees 99.9% accuracy before files are exported back to your practice.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {workflowSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 space-y-4 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                      {step.stage}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {step.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{step.role}</h3>
                    <p className="text-xs font-extrabold text-sky-600 mt-0.5">{step.quality}</p>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-3">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-[#002742] to-[#014f92] text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-2xl hover:shadow-sky-900/30 transition-all duration-300 border border-white/10"
          >
            <div>
              <h3 className="text-2xl font-bold">Ready to reduce transcription costs by 30%?</h3>
              <p className="text-sky-200 text-xs sm:text-sm mt-1">Get started with a 1-week free trial. No obligation required.</p>
            </div>
            <motion.Link 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-sky-500/30 transition-all shrink-0 text-sm flex items-center gap-2"
            >
              <span>Claim Your Free Trial</span>
              <FaArrowRight className="text-xs" />
            </motion.Link>
          </motion.div>

        </div>
      </section>

    </div>
  )
}