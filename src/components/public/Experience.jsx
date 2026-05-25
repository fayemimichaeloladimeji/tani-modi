import { useEffect, useState, useRef } from "react";

export default function Experience({
  tag = "03 // THE EXPERIENCE",
  title = "More Than Brunch",
  subtitle = "A Curated Culinary Journey",
  description = "Every visit to Tani Modi is a meticulously designed experience. From the early morning aroma of artisanal roasts to the presentation of our locally sourced signature plates, we craft an atmosphere that fuses contemporary culinary art with the authentic warmth of Scottish hospitality.",
  
  // High-end experiential features
  features = [
    {
      num: "01",
      title: "The Artisanal Kitchen",
      desc: "Plates crafted with pure intention, utilizing premium ingredients sourced directly from Edinburgh's finest local artisans.",
      icon: "✦"
    },
    {
      num: "02",
      title: "The Living Space",
      desc: "An inviting, sun-drenched atmosphere designed to balance contemporary luxury aesthetics with comfortable social energy.",
      icon: "✦"
    },
    {
      num: "03",
      title: "The Warmest Welcome",
      desc: "Attentive, genuine hospitality that welcomes you into our community—making Tani Modi feel like home, every time.",
      icon: "✦"
    }
  ]
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Viewport tracking for premium scroll entrance animations
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
      className="relative w-full py-24 md:py-36 bg-stone-950 overflow-hidden border-t border-white/5"
    >
      {/* Organic Sandstone Backdrop Texture synced with the layout */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-[0.05] pointer-events-none scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1920&q=80')"
        }}
      />

      {/* Atmospheric Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-transparent to-stone-950 pointer-events-none" />
      
      {/* Synchronization Micro-Dot Background Matrix Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(249, 115, 22, 0.2) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10">
        
        {/* Editorial Split Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-20 md:mb-28">
          
          {/* Left Title block */}
          <div className="lg:col-span-7 space-y-4">
            <div className={`inline-block bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-orange-400 font-black">
                {tag}
              </span>
            </div>
            
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              {title}
            </h2>

            <p className="font-serif text-xl md:text-2xl text-orange-400 italic font-medium lowercase tracking-wide">
              {subtitle}
            </p>
          </div>

          {/* Right Narrative Paragraph Context block */}
          <div className="lg:col-span-5">
            <p className="font-sans text-stone-400 text-[20px] md:text-lg leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>

        {/* ================= DYNAMIC GRID INTERACTIVE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const isActive = activeFeature === idx;
            
            return (
              <div
                key={feature.num}
                onMouseEnter={() => setActiveFeature(idx)}
                className={`relative p-8 lg:p-10 bg-stone-900/40 backdrop-blur-xl border rounded-[28px] transition-all duration-500 cursor-pointer group flex flex-col justify-between h-[320px] md:h-[360px] overflow-hidden ${
                  isActive 
                    ? "border-orange-500/50 shadow-[0_25px_60px_rgba(249,115,22,0.1)] -translate-y-2" 
                    : "border-white/5 shadow-2xl hover:border-white/10 hover:-translate-y-1"
                }`}
              >
                {/* Micro-Glow behind active items */}
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent transition-opacity duration-700 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`} />

                {/* Top Interactive Row Header */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="font-serif text-[20px] text-orange-400/40 font-black tracking-widest">
                    {feature.num}
                  </span>
                  <span className={`text-sm transition-all duration-500 ${
                    isActive ? "text-orange-400 rotate-90 scale-125" : "text-stone-600 group-hover:text-stone-400"
                  }`}>
                    {feature.icon}
                  </span>
                </div>

                {/* Core Descriptive Text Stack */}
                <div className="space-y-3 relative z-10">
                  <h3 className={`font-sans text-[32px] md:text-3xl font-black tracking-tight transition-colors duration-500 ${
                    isActive ? "text-white" : "text-stone-200 group-hover:text-white"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="font-sans text-stone-400 text-[15px] md:text-base leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>

                {/* Decorative Bottom Line Track Indicator */}
                <div className="w-full h-[2px] bg-stone-800/60 relative mt-4 overflow-hidden rounded-full">
                  <div className={`absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-700 ${
                    isActive ? "w-full" : "w-0"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep Flow Ambient Light Fields */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
    </section>
  );
}