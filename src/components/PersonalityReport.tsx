"use client";

import { motion } from "framer-motion";
import { Activity, Heart, Star, Coffee, Sparkles, Smile } from "lucide-react";
import clsx from "clsx";

const stats = [
  { label: "Kindness", value: "100%", sub: "Above Average", icon: <Heart className="w-5 h-5" />, color: "text-luxury-primary" },
  { label: "Smile", value: "∞", sub: "Unmeasurable", icon: <Smile className="w-5 h-5" />, color: "text-luxury-purple" },
  { label: "Drama", value: "72%", sub: "Healthy Levels", icon: <Activity className="w-5 h-5" />, color: "text-luxury-primaryLight" },
  { label: "Food Lover", value: "98%", sub: "Critical Priority", icon: <Coffee className="w-5 h-5" />, color: "text-luxury-secondary" },
  { label: "Dream Chaser", value: "100%", sub: "Active", icon: <Star className="w-5 h-5" />, color: "text-luxury-primary" },
  { label: "Sibling Bond", value: "Max", sub: "Permanent", icon: <Sparkles className="w-5 h-5" />, color: "text-luxury-purple" },
];

export default function PersonalityReport() {
  return (
    <section id="analysis" className="py-32 px-6 md:px-12 lg:px-24 bg-white/40">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4 font-medium">
              Volume V &mdash; Metrics
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-foreground">
              Sister <span className="italic text-luxury-primary">Overview</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-muted"
          >
            <span className="w-2 h-2 rounded-full bg-luxury-primary animate-pulse" />
            Live Data
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[24px] p-6 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between h-40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <span className={clsx("p-2 rounded-full bg-foreground/5", stat.color)}>
                  {stat.icon}
                </span>
                <span className="text-3xl font-light text-foreground">{stat.value}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
