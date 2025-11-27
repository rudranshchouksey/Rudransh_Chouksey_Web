"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
// Use relative path to avoid alias resolution issues in this environment
import ContactForm from "../../components/page/ContactForm"; 
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  return (
    <section className="pt-24 min-h-screen bg-[#F3F5F8] font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge className="bg-white p-2 text-gray-600 border border-gray-100 shadow-sm rounded-full pr-4 gap-3 hover:bg-white">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center"
              >
                <Phone className="size-4 text-slate-600" />
              </motion.div>
              <span className="text-xs font-semibold text-slate-800 tracking-wide">Contact</span>
            </Badge>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-6 tracking-tight"
          >
            Reach Me Anytime
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Have questions or need help? We&apos;re here for you.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Contact Info Cards (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-[2rem] p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-start gap-5">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                  <Mail className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Email Me</h3>
                  <p className="text-slate-500 mb-4 text-sm leading-relaxed">
                    Feel free to email me if you have any questions or need more details!
                  </p>
                  <a 
                    href="mailto:rudranshchouksey@gmail.com" 
                    className="text-slate-900 font-semibold underline decoration-slate-300 hover:decoration-slate-900 underline-offset-4 transition-all flex items-center gap-2 group"
                  >
                    rudranshchouksey@gmail.com
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-[2rem] p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-start gap-5">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                  <Phone className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Prefer to Call?</h3>
                  <p className="text-slate-500 mb-4 text-sm leading-relaxed">
                    Feel free to book a call if that&apos;s more convenient and easier for you.
                  </p>
                  <a 
                    href="tel:+919630880614" 
                    className="text-slate-900 font-semibold underline decoration-slate-300 hover:decoration-slate-900 underline-offset-4 transition-all flex items-center gap-2 group"
                  >
                    +91 96308 80614
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Contact Form (Span 7) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full"
            >
              <ContactForm />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}