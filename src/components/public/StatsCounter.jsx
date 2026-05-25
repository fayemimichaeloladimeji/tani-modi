import React, { useState, useEffect, useRef } from "react";
import { Users, Sparkles, Award, Coffee, ArrowUpRight } from "lucide-react";

// A reusable micro-component to animate stats values cleanly on load
function CountUpValue({ endValue, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quad animation function for a premium decelerating count-up effect
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * endValue));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [endValue, duration]);

  return (
    <span ref={elementRef} className="tabular-nums font-black tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const [activeCard, setActiveCard] = useState(null);

  // Real-world metric parameters corresponding to Tani Modi & Farin Road's credentials
  const statsData = [
    {
      id: "clients",
      value: 85000,
      suffix: "+",
      label: "Guests Welcomed",
      description: "Coffee lovers, pancake enthusiasts, and fine diners served in our cozy space.",
      icon: Users,
      highlight: "A vibrant Hanover Street community."
    },
    {
      id: "experience",
      value: 13,
      suffix: " Yrs",
      label: "Culinary Heritage",
      description: "Providing premium independent daytime brunch experiences in Edinburgh since 2013.",
      icon: Award,
      highlight: "Seamless day-to-night transitions."
    },
    {
      id: "pancakes",
      value: 120000,
      suffix: "+",
      label: "Gluten-Free Pancakes",
      description: "Hand-flipped fluffy masterpieces crafted with our proprietary coeliac-safe blend.",
      icon: Coffee,
      highlight: "Edinburgh's gold-standard stack."
    },
    {
      id: "residencies",
      value: 3500,
      suffix: "+",
      label: "Farin Road Masterpieces",
      description: "Contemporary Pan-African tasting menus curated by Chef Tunde Abifarin.",
      icon: Sparkles,
      highlight: "Modern African culinary stories."
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#171513] text-[#FAF9F6] py-24 md:py-32 font-sans border-t border-stone-900">
      
      {/* 🌟 Prominent, High-Quality Pancake Stack Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none pancake-zoom"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=1920&q=80')"
        }}
      />

      {/* Dark gradient masks for beautiful, flawless text readability over the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171513]/90 via-[#171513]/40 to-[#171513]/90 pointer-events-none" />

      {/* Structured Micro-Dot Synchronization Matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(243, 133, 6, 0.19) 1.2px, transparent 5.2px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 text-xs font-semibold uppercase tracking-widest text-[#D97706] mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Our Legacy in Numbers
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Handcrafting exceptional memories, <span className="text-[#D97706] italic">one plate</span> at a time.
          </h2>
          <p className="mt-6 text-stone-300 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            From the crackle of morning coffee grinders to candlelit dinners presenting contemporary Sub-Saharan profiles, our achievements live in each plate served.
          </p>
        </div>

        {/* Stats Grid Layout with glassmorphism to blend with the pancake background */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {statsData.map((stat) => {
            const IconComponent = stat.icon;
            const isHovered = activeCard === stat.id;

            return (
              <div
                key={stat.id}
                onMouseEnter={() => setActiveCard(stat.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative group flex flex-col justify-between rounded-[32px] border transition-all duration-500 p-8 cursor-default overflow-hidden ${
                  isHovered
                    ? "bg-[#1F1D1B]/95 border-[#D97706]/40 -translate-y-2 shadow-2xl shadow-[#D97706]/15 backdrop-blur-md"
                    : "bg-white/[0.04] border-white/10 backdrop-blur-sm shadow-lg shadow-black/20 hover:border-white/25"
                }`}
              >
                {/* Visual Backdrop Spotlight for Hover State */}
                <div 
                  className={`absolute -right-16 -bottom-16 w-40 h-40 rounded-full blur-[60px] pointer-events-none transition-all duration-500 ${
                    isHovered ? "bg-[#D97706]/20" : "bg-transparent"
                  }`} 
                />

                {/* Card Top Tier */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div 
                      className={`rounded-2xl p-3.5 transition-all duration-500 ${
                        isHovered 
                          ? "bg-[#D97706]/20 text-[#D97706]" 
                          : "bg-white/5 text-stone-400"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <ArrowUpRight 
                      className={`w-5 h-5 transition-all duration-500 ${
                        isHovered ? "text-[#D97706] translate-x-0.5 -translate-y-0.5" : "text-stone-500"
                      }`} 
                    />
                  </div>

                  {/* Quantitative Counter Display */}
                  <div className="font-serif text-4xl sm:text-5xl tracking-tight mb-3 text-white">
                    <CountUpValue endValue={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className={`text-xs uppercase tracking-[0.2em] font-bold mb-4 transition-colors ${
                    isHovered ? "text-[#D97706]" : "text-stone-400"
                  }`}>
                    {stat.label}
                  </h3>
                  
                  <p 
                    className={`text-sm leading-relaxed font-light transition-all duration-500 ${
                      isHovered ? "text-stone-100" : "text-stone-100"
                    }`}
                  >
                    {stat.description}
                  </p>
                </div>

                {/* Card Bottom Micro-Highlight Accent */}
                <div 
                  className={`mt-8 pt-5 border-t transition-all duration-500 ${
                    isHovered ? "border-white/10 text-[#D97706]" : "border-white/5 text-stone-500"
                  } text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 relative z-10`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isHovered ? "bg-[#D97706] animate-pulse" : "bg-stone-600"}`} />
                  {stat.highlight}
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <style>{`
        @keyframes pancakeZoom {
          from { transform: scale(1.0); }
          to { transform: scale(1.10); }
        }
        .pancake-zoom {
          transform-origin: center;
          animation: pancakeZoom 5s ease-in-out infinite alternate;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}