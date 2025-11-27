"use client"

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import ContactForm from "@/components/page/ContactForm";
import CTASection from "@/components/portfolio/CTASection";

// Server Component - Great for SEO and performance
export default function ContactPage() {
  return (
    <section className="pt-24 bg-[#F3F5F8]">
      <div className="min-h-screen bg-[#F3F5F8] font-sans selection:bg-blue-100 selection:text-blue-900">
        
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-gray-600 text-sm font-medium mb-">
              <Phone className="w-4 h-4" />
              Contact
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal font-sans text-gray-900 mb-4 tracking-tight">
              Reach Me Anytime
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Have questions or need help? We&apos;re here for you.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left Column - Contact Info Cards (Span 5) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Email Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Me</h3>
                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                      Feel free to email me if you have any questions or need more details!
                    </p>
                    <a 
                      href="mailto:rudranshchouksey@gmail.com" // <--- CHANGE THIS TO YOUR EMAIL
                      className="text-gray-900 hover:text-blue-600 font-semibold underline decoration-gray-300 hover:decoration-blue-600 underline-offset-4 transition-all"
                    >
                      rudranshchouksey@gmail.com {/* <--- CHANGE THIS TO YOUR EMAIL TEXT */}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Prefer to Call?</h3>
                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                      Feel free to book a call if that&apos;s more convenient and easier for you.
                    </p>
                    <a 
                      href="tel:+919630880614" // <--- CHANGE THIS TO YOUR PHONE NUMBER
                      className="text-gray-900 hover:text-blue-600 font-semibold underline decoration-gray-300 hover:decoration-blue-600 underline-offset-4 transition-all"
                    >
                      +91 96308 80614 {/* <--- CHANGE THIS TO YOUR DISPLAY PHONE NUMBER */}
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column - Contact Form (Span 7) */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-white/50 h-full"
              >
                <ContactForm />
              </motion.div>
            </div>

          </div>
        </div>
        <CTASection />
      </div>
    </section>
  );
}

