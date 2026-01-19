"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { SocialLinks } from "@/components/contact/social-links";
import { motion } from "framer-motion";
import Link from "next/link";

// --- SOCIAL DATA (Matching your previous request) ---
const socials = [
  {
    name: "LinkedIn",
    image: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    href: "https://www.linkedin.com/in/rudransh-chouksey/",
  },
  {
    name: "Github",
    image: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
    href: "https://github.com/rudranshchouksey",
  },
  {
    name: "Twitter",
    image: "https://cdn-icons-png.flaticon.com/128/5969/5969020.png",
    href: "https://x.com/RudraChouksey",
  },
  {
    name: "Instagram",
    image: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    href: "https://www.instagram.com/rudranshchouksey/",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Web Development",
    "UI/UX Design",
    "Full Stack App",
    "Consulting",
    "Other",
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== service) };
      }
      return { ...prev, services: [...prev.services, service] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          subject: formData.services.join(", ") || "Portfolio Inquiry",
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully! I’ll contact you soon.");
        setFormData({ name: "", email: "", message: "", services: [] });
      } else {
        alert(result.error || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    }

    setIsSubmitting(false);
  };


  return (
    // FIX: Added overflow-x-hidden to prevent horizontal scrollbars
    <section className="min-h-screen bg-black relative overflow-x-hidden flex items-center py-20" id="contact">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* FIX: Wrapped in a container with strict overflow hidden to contain the blur spill */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Purple Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        {/* Bottom Left Pink Glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full translate-y-1/3 -translate-x-1/4" />
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Back to Home Button */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group px-4 py-2 rounded-full border border-transparent hover:border-neutral-800 hover:bg-neutral-900/50"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: Info & Context --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col h-full justify-center"
          >
            <div>
              {/* Pink Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium tracking-wider text-pink-400 uppercase bg-pink-500/10 rounded-full border border-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"/>
                Contact Me
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Let&apos;s build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
                  extraordinary.
                </span>
              </h2>

              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-md mb-12">
                Have a project in mind? Whether it&apos;s a full-stack platform, a stunning branding overhaul, or complex AI integration, let&apos;s talk.
              </p>

              {/* Contact Details Cards */}
              <div className="grid gap-6">
                <a 
                  href="mailto:rudranshchoukey@gmail.com" 
                  className="flex items-center gap-5 p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-pink-500/50 hover:bg-neutral-800/80 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 group-hover:bg-pink-500/10 group-hover:text-pink-500 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Email</p>
                    <p className="text-lg font-medium text-white group-hover:text-pink-200 transition-colors">rudranshchoukey@gmail.com</p>
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a 
                    href="tel:+919630880614" 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-pink-500/50 hover:bg-neutral-800/80 transition-all duration-300 group"
                    >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 group-hover:bg-pink-500/10 group-hover:text-pink-500 transition-colors">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-base font-medium text-white">+91 96308 80614</p>
                    </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700">
                        <MapPin className="w-5 h-5 text-neutral-400" />
                    </div>
                    <div>
                        <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Based in</p>
                        <p className="text-base font-medium text-white">Remote / India</p>
                    </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Social Links Integration */}
            <div className="mt-12 pt-8 border-t border-neutral-900/80">
                <div className="flex justify-start">
                    <SocialLinks socials={socials} />
                </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: The Form --- */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Form Container */}
            <div className="bg-neutral-900/60 border border-neutral-800 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10 overflow-hidden">
                
                {/* Decorative Form Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[60px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <h3 className="text-2xl font-bold text-white mb-2">Send a message</h3>
                <p className="text-neutral-400 mb-8 text-sm">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-1">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all hover:bg-neutral-900"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all hover:bg-neutral-900"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                </div>

                {/* Services Tags */}
                <div className="space-y-3">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-1">Interested in</label>
                    <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                        <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                            formData.services.includes(service)
                            ? "bg-white text-black border-white shadow-lg shadow-white/10"
                            : "bg-neutral-950/30 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                        }`}
                        >
                        {service}
                        </button>
                    ))}
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-1">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell me about your project details..."
                        className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all resize-none hover:bg-neutral-900"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-900/20"
                >
                    {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                    <>
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                    </>
                    )}
                </button>
                </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}