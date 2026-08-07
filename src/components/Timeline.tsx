"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

const moments = [
  {
    title: "Birthdays Together",
    desc: "Every year, a new memory added to the collection.",
    src: "/images/her birthday.jpeg",
  },
  {
    title: "Flying Kites",
    desc: "Reaching for the skies, just like you always do.",
    src: "/images/flyingkite.jpeg",
  },
  {
    title: "Random Selfies",
    desc: "Because a day without a picture is a day wasted.",
    src: "/images/selife 1.jpeg",
  },
  {
    title: "Just Us",
    desc: "The sibling dynamic that nobody else understands.",
    src: "/images/together7.jpeg",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 px-5 md:px-12 lg:px-24 bg-white/30 backdrop-blur-3xl border-y border-white/40">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4 font-medium">
            Volume III &mdash; Chapters
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-foreground">
            Favourite <span className="italic text-luxury-primary">Moments</span>
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {moments.map((moment, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={clsx("flex flex-col md:flex-row items-center gap-10 lg:gap-20", !isEven && "md:flex-row-reverse")}>
                
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 w-full relative aspect-[4/5] md:aspect-auto md:h-[50vh] group"
                >
                  <div className="w-full h-full relative rounded-[24px] overflow-hidden shadow-lg border border-white/50">
                    <Image 
                      src={moment.src} 
                      alt={moment.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 w-full text-center md:text-left relative px-4 md:px-0 mt-4 md:mt-0"
                >
                  <span className="text-luxury-primary/60 font-serif text-5xl sm:text-6xl md:text-8xl absolute opacity-10 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-[-1.5rem] -translate-y-12 select-none">0{i + 1}</span>
                  <h3 className="text-3xl md:text-4xl font-heading font-light text-foreground mb-3 md:mb-4 relative z-10 break-words">{moment.title}</h3>
                  <p className="text-muted font-light text-base md:text-lg max-w-[280px] md:max-w-none mx-auto md:mx-0">{moment.desc}</p>
                </motion.div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
