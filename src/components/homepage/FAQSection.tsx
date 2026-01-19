'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQSection() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'code', // Changed icon to represent Services/Code
            question: "What services do you provide?",
            answer: "I build end-to-end digital solutions including full-stack web development, modern UI/UX design, scalable backend architecture, AI/ML integrations, cloud deployment, and performance optimization—delivering production-ready applications using Next.js, TypeScript, Node.js, and Tailwind."
        },
        {
            id: 'item-2',
            icon: 'pen-tool', // Changed icon to represent Design
            question: "Do you handle both design and development?",
            answer: "Yes. I start by designing clean, intuitive interfaces and then transform them into fully functional, high-performance applications. This ensures a seamless workflow and consistent experience from concept to deployment."
        },
        {
            id: 'item-3',
            icon: 'git-branch', // Changed icon to represent Process/Workflow
            question: "What is your working process?",
            answer: "We begin with a strategy call to understand goals and requirements, followed by wireframes and UI/UX design. Once approved, I develop the application, integrate backend and APIs, perform testing, and launch to production with post-deployment support."
        },
        {
            id: 'item-4',
            icon: 'dollar-sign', // Changed icon to represent Cost
            question: "How much does a project cost?",
            answer: "Pricing depends on complexity, features, and timelines. I offer flexible models—fixed-price packages for standard business websites and hourly or milestone-based pricing for advanced platforms. A detailed quote is shared after the discovery call."
        },
        {
            id: 'item-5',
            icon: 'clock', // Kept clock for Time
            question: "How long does it take to build a project?",
            answer: "A standard portfolio or business website typically takes 1–3 weeks. Full-stack applications with dashboards, authentication, and integrations take 4–8 weeks. AI/ML powered systems or large-scale platforms may require longer depending on scope."
        },
        {
            id: 'item-6',
            icon: 'shield-check', // Changed icon to represent Support/Security
            question: "Do you offer support after launch?",
            answer: "Absolutely. I provide ongoing maintenance, performance improvements, feature updates, and technical guidance to ensure your product continues to scale smoothly."
        }
    ]

    return (
        <section className="bg-black py-20 relative w-full overflow-hidden" id="faq">
            {/* Background Gradient for Depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(236,72,153,0.03),transparent)] pointer-events-none" />

            <div className="mx-auto max-w-6xl px-4 md:px-6 relative z-10">
                {/* Increased gap from md:gap-20 to md:gap-24 lg:gap-32 for more space */}
                <div className="flex flex-col gap-10 md:flex-row md:gap-24 lg:gap-32">
                    
                    {/* LEFT SIDE: Sticky Header */}
                    <div className="md:w-1/3">
                        <div className="sticky top-24">
                            {/* Pink Badge */}
                            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-500 uppercase bg-pink-500/10 rounded-full border border-pink-500/20">
                                / Support
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 leading-tight mb-4">
                                Frequently Asked Questions
                            </h2>
                            
                            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                                Can&apos;t find what you&apos;re looking for? Check out our documentation or reach out to our team directly.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-pink-500 font-medium hover:text-pink-400 transition-colors group"
                            >
                                Contact Support 
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Accordion */}
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-4"
                        >
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    // Dark Card Styling
                                    className="bg-neutral-900/50 border border-neutral-800 rounded-xl px-2 overflow-hidden transition-all duration-300 data-[state=open]:border-pink-500/50 data-[state=open]:bg-neutral-900 data-[state=open]:shadow-[0_0_20px_rgba(236,72,153,0.1)]"
                                >
                                    <AccordionTrigger className="cursor-pointer px-4 py-5 hover:no-underline group">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition-colors group-data-[state=open]:bg-pink-500/10 group-data-[state=open]:text-pink-500 text-neutral-400">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="size-5"
                                                />
                                            </div>
                                            <span className="text-base md:text-lg font-medium text-neutral-200 group-hover:text-white group-data-[state=open]:text-white transition-colors">
                                                {item.question}
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5 pt-0 px-4">
                                        <div className="pl-[3.5rem]"> {/* Align text with question, offset by icon width */}
                                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

// "use client"

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Minus, HelpCircle, ArrowUpRight, ArrowRight } from "lucide-react";
// import Link from "next/link";
// import { Badge } from "../ui/badge";

// interface FAQ {
//   question: string;
//   answer: string;
// }

// export default function FAQSection() {
//   const [openFAQ, setOpenFAQ] = useState<number | null>(0);

//   const faqs: FAQ[] = [
//     {
//       question: "What services do you provide?",
//       answer:
//         "I build end-to-end digital solutions including full-stack web development, modern UI/UX design, scalable backend architecture, AI/ML integrations, cloud deployment, and performance optimization—delivering production-ready applications using Next.js, TypeScript, Node.js, and Tailwind."
//     },
//     {
//       question: "Do you handle both design and development?",
//       answer:
//         "Yes. I start by designing clean, intuitive interfaces and then transform them into fully functional, high-performance applications. This ensures a seamless workflow and consistent experience from concept to deployment."
//     },
//     {
//       question: "What is your working process?",
//       answer:
//         "We begin with a strategy call to understand goals and requirements, followed by wireframes and UI/UX design. Once approved, I develop the application, integrate backend and APIs, perform testing, and launch to production with post-deployment support."
//     },
//     {
//       question: "How much does a project cost?",
//       answer:
//         "Pricing depends on complexity, features, and timelines. I offer flexible models—fixed-price packages for standard business websites and hourly or milestone-based pricing for advanced platforms. A detailed quote is shared after the discovery call."
//     },
//     {
//       question: "How long does it take to build a project?",
//       answer:
//         "A standard portfolio or business website typically takes 1–3 weeks. Full-stack applications with dashboards, authentication, and integrations take 4–8 weeks. AI/ML powered systems or large-scale platforms may require longer depending on scope."
//     },
//     {
//       question: "Do you offer support after launch?",
//       answer:
//         "Absolutely. I provide ongoing maintenance, performance improvements, feature updates, and technical guidance to ensure your product continues to scale smoothly."
//     }
//   ];


//   const toggleFAQ = (index: number): void => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   return (
//     // 1. Responsive Padding: py-16 for mobile, py-24 for desktop
//     <section className="py-16 md:py-24 px-4 md:px-6 rounded-[40px] md:rounded-[56px]" style={{ backgroundColor: '#DCE3E8' }}>
//       <div className="max-w-6xl mx-auto">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <div className="flex items-center justify-center gap-2 mb-6">
//             <Badge className="bg-white p-2 text-gray-600 border border-gray-100 shadow-sm rounded-full pr-4 gap-3 hover:bg-white">
//               <motion.div
//                 animate={{ rotate: [0, 10, -10, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center"
//               >
//                 <HelpCircle className="size-4 text-slate-600" />
//               </motion.div>
//               <span className="text-xs font-semibold text-slate-800 tracking-wide">FAQS</span>
//             </Badge>
//           </div>

//           {/* FIXED: Responsive Typography (text-4xl -> text-5xl) */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-sans text-slate-900 mb-4 tracking-tight">
//             Questions? Answers!
//           </h2>
//           <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
//             Find quick answers to the most common questions about the services offered
//           </p>
//         </motion.div>

//         {/* GRID LAYOUT: Stack on mobile (grid-cols-1), Side-by-Side on Desktop */}
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-start">

//           {/* LEFT: Get In Touch Card */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             // Responsive Padding: p-8 for mobile, p-10 for desktop
//             className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center lg:sticky lg:top-10"
//           >
//             <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-100">
//               <HelpCircle className="w-6 h-6 text-slate-700" />
//             </div>

//             <h3 className="text-2xl font-bold text-slate-900 mb-4">
//               Get In Touch Now!
//             </h3>

//             <p className="text-slate-500 mb-8 leading-relaxed text-sm md:text-base">
//               Still have questions? Feel free to get in touch with us today!
//             </p>

//             <Link href="/contact" className="block w-full">
//               <button className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-all font-semibold flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 active:scale-95">
//                 Ask A Question <ArrowUpRight className="w-4 h-4" />
//               </button>
//             </Link>
//           </motion.div>

//           {/* RIGHT: FAQ List */}
//           <div className="space-y-4">
//             {faqs.map((faq: FAQ, index: number) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   // Responsive Padding for Click Area
//                   className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-start justify-between hover:bg-slate-50 transition-colors gap-4"
//                 >
//                   <h3 className="text-base md:text-lg font-sans font-semibold text-slate-800 p-0 leading-snug">
//                     {faq.question}
//                   </h3>
//                   {/* Chevron Icon Handling */}
//                   <div className="flex-shrink-0 mt-0.5">
//                     {openFAQ === index ? (
//                       <Minus className="w-5 h-5 text-slate-400" />
//                     ) : (
//                       <ArrowRight className="w-5 h-5 text-slate-400 -rotate-45" />
//                     )}
//                   </div>
//                 </button>

//                 <AnimatePresence>
//                   {openFAQ === index && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8">
//                         <p className="text-slate-500 font-sans text-sm md:text-base leading-relaxed">
//                           {faq.answer}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }