import type { Metadata } from "next";
import dynamic from "next/dynamic";

// 1. Add Metadata (Only works in Server Components)
export const metadata: Metadata = {
  title: "Contact | Rudransh Chouksey",
  description: "Get in touch regarding projects, collaborations, or freelance work.",
};

// 2. Lazy Load the Contact Section
// This separates the form logic from the initial page load, improving 'Time to Interactive'.
const ContactSection = dynamic(() => import("@/components/contact"), {
  // Simple skeleton loader to improve perceived speed
  loading: () => (
    <div className="w-full min-h-screen bg-black flex items-center justify-center">
      <div className="h-12 w-12 rounded-full border-t-2 border-r-2 border-neutral-700 animate-spin" />
    </div>
  ),
});

// 3. Server Component (No "use client" here)
export default function ContactPage() {
  return (
    // 'main' tag is better for semantic HTML/Accessibility
    <main className="bg-black min-h-screen selection:bg-pink-500/30">
      <ContactSection />
    </main>
  );
}