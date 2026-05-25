import React, { useEffect, useState, useRef } from "react";

const PARTNER_LOGOS = [
  "/our-partners/0001.jpg",
  "/our-partners/0002.jpg",
  "/our-partners/0003.jpg",
  "/our-partners/0004.jpg",
  "/our-partners/kuba.png",
  "/our-partners/zenaag.png",
];

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const partnerLogos = PARTNER_LOGOS;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const loopCount = 4;
  const loopSequence = Array.from({ length: loopCount });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 bg-[#FAF9F6] overflow-hidden border-t border-b border-stone-200/60"
    >
      
      {/* Luxury paper overlay texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80')"
        }}
      />

      {/* Decorative dot matrix grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(#D97706 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-12 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706]/10 text-[20px] font-semibold uppercase tracking-widest text-[#D97706] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
          Tani Modi Partners
        </span>
        <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-[#171513] tracking-tight">
        Our Trusted Partners in Corporate Excellence.
        </h2>
        <div className="w-12 h-0.5 bg-[#D97706]/30 mx-auto mt-4 rounded-full" />
      </div>

      {/* ================= INFINITE CAROUSEL CONTAINER ================= */}
      <div 
        className={`relative w-full flex items-center overflow-hidden py-6 transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Left Guard Soft Gradient Cover */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/85 to-transparent z-20 pointer-events-none" />
        
        {/* Right Guard Soft Gradient Cover */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/85 to-transparent z-20 pointer-events-none" />

        {/* Marquee Ticker Container (scaled up width/height wrappers and wider gap margins) */}
        <div className="flex w-max items-center space-x-16 md:space-x-24 animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {loopSequence.map((_, loopIdx) => (
            <React.Fragment key={loopIdx}>
              {partnerLogos.map((logoUrl, logoIdx) => {
                const cleanPath = String(logoUrl || "");
                const fileName = cleanPath.split("/").pop()?.split(".")[0] || "Partner logo";

                return (
                  <div
                    key={`${loopIdx}-${logoIdx}`}
                    className="flex items-center justify-center h-48 md:h-48 w-56 md:w-72 transition-all duration-300 transform scale-95 hover:scale-105 group/logo"
                    title={fileName}
                  >
                    <img
                      src={logoUrl}
                      alt={`${fileName} partner logo`}
                      className="max-h-full max-w-full object-contain filter  group-hover/logo:grayscale-0 transition-all duration-500 transform-gpu"
                    />
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-25%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
          will-change: transform;
        }
      `}</style>

    </section>
  );
}