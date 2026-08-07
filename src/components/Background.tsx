"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-background">
      {/* Massive, ultra-soft ambient glow blobs */}
      <motion.div 
        animate={{ x: ['0%', '2%', '0%'], y: ['0%', '-2%', '0%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-30%] left-[-20%] w-[120vw] h-[120vw] rounded-full bg-luxury-secondary/10 blur-[200px]"
      />
      <motion.div 
        animate={{ x: ['0%', '-3%', '0%'], y: ['0%', '3%', '0%'] }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        className="absolute bottom-[-30%] right-[-20%] w-[100vw] h-[100vw] rounded-full bg-luxury-purple/5 blur-[200px]"
      />
      <motion.div 
        animate={{ x: ['0%', '3%', '0%'], y: ['0%', '-1%', '0%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[20%] right-[10%] w-[80vw] h-[80vw] rounded-full bg-luxury-blue/5 blur-[180px]"
      />
    </div>
  );
}
