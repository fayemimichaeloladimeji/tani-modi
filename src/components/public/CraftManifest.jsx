import React, { useEffect, useState, useRef } from "react";
import { Sparkles, Leaf, Coffee, Users, Flame, Calendar, ArrowUpRight } from "lucide-react";

export default function CraftManifest() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      idx: "01",
      title: "Exceptional Service",
      description: "Our dedicated team provides attentive, intuitive service, ensuring every guest feels deeply valued and fully at home in our Hanover Street basement space.",
      icon: Sparkles
    },
    {
      idx: "02",
      title: "Sourced with Care",
      description: "We partner directly with exceptional local artisans and foragers. From Scottish farmlands to sub-Saharan spices, every single ingredient tells a true culinary story.",
      icon: Leaf
    },
    {
      idx: "03",
      title: "Cozy Dining Craft",
      description: "We curate experiences that exceed expectations, surrounding our guests with warm candlelight, custom soundscapes, and handcrafted plates.",
      icon: Coffee
    },
    {
      idx: "04",
      title: "Family-Led Heart",
      description: "As an independent, family-run business, our priorities are personal. We lead with authenticity and an absolute devotion to warm hospitality.",
      icon: Users
    },
    {
      idx: "05",
      title: "Coeliac Safety & Innovation",
      description: "Uncompromising menu design. We specialize in innovative, safe gluten-free and allergy-friendly creations, ensuring no diner ever compromises on depth of flavor.",
      icon: Flame
    },
    {
      idx: "06",
      title: "Weekend Residencies",
      description: "By night, we break typical boundaries. Our intimate Hanover Street venue hosts evening supper clubs and modern fine dining takeovers by Chef Tunde.",
      icon: Calendar
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-24 md:py-36 bg-[#171513] text-[#FAF9F6] overflow-hidden border-b border-stone-900 group/manifest"
    >
      {/* 🌟 Premium Culinary Background Image (Moody Gourmet Setup) */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-[0.18] pointer-events-none scale-105 transition-transform duration-[2000ms]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      
      {/* Secondary abstract texture blending overlay to smooth out image contrasts */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80')"
        }}
      />

      {/* Dark gradient mask overlays to ensure complete text readability */}
      <div className="absolute inset-0  pointer-events-none" />
      <div className="absolute inset-0  pointer-events-none" />

      {/* Synchronization Micro-Dot Grid Layer */}
      <div
        className="absolute inset-0 pointer-events-none "
        style={{
          backgroundImage: "radial-gradient(rgba(217, 119, 6, 0.15) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10">
        
        {/* Header - Editorial Split Layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end mb-16 md:mb-24 transition-all duration-[1200ms] ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 text-xs font-semibold uppercase tracking-widest text-[#D97706] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse" />
              Our Foundations
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FAF9F6] tracking-tight leading-none">
              The Craft Manifest
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="font-sans text-stone-400 text-lg md:text-[20px] font-light leading-relaxed">
              Our foundational framework is built around an uncompromising commitment to craft, safe culinary inclusion, and memorable hospitality. This is our promise.
            </p>
          </div>
        </div>

        {/* 3-Column Architectural Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-20">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.idx}
                className={`relative p-8 md:p-10 bg-[#1F1D1B]/95 backdrop-blur-sm border border-stone-800/80 rounded-[32px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group/item hover:border-[#D97706]/40 hover:bg-[#2A2724] hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1.5 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Premium Top Border Hover Expansion Accent */}
                <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#D97706] to-transparent scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500 origin-center rounded-full" />

                {/* Card Meta Row */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-xl text-[#D97706] font-bold tracking-widest bg-[#D97706]/5 border border-[#D97706]/10 rounded-lg px-2.5 py-1">
                    PILLAR // {pillar.idx}
                  </span>
                  
                  {/* Decorative Icon Wrapper */}
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500 group-hover/item:border-[#D97706]/30 group-hover/item:bg-[#D97706]/10 group-hover/item:text-[#D97706] transition-all duration-500">
                    <IconComponent className="w-4 h-4 transition-transform group-hover/item:scale-110" />
                  </div>
                </div>

                {/* Content Typography Stack */}
                <div className="space-y-4">
                  <h3 className="font-sans text-lg font-black uppercase tracking-wider text-[#FAF9F6] group-hover/item:text-[#D97706] transition-colors duration-300 flex items-center gap-1.5">
                    {pillar.title}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-300 text-[#D97706]" />
                  </h3>
                  <p className="font-sans text-stone-400 text-xl sm:text-xl leading-relaxed font-light transition-colors duration-300 group-hover/item:text-stone-300">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Decorative Fluid Ambient Light Diffusion Gradients */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D97706]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-[#D97706]/[0.04] rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
}