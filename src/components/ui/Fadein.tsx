"use client";
import { motion } from "framer-motion";

export const FadeIn = ({ 
  children, 
  delay = 0, 
  className 
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, type: "spring", bounce: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};