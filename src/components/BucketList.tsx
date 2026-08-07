"use client";

import { motion } from "framer-motion";
import { Check, Music, Film, Activity, Coffee, Utensils } from "lucide-react";
import clsx from "clsx";

const items = [
  { text: "Dance Garba together this Navratri 💃🕺", icon: <Music className="w-5 h-5" />, done: false },
  { text: "Watch a movie together with popcorn 🍿", icon: <Film className="w-5 h-5" />, done: false },
  { text: "Play tennis together for an evening 🎾", icon: <Activity className="w-5 h-5" />, done: false },
  { text: "Go on an ice cream date 🍦", icon: <Coffee className="w-5 h-5" />, done: false },
  { text: "Try badminton and see who wins 🏸", icon: <Activity className="w-5 h-5" />, done: false },
  { text: "Cook Maggi or pasta together 🍜", icon: <Utensils className="w-5 h-5" />, done: false },
];

export default function BucketList() {
  return (
    <section id="bucket-list" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Sticky Header */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32">
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4 font-medium">
              Volume IV &mdash; The Future
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-foreground mb-6">
              The <span className="italic text-luxury-primary">Bucket List</span>
            </h2>
            <p className="text-muted font-light text-lg">
              A collection of adventures, big and small, waiting to be checked off together.
            </p>
          </div>
        </div>

        {/* Right: Grid of clean travel cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={clsx(
                "p-6 rounded-[24px] border transition-all duration-500 group flex flex-col justify-between h-48",
                item.done 
                  ? "bg-white/40 border-white/60 shadow-sm" 
                  : "bg-white border-white shadow-[0_4px_20px_rgba(43,33,53,0.03)] hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(43,33,53,0.08)]"
              )}
            >
              <div className="flex items-start justify-between">
                <div className={clsx(
                  "p-3 rounded-full",
                  item.done ? "bg-luxury-primary/10 text-luxury-primary" : "bg-foreground/5 text-foreground/50"
                )}>
                  {item.icon}
                </div>
                
                {/* Status Indicator */}
                <div className={clsx(
                  "w-6 h-6 rounded-full border flex items-center justify-center",
                  item.done ? "border-luxury-primary bg-luxury-primary" : "border-foreground/20"
                )}>
                  {item.done && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>
              
              <div>
                <p className={clsx(
                  "text-lg font-medium tracking-wide",
                  item.done ? "text-foreground/50 line-through" : "text-foreground"
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
