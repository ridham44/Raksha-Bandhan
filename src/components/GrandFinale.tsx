"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const letterText = `No matter how much we fight,
you will always be my favourite little sister.

Watching you grow has been one of the greatest joys of my life.

I hope every dream you chase becomes reality.

May your smile never fade.
May happiness always find you.

Happy Raksha Bandhan.`;

export default function GrandFinale() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section 
      id="finale" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center py-32 px-6"
    >
      {/* Background Image with Heavy Vignette */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/together 6.jpeg" 
          alt="Us" 
          fill 
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="max-w-3xl w-full relative z-10 flex flex-col items-center text-center">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-widest text-foreground/50 mb-12 font-medium"
        >
          Volume VI &mdash; The Letter
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-heading text-2xl md:text-4xl leading-relaxed whitespace-pre-wrap text-foreground font-light"
        >
          Dear Kavya,
          <br /><br />
          {letterText}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <p className="text-sm tracking-widest text-muted uppercase mb-4">Love Always,</p>
          <p className="font-handwriting text-5xl md:text-6xl text-luxury-primary">Your Brother</p>
        </motion.div>

      </div>
    </section>
  );
}
