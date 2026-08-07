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
    <section id="promise" className="py-24 md:py-32 px-5 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-24">
        
        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground leading-[1.1] mb-4 md:mb-6 text-center md:text-left break-words">
            A Brother&apos;s <span className="italic text-luxury-primary block md:inline mt-2 md:mt-0">Promise</span>
          </h2>
          <p className="text-muted text-base md:text-lg font-light mb-10 md:mb-12 max-w-md text-center md:text-left mx-auto md:mx-0">
            Some things never change. Through every phase of life, these promises remain constant.
          </p>

          <ul className="space-y-4 md:space-y-6">
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
          className="flex-1 w-full relative h-[50vh] md:h-[60vh] lg:h-[80vh] group"
        >
          <div className="absolute inset-0 bg-white rounded-[32px] transform -translate-x-3 -translate-y-3 md:-translate-x-4 md:-translate-y-4 -z-10 border border-white/50 shadow-xl transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-6" />
          
          <div className="w-full h-full relative rounded-[32px] overflow-hidden shadow-2xl glass-panel">
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
