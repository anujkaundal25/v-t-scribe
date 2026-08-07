"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaArrowRight,
  FaLock,
  FaCheckCircle,
  FaClock,
  FaFileAlt,
  FaLaptopMedical,
  FaPercent,
  FaAward,
  FaStethoscope,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const floatingBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12, delay: 0.6 },
  },
};

export default function HeroSection() {
  return (
    <div
      className="relative min-h-[92vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden pt-28 lg:pt-36 pb-20 select-none"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')`,
      }}
    >
      {/* Dynamic Dual-Tone Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c5693]/95 via-[#0c5693]/90 to-[#0c5693]/50" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Decorative Glow Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-24 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-white">
        {/* Left Side: Value Proposition & Core Website Content */}
        <motion.div
          className="lg:col-span-7 space-y-8 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Compliance & Trust Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-semibold text-blue-100 shadow-lg">
              <FaShieldAlt className="text-blue-300 animate-pulse" />
              <span>100% HIPAA Compliant • 18+ Years Medical Expertise</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight"
          >
            V-T Scribe Medical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-100 to-white">
              Transcription Services
            </span>
          </motion.h1>

          {/* Subheading with Key Stats */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-blue-50/90 font-light leading-relaxed max-w-2xl"
          >
            Servicing{" "}
            <span className="font-semibold text-white">
              6,000+ lines per day
            </span>{" "}
            for clinics and transcription firms across the USA & Canada with an
            additional capacity of 2,000 lines/day. Reduce costs by at least{" "}
            <span className="font-semibold text-emerald-300">30%</span> while
            boosting TAT and quality.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link
              href="/contact"
              className="bg-white text-[#0c5693] hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group text-center"
            >
              <span>Contact Us Now</span>
              <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Operations Overview & Specialties Card */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              type: "spring",
              stiffness: 90,
            }}
            className="relative w-full max-w-md bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-xl space-y-5"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-wide">
                  Dehradun Operations
                </h3>
                <p className="text-xs text-sky-600 font-medium">
                  25+ Expert MTs & QA Personnel
                </p>
              </div>
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
            </div>

            {/* Specialties Supported Banner */}
            <div className="bg-sky-50/80 p-4 rounded-2xl border-l-4 border-sky-500 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-900 uppercase tracking-wider">
                <FaStethoscope className="text-sky-600" />
                <span>All Medical Specialties Covered</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Orthopedic, Neurology, Sleep Studies, Radiology, Internal
                Medicine, ObGyn, Cardiology, Gastro & Surgery.
              </p>
            </div>

            {/* Dictation & Workflow Capabilities */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60 transition-all hover:bg-sky-50/50 hover:border-sky-200"
              >
                <FaLaptopMedical className="text-sky-600 text-lg mb-1" />
                <div className="text-sm font-bold text-slate-900">
                  DSS & Digital
                </div>
                <div className="text-[11px] text-slate-500">
                  Flex Dictaphone Input
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60 transition-all hover:bg-sky-50/50 hover:border-sky-200"
              >
                <FaUsers className="text-sky-600 text-lg mb-1" />
                <div className="text-sm font-bold text-slate-900">
                  2-Tier QA Review
                </div>
                <div className="text-[11px] text-slate-500">
                  Level 1 & Level 2 QA
                </div>
              </motion.div>
            </div>

            {/* Service Highlights Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <FaCheckCircle className="text-emerald-500 text-sm flex-shrink-0" />
                <span>Free Dictaphone & MS Template Customization</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <FaCheckCircle className="text-emerald-500 text-sm flex-shrink-0" />
                <span>Daily Flag Logs & Weekly Line Count Reports</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <FaCheckCircle className="text-emerald-500 text-sm flex-shrink-0" />
                <span>Hourly Auto-Backups & Strict Electronic Archiving</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
