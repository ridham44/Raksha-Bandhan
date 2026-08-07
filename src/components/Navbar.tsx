"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { name: "Editorial", href: "#home" },
  { name: "Gallery", href: "#gallery" },
  { name: "Moments", href: "#timeline" },
  { name: "Letter", href: "#finale" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={clsx(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 h-14 px-8 flex items-center justify-between rounded-full",
        scrolled ? "glass-pill border-white/40 shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/70 hover:text-luxury-primary transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
