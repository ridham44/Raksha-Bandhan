"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/her pic 3.jpeg", alt: "Solo 1", className: "col-span-12 md:col-span-7 aspect-[4/5] md:aspect-auto md:h-[70vh]" },
  { src: "/images/together3.jpeg", alt: "Together 3", className: "col-span-12 md:col-span-5 aspect-[4/5] md:aspect-auto md:h-[70vh] md:mt-16" },
  { src: "/images/seilfe 4.jpeg", alt: "Selfie 4", className: "col-span-12 md:col-span-4 aspect-square md:aspect-auto md:h-[50vh]" },
  { src: "/images/her pic 6.jpeg", alt: "Solo 6", className: "col-span-12 md:col-span-4 aspect-[3/4] md:aspect-auto md:h-[60vh] md:-mt-12" },
  { src: "/images/together 2.jpeg", alt: "Together 2", className: "col-span-12 md:col-span-4 aspect-square md:aspect-auto md:h-[50vh] md:mt-12" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-5 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4 font-medium">
            Volume II &mdash; Memory Lane
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-light text-foreground break-words">
            A Gallery of <span className="italic text-luxury-primary block sm:inline mt-1 sm:mt-0">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${photo.className} relative group overflow-hidden rounded-[24px] border border-white/50 shadow-sm glass-panel`}
            >
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
