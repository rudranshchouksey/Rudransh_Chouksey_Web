"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: "What services do you offer?",
      answer: "I specialize in web design, branding, UI/UX, and Framer development, creating modern, user-friendly experiences tailored to your needs"
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes, I include multiple revision rounds in my packages to ensure the final design perfectly matches your vision and requirements."
    },
    {
      question: "How do I start working with you?",
      answer: "Simply reach out through the contact form or book a discovery call. We'll discuss your project goals and create a tailored proposal."
    },
    {
      question: "What is your pricing structure?",
      answer: "Pricing varies based on project scope and complexity. I offer both fixed-price packages and hourly rates depending on your needs."
    },
    {
      question: "How long does a project take?",
      answer: "Timelines depend on the project size. A standard website typically takes 2-4 weeks, while complex applications may take longer."
    }
  ];

  const toggleFAQ = (index: number): void => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    // UPDATED BACKGROUND COLOR to match the darker gray-blue reference
    <section className="py-24 px-6" style={{ backgroundColor: '#DCE3E8' }}>
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-[0_2px_10px_rgb(0,0,0,0.05)] border border-gray-100">
              <HelpCircle className="w-4 h-4 text-slate-900" />
              <span className="text-sm font-semibold text-slate-800 tracking-wide">FAQS</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-medium text-slate-900 mb-6">
            Questions? Answers!
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find quick answers to the most common questions about the services offered
          </p>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-start">

          {/* LEFT: Get In Touch Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // Added distinct shadow and pure white background
            className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center sticky top-10"
          >
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-100">
              <HelpCircle className="w-6 h-6 text-slate-700" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Get In Touch Now!
            </h3>

            <p className="text-slate-500 mb-8 leading-relaxed">
              Still have questions? Feel free to get in touch with us today!
            </p>

            <Link href="/contact" className="block">
              <button className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-all font-semibold flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                Ask A Question <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>

          {/* RIGHT: FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq: FAQ, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-start justify-between hover:bg-slate-50 transition-colors gap-4"
                >
                  <h3 className="text-lg font-semibold text-slate-800 pt-1">
                    {faq.question}
                  </h3>
                  {/* Chevron Icon Handling */}
                  <div className="flex-shrink-0 mt-1">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-slate-400 -rotate-45" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0">
                        <p className="text-slate-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}