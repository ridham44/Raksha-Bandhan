"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Heart, Star, Phone, Smile, MessageCircle } from "lucide-react";

const promises = [
  { text: "I'll always support you.", icon: <Heart className="w-4 h-4 text-luxury-primary" /> },
  { text: "I'll always protect you.", icon: <Shield className="w-4 h-4 text-luxury-primary" /> },
  { text: "I'll always believe in you.", icon: <Star className="w-4 h-4 text-luxury-primary" /> },
  { text: "I'll always annoy you.", icon: <Smile className="w-4 h-4 text-luxury-primary" /> },
  { text: "I'll always be one call away.", icon: <Phone className="w-4 h-4 text-luxury-primary" /> },
  { text: "I'll always be proud of you.", icon: <MessageCircle className="w-4 h-4 text-luxury-primary" /> },
];

export default function PromiseCard() {
  return (
    <section id="promise" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-16 lg:gap-24">
        
        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground leading-[1.1] mb-6">
            A Brother&apos;s <span className="italic text-luxury-primary">Promise</span>
          </h2>
          <p className="text-muted text-lg font-light mb-12 max-w-md">
            Some things never change. Through every phase of life, these promises remain constant.
          </p>

          <ul className="space-y-6">
            {promises.map((promise, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="flex items-center gap-5 group"
              >
                <div className="bg-white/50 p-3 rounded-full border border-white/60 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md">
                  {promise.icon}
                </div>
                <span className="font-light text-foreground text-lg">{promise.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full relative h-[60vh] md:h-[80vh] group"
        >
          <div className="absolute inset-0 bg-white rounded-[24px] transform -translate-x-4 -translate-y-4 -z-10 border border-white/50 shadow-xl transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-6" />
          
          <div className="w-full h-full relative rounded-[24px] overflow-hidden shadow-2xl glass-panel">
            <Image 
              src="/images/together 1.jpeg" 
              alt="Brother and Sister" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
