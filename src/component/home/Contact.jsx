'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane, 
  FaShieldAlt, 
  FaLock 
} from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialty: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form Submitted:', formData)
  }

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-slate-800 pt-10 mt-10 pb-20 select-none overflow-hidden"
      style={{ 
        backgroundImage: `url('https://images.pexels.com/photos/28102632/pexels-photo-28102632.jpeg')` 
      }}
    >
      {/* Light Dual-Tone Overlay to keep background clean and text legible */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0c5693_0.75px,transparent_0.75px)] [background-size:20px_20px] pointer-events-none"></div>

      {/* Glowing background orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0c5693]/10 text-[#0c5693] px-4 py-1.5 rounded-full text-sm font-semibold border border-[#0c5693]/15 backdrop-blur-md">
            <FaShieldAlt className="text-blue-600" />
            <span>24/7 Dedicated Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0c5693] tracking-tight">
            Get in Touch With Us
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Have questions about our transcription accuracy, EHR integrations, or pricing? Fill out the form or reach out directly to our operations team.
          </p>
        </div>

        {/* Grid Layout: Left (Form) | Right (Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/95 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-xl border border-white/60 space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
              <p className="text-sm text-slate-500 mt-1">We usually respond within 1-2 business hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Dr. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 focus:border-[#0c5693] focus:bg-white focus:outline-none transition-all text-sm"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@clinic.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 focus:border-[#0c5693] focus:bg-white focus:outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 focus:border-[#0c5693] focus:bg-white focus:outline-none transition-all text-sm"
                  />
                </div>

                {/* Medical Specialty */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Specialty / Service
                  </label>
                  <select 
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 focus:border-[#0c5693] focus:bg-white focus:outline-none transition-all text-sm text-slate-700"
                  >
                    <option value="">Select Specialty</option>
                    <option value="Orthopedic">Orthopedic</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Radiology">Radiology</option>
                    <option value="Internal Medicine">Internal Medicine</option>
                    <option value="Other">Other Specialty</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your estimated daily line volume or service needs..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 focus:border-[#0c5693] focus:bg-white focus:outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#0c5693] hover:bg-[#083b66] text-white font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <FaLock />
                <span>Your information is protected under strict HIPAA compliance standards.</span>
              </div>

            </form>
          </motion.div>

          {/* Right Side: Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Card 1: Main Contacts */}
            <div className="bg-[#0c5693]/95 backdrop-blur-md text-white p-8 rounded-3xl shadow-xl relative overflow-hidden border border-white/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold mb-6 tracking-wide border-b border-white/15 pb-3">
                Contact Details
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-blue-200 border border-white/15">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Operational Center</h4>
                    <p className="text-blue-50/80 leading-relaxed mt-0.5">
                      Dehradun, Uttarakhand, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-blue-200 border border-white/15">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Phone Support</h4>
                    <a href="tel:+18001234567" className="text-blue-50/80 hover:text-white transition-colors block mt-0.5">
                      +1 (800) 123-4567 (Toll-Free)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-blue-200 border border-white/15">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Email Inquiries</h4>
                    <a href="mailto:info@meditranshub.com" className="text-blue-50/80 hover:text-white transition-colors block mt-0.5">
                       info@vtscribe.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Card 2: Operating Hours */}
            <div className="bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/60 flex items-start gap-4">
              <div className="bg-blue-50 p-3.5 rounded-2xl text-[#0c5693]">
                <FaClock className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Coverage Hours</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  <span className="font-bold text-emerald-600">24/7 Operations</span> to align with EST, CST, MST, and PST North American healthcare schedules.
                </p>
              </div>
            </div>

            {/* Info Card 3: USA & Canada Markets */}
            <div className="bg-gradient-to-r from-slate-900/95 to-[#0c5693]/95 text-white p-6 rounded-3xl shadow-lg backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">Target Service Region</p>
                <h4 className="text-lg font-bold mt-0.5">USA & Canada Healthcare</h4>
              </div>
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
                AAMT Standard
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Contact