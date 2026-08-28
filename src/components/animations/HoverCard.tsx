"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export default function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`${className.includes('bg-') ? '' : 'bg-white'} rounded-[32px] border border-border shadow-soft hover:shadow-glow transition-shadow overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
