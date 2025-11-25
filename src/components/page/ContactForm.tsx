"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, MessageSquare } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
  budget: string;
  timeline: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: "rudranshchouksey@gmail.com",
          subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message,
          fullName: formData.fullName,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      setIsSubmitted(true);
      setFormData({ 
        fullName: "", 
        email: "", 
        subject: "", 
        message: "", 
        projectType: "", 
        budget: "", 
        timeline: "" 
      });

    } catch (error) {
      console.error("Error sending email:", error);
      setError(error instanceof Error ? error.message : "There was an error sending your message. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleResetForm = (): void => {
    setIsSubmitted(false);
    setError("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50"
    >
      {!isSubmitted ? (
        <>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                I'd love to help!
              </h3>
              <p className="text-gray-600">Let me know about your project</p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-2xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="New Project Inquiry"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="website">Website Design</option>
                  <option value="webapp">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="branding">Branding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select budget</option>
                  <option value="5k-10k">₹5k - ₹10k</option>
                  <option value="10k-25k">₹10k - ₹25k</option>
                  <option value="25k-50k">₹25k - ₹50k</option>
                  <option value="50k+">₹50k+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">Select timeline</option>
                <option value="urgent">ASAP (Rush job)</option>
                <option value="1-2weeks">1-2 weeks</option>
                <option value="1month">1 month</option>
                <option value="2-3months">2-3 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Details *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project goals, target audience, and any specific requirements..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-800 text-white py-4 rounded-2xl font-medium hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
          <p className="text-gray-600 text-lg mb-6">
            Thank you for reaching out. I'll get back to you within 24 hours to discuss your project in detail.
          </p>
          <button
            onClick={handleResetForm}
            className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            Send Another Message
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
