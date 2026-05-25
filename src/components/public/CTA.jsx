import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // High-end curated background images for the carousel crossfade
  const carouselImages = [
    "/hero-section-images/background-10.webp", // Signature Sandstone Plaster
    "/hero-section-images/background-12.webp", // Artisanal Culinary Close-up
  ];

  // Viewport tracking for section entrance animation
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

  // Background Carousel Timing Controller
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Transitions to a new image every 5 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Load TableSense modal embedder once for the iframe button
  useEffect(() => {
    if (document.querySelector('script[data-tablesense-embedder]')) return;
    const script = document.createElement('script');
    script.src = 'https://booking.tablesense.com/assets/modal-embedder.js';
    script.defer = true;
    script.setAttribute('data-tablesense-embedder', 'true');
    document.body.appendChild(script);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-28 md:py-36 bg-stone-900 overflow-hidden border-t border-white/10"
    >
      
      {/* 🌟 Dynamic Carousel Background Layers */}
      {carouselImages.map((image, idx) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center will-change-transform scale-105 transition-opacity duration-[1500ms] ease-in-out pointer-events-none z-0"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: currentBgIndex === idx ? 0.28 : 0.12,
          }}
        />
      ))}

      {/* Atmospheric Radial Darkening Shading Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/10 via-stone-900/35 to-stone-900 pointer-events-none" />

      {/* Pattern Matrix Synchronization Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(249, 115, 22, 0.2) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Dynamic Card Container with Scale/Fade Entrance Animation */}
        <div 
          className={`relative p-12 md:p-20 bg-stone-950/50 backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden group transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-98"
          }`}
        >
          {/* Internal ambient glowing flare behind content on card hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white drop-shadow-sm">
              Ready to Experience Tani Modi?
            </h2>
            <p className="font-serif text-base md:text-lg text-orange-400 italic tracking-wide lowercase font-medium">
              Reserve your table and discover refined brunch culture in Edinburgh.
            </p>
            
            {/* Action Targets */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <div className="flex items-center justify-center rounded-full overflow-hidden">
                <iframe
                  src="https://booking.tablesense.com/organisation/5452b709-9e79-4344-836c-607fe8429e55/business/345601b2-cee8-42e2-b871-107f567991a1/venue/76cdb9ad-7df6-494f-b7be-99718b225952/launcher?noContext=true"
                  title="Book Now"
                  allowtransparency="true"
                  className="block"
                  style={{ width: 260, height: 54, border: 'none' }}
                />
              </div>
              <a
                href="/menus"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/10 hover:border-orange-500/40 text-stone-300 hover:text-white rounded-full font-sans text-xs uppercase tracking-[0.25em] font-black bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                View Full Menus
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Diffusion Orbs matching the Footer configuration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-500/[0.06] rounded-full blur-[130px] pointer-events-none -z-10" />
    </section>
  );
}