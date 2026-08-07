"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Music, Film, Activity, Coffee, Utensils } from "lucide-react";
import clsx from "clsx";

const initialItems = [
  { text: "Dance Garba together this Navratri 💃🕺", icon: <Music className="w-5 h-5" />, done: false },
  { text: "Watch a movie together with popcorn 🍿", icon: <Film className="w-5 h-5" />, done: false },
  { text: "Play tennis together for an evening 🎾", icon: <Activity className="w-5 h-5" />, done: false },
  { text: "Go on an ice cream date 🍦", icon: <Coffee className="w-5 h-5" />, done: false },
  { text: "Try badminton and see who wins 🏸", icon: <Activity className="w-5 h-5" />, done: false },
  { text: "Cook Maggi or pasta together 🍜", icon: <Utensils className="w-5 h-5" />, done: false },
];

export default function BucketList() {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (index: number) => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50); // Haptic feedback on Android (iOS handles haptics differently, but good to have)
    }
    setItems((prev) => 
      prev.map((item, i) => i === index ? { ...item, done: !item.done } : item)
    );
  };

  return (
    <section id="bucket-list" className="py-24 md:py-32 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left: Sticky Header */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-24 md:top-32 text-center lg:text-left">
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3 font-medium">
              Volume IV &mdash; The Future
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-foreground mb-4 md:mb-6">
              The <span className="italic text-luxury-primary">Bucket List</span>
            </h2>
            <p className="text-muted font-light text-base md:text-lg max-w-[280px] mx-auto lg:mx-0">
              A collection of adventures, big and small, waiting to be checked off together.
            </p>
          </div>
        </div>

        {/* Right: Grid of clean travel cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => toggleItem(index)}
              className={clsx(
                "p-5 md:p-6 rounded-[24px] border transition-all duration-300 group flex flex-col justify-between h-40 md:h-48 cursor-pointer active:scale-[0.98]",
                item.done 
                  ? "bg-luxury-pink/20 border-luxury-primary/30 shadow-[0_0_20px_rgba(240,98,146,0.1)]" 
                  : "bg-white border-white shadow-[0_4px_20px_rgba(43,33,53,0.03)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,33,53,0.08)]"
              )}
            >
              <div className="flex items-start justify-between">
                <div className={clsx(
                  "p-3 rounded-full transition-colors duration-500",
                  item.done ? "bg-luxury-primary/10 text-luxury-primary" : "bg-foreground/5 text-foreground/50"
                )}>
                  {item.icon}
                </div>
                
                {/* Status Indicator */}
                <div className={clsx(
                  "w-6 h-6 md:w-7 md:h-7 rounded-full border flex items-center justify-center transition-all duration-300",
                  item.done ? "border-luxury-primary bg-luxury-primary scale-110" : "border-foreground/20 bg-transparent"
                )}>
                  <motion.div
                    initial={false}
                    animate={{ scale: item.done ? 1 : 0, opacity: item.done ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </motion.div>
                </div>
              </div>
              
              <div>
                <p className={clsx(
                  "text-base md:text-lg font-medium tracking-wide transition-all duration-500",
                  item.done ? "text-luxury-primary line-through opacity-70" : "text-foreground"
                )}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
