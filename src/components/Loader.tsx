"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFFDFD] text-foreground ${!isVisible && 'pointer-events-none'}`}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-luxury-rosequartz/20 blur-xl rounded-full" />
        <Sparkles className="w-10 h-10 text-luxury-dusty relative z-10" strokeWidth={1} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="text-[10px] uppercase tracking-[0.4em] font-medium text-foreground/40"
      >
        Preparing something special
      </motion.div>
    </motion.div>
  );
}
