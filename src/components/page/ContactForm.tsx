"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";


// --- Types ---
interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

// --- Contact Form Component ---
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
      <div className="flex flex-col items-center justify-center h-full py-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">We&apos;ll get back to you shortly.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center md:text-left mb-8">
        <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
           {/* Optional: Icon next to form title like Sophie's design if needed, 
               though her design is mostly clean text here */}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          I&apos;d love to help! Let me know how
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Ikta Sollork"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border-gray-100 border focus:bg-white rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all placeholder:text-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="portfoy@support.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border-gray-100 border focus:bg-white rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all placeholder:text-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Subject of Interest</label>
          <input
            type="text"
            name="subject"
            placeholder="Regarding Project"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border-gray-100 border text-gray-900 focus:bg-white rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all placeholder:text-gray-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">How may we assist you?</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Give us more info..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all placeholder:text-gray-500 resize-none"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1a1f2e] hover:bg-black text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gray-200"
      >
        {isSubmitting ? "Sending..." : "Send Your Message"}
      </button>
    </form>
  );
}