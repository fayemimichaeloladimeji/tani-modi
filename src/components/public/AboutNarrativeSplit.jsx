import { useEffect, useState, useRef } from "react";

export default function WelcomeAddress({
  tag = "01 // THE HERITAGE",
  title = "An Edinburgh Institution",
  description = "Nestled in the absolute heart of the city centre at 103 Hanover Street, Tani Modi has been a purveyor of tasty brunch, specialty coffee, and exceptional sweet sustenance since 2013.\n\nWhat began as an intimate family-run café has evolved into a verified Edinburgh institution. We don’t simply serve food—Abi and his staff pride themselves on feeding the soul of each and every guest, providing them with sustenance in every way, shape, and form.\n\nOur signature mystique is the reason our community keeps returning again and again. The café’s newly expanded look not only allows for increased seating capacity and plenty of natural light, but also serves as an ideal evening venue for private functions and special tailored events.",
  imageUrl = "",
  imageAlt = "Tani Modi Hanover Street Space",
  alignment = "left",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isLeftAligned = alignment === "left";

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

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-28 md:py-40 bg-gradient-to-br from-stone-100/70 via-stone-50/40 to-white overflow-hidden border-b border-stone-200/40 group/section"
    >
      {/* 🖼️ Subtle Background Overlay Canvas Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-[0.03] scale-105 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1920&q=80')"
        }}
      />

      {/* 🌌 Luxury Micro-Dot Editorial Geometric Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(249, 115, 22, 0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* ================= TEXT TYPOGRAPHY COLUMN ================= */}
          <div 
            className={`lg:col-span-5 ${!isLeftAligned ? "lg:col-start-8" : ""} transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Tag / Category Header Badge */}
            <div className="mb-6 flex items-center space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-orange-500 font-bold">
                {tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.08] text-stone-900 mb-8 tracking-tight">
              {title}
            </h2>

            {/* Separation Rule */}
            <div className="w-12 h-[1px] bg-gradient-to-r from-orange-500/60 to-transparent mb-8" />

            {/* Description Paragraph Stack */}
            <div className="font-sans text-stone-600 text-sm md:text-base leading-relaxed space-y-6 font-medium max-w-lg">
              {description.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="first-letter:font-serif first-letter:text-stone-900">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* ================= LAYERED GRAPHIC FRAMEWORK CANVAS ================= */}
          <div
            className={`lg:col-span-7 ${!isLeftAligned ? "lg:col-start-1 lg:row-start-1" : ""} relative transition-all duration-[1400ms] cubic-bezier(0.16, 1, 0.3, 1) transform ${
              isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.97] translate-y-6"
            }`}
          >
            <div className="relative w-full max-w-[580px] mx-auto lg:mx-0">
              
              {/* Architectural Backdrop Panel Shadow Frame */}
              <div className="absolute -inset-4 bg-stone-200/30 rounded-[32px] -z-10 transform -rotate-1 scale-[0.99] transition-transform duration-1000 group-hover/section:rotate-0 group-hover/section:scale-100 border border-stone-300/20" />

              {/* Outer Core Framework Border Mat */}
              <div className="relative p-4 bg-white/90 backdrop-blur-sm border border-stone-200/80 rounded-[30px] shadow-2xl shadow-stone-900/[0.03] transition-all duration-700 group-hover/section:shadow-orange-500/[0.02]">
                
                {/* Image Mask Frame Holder */}
                <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] w-full bg-stone-100">
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-full object-cover transition-transform duration-[2400ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover/section:scale-105 group-hover/section:rotate-[0.5deg]"
                  />
                  
                  {/* Luxury Warm Blend Grading Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-transparent to-transparent opacity-60 pointer-events-none transition-opacity duration-1000 group-hover/section:opacity-40" />
                  <div className="absolute inset-0 bg-orange-500/[0.02] mix-blend-multiply pointer-events-none" />
                </div>
                
                {/* Glass Geometric Overlay Floating Chip Tag */}
                <div className="absolute bottom-8 right-8 bg-stone-900/95 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 text-white shadow-xl transition-all duration-700 transform translate-y-0 group-hover/section:-translate-y-1 pointer-events-none hidden sm:block">
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] font-black text-orange-400">
                    Established Venue
                  </p>
                  <p className="font-serif italic text-xs text-stone-200 mt-0.5">
                    103 Hanover St.
                  </p>
                </div>

                {/* Micro-Lens Reflection Accent Edge */}
                <div className="absolute inset-0 border border-stone-950/[0.04] rounded-[30px] pointer-events-none" />
              </div>

              {/* Decorative Geometric Index Wireframe */}
              <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-24 border-y border-stone-300/60 hidden lg:block -z-20 pointer-events-none transition-all duration-1000 ${
                isLeftAligned ? "-right-6 border-r" : "-left-6 border-l"
              }`} />

            </div>
          </div>

        </div>
      </div>

      {/* Decorative Fluid Ambient Light Diffusion Gradients (Adding the soft warm glow) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/[0.025] rounded-full blur-[150px] -mr-64 -mt-64 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-500/[0.015] rounded-full blur-[120px] -ml-44 -mb-44 pointer-events-none" />
    </section>
  );
}