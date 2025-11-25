import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import ContactForm from "@/components/page/ContactForm";

// Server Component - Great for SEO and performance
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100" style={{ backgroundColor: '#eff2f5' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Static Header - Server Rendered */}
        <div className="mb-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Ready to bring your vision to life? I'd love to hear about your project and discuss 
            how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Static Contact Options - Server Rendered */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Email Me</h3>
                  <p className="text-gray-600">Get in touch via email</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Feel free to email me if you have any questions or need more details!
              </p>
              <a 
                href="mailto:rudranshchouksey@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-medium underline text-lg"
              >
                rudranshchouksey@gmail.com
              </a>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-3xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Prefer to Call?</h3>
                  <p className="text-gray-600">Let's have a conversation</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Feel free to book a call if that's more convenient and easier for you
              </p>
              <a 
                href="tel:+919876543210"
                className="text-green-600 hover:text-green-700 font-medium underline text-lg"
              >
                +91 96308 80614
              </a>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-3xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Visit Me</h3>
                  <p className="text-gray-600">Located in India</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Based in the vibrant city of Indore, India. Available for local meetings and consultations.
              </p>
              <p className="text-purple-600 font-medium text-lg">
                Indore, Madhya Pradesh, India
              </p>
            </div>
          </div>

          {/* Interactive Contact Form - Client Component */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

// SEO Metadata - Only works in Server Components
export const metadata = {
  title: "Contact | Rudransh Chouksey",
  description: "Get in touch with Rudransh Chouksey for your next web development project. Based in Mumbai, India.",
  keywords: "contact, web developer, Mumbai, India, portfolio",
};
