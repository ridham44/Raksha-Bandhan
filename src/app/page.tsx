"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromiseCard from "@/components/PromiseCard";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import BucketList from "@/components/BucketList";
import PersonalityReport from "@/components/PersonalityReport";
import GrandFinale from "@/components/GrandFinale";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      
      <div className="relative z-10 flex flex-col gap-12 lg:gap-32">
        <Hero />
        <PromiseCard />
        <Gallery />
        <Timeline />
        <BucketList />
        <PersonalityReport />
        <GrandFinale />
        
        <footer className="pb-16 text-center text-muted text-[10px] tracking-[0.2em] uppercase relative z-20 font-medium">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="w-8 h-[1px] bg-muted/30" />
            <p className="leading-relaxed">
              Made with love <br />
              Happy Raksha Bandhan Kavya <br />
              from Ridhambhai
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
