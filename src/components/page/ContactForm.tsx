"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-3">Message Sent!</h3>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-left mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          I&apos;d love to help! Let me know how
        </h3>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-[#F8FAFC] border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-slate-900/5 focus:border-slate-300 outline-none transition-all placeholder:text-slate-400 font-medium"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-[#F8FAFC] border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-slate-900/5 focus:border-slate-300 outline-none transition-all placeholder:text-slate-400 font-medium"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Subject of Interest</label>
          <input
            type="text"
            name="subject"
            placeholder="Regarding Project"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-[#F8FAFC] border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-slate-900/5 focus:border-slate-300 outline-none transition-all placeholder:text-slate-400 font-medium"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">How may we assist you?</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Give us more info..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-[#F8FAFC] border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-slate-900/5 focus:border-slate-300 outline-none transition-all placeholder:text-slate-400 font-medium resize-none"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1C2333] hover:bg-[#2a344a] text-white font-semibold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Your Message"
        )}
      </button>
    </form>
  );
}