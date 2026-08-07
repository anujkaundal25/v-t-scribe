'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaEnvelope, 
  FaClock, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaLock, 
  FaBuilding,
  FaComments,
  FaArrowRight
} from 'react-icons/fa'

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

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
              <FaComments className="text-sky-300 animate-pulse" />
              <span>Get in Touch with Our Experts</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              Contact <span className="text-sky-300">V-T Scribe</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-sky-100/90 font-light leading-relaxed">
              We will get in touch with you to gather your thoughts and specific transcription needs. Experience our accuracy and turnaround firsthand with a 1-week Free Trial.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: FORM & CONTACT DETAILS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Left Side: Contact Information Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            
            {/* Direct Details Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 hover:shadow-xl hover:border-sky-200 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Get in Touch</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl text-lg shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Email Inquiry</p>
                    <a href="mailto:info@vtscribe.com" className="text-slate-900 font-bold hover:text-sky-600 transition-colors text-sm sm:text-base">
                      info@vtscribe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl text-lg shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <FaBuilding />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Headquarters</p>
                    <p className="text-slate-800 text-xs sm:text-sm font-semibold">
                      V-T Scribe Transcription Services
                    </p>
                    <p className="text-slate-500 text-xs">
                      Dehradun, Uttarakhand, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl text-lg shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Operations Hours</p>
                    <p className="text-slate-800 text-xs sm:text-sm font-semibold">
                      Active Queue: 18 hrs / 6 Days
                    </p>
                    <p className="text-slate-500 text-xs">
                      Scalable to 24x7 / 365 dictation turnaround
                    </p>
                  </div>
                </div>
              </div>

              {/* HIPAA Security Note */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3 text-xs text-slate-600">
                <FaLock className="text-emerald-500 text-base shrink-0" />
                <span>All communication and dictation transfers are 100% HIPAA encrypted and secure.</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Side: Interactive Inquiry Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">Send Us a Message</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Fill out the form below and our operations team will respond within 24 business hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-3"
                  >
                    <FaCheckCircle className="text-emerald-500 text-5xl mx-auto animate-bounce" />
                    <h4 className="text-xl font-bold text-emerald-900">Thank You for Reaching Out!</h4>
                    <p className="text-emerald-700 text-xs sm:text-sm max-w-md mx-auto">
                      We have received your message and will get in touch shortly to discuss your transcription requirements and set up your 1-week free trial.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase">Your Name *</label>
                        <motion.input 
                          whileFocus={{ scale: 1.01 }}
                          type="text" 
                          name="name" 
                          required 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Dr. Jane Smith" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase">Email Address *</label>
                        <motion.input 
                          whileFocus={{ scale: 1.01 }}
                          type="email" 
                          name="email" 
                          required 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane.smith@clinic.com" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase">Phone Number</label>
                        <motion.input 
                          whileFocus={{ scale: 1.01 }}
                          type="tel" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase">Practice / Organization</label>
                        <motion.input 
                          whileFocus={{ scale: 1.01 }}
                          type="text" 
                          name="organization" 
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="City Orthopedic Center" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase">How Can We Help You? *</label>
                      <motion.textarea 
                        whileFocus={{ scale: 1.01 }}
                        name="message" 
                        required 
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your medical specialty, existing dictation workflow, or request a 1-week free trial..." 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all resize-none"
                      />
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-sky-500/25 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                    >
                      <span>Send Message & Request Free Trial</span>
                      <FaPaperPlane className="text-xs" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </motion.div>
      </section>

    </div>
  )
}