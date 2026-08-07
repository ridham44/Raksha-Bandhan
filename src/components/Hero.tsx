"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left: Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full relative z-10"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-8 font-medium">
            Volume I &mdash; A Digital Gift
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[110px] font-heading font-light text-foreground leading-[1.1] md:leading-[0.9] tracking-tight mb-6 md:mb-8 break-words">
            Happy <br className="hidden md:block" />
            <span className="italic text-luxury-primary">Raksha Bandhan</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted font-light max-w-[280px] sm:max-w-md leading-relaxed mb-10 md:mb-12">
            A luxury editorial collection of memories and promises for my favourite sister, <span className="font-medium text-foreground">Kavya</span>.
          </p>

          <button className="glass-pill px-8 min-h-[52px] text-[11px] uppercase tracking-widest text-foreground font-medium hover:bg-white/60 active:scale-95 transition-all duration-300">
            Explore Collection
          </button>
        </motion.div>

        {/* Right: Editorial Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-1 w-full relative h-[60vh] md:h-[75vh] group"
        >
          <div className="absolute inset-0 bg-luxury-secondary/20 rounded-[32px] transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
          
          <div className="w-full h-full relative rounded-[32px] overflow-hidden border border-white/50 shadow-2xl glass-panel">
            <Image 
              src="/images/favoutrie selfie .jpeg" 
              alt="Favourite Selfie" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>

          <div className="absolute -left-12 top-24 hidden lg:block">
            <span className="text-[120px] font-handwriting text-luxury-primaryLight/40 drop-shadow-sm -rotate-90 origin-top-left inline-block select-none">
              Kavya
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
