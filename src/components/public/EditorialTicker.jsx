import { useEffect, useState } from "react";

export default function EditorialIntro() {
  const [animate, setAnimate] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // 🔄 The Changing Text Slides Array
  const introductorySlides = [
    {
      headline: "Feeding the soul on Hanover Street ",
      highlightText: "since 2013.",
      paragraph: "Tani Modi represents a refined era of independent brunch culture in Edinburgh city centre. As a small, family-run café, our platform is built entirely around an uncompromising commitment to genuine hospitality, artisanal craftsmanship, and memorable culinary moments.",
      quote: "“When life gives you lemons, juice them up, plant the seeds and throw the rinds back at life.”"
    },
    {
      headline: "Crafting intentional morning rituals ",
      highlightText: "with precision.",
      paragraph: "We intentionally stepped away from mass-produced combinations to focus on real homemade flavor profiles. From crafting our own seasonal lemon curds to sourcing artisan sourdough, every single detail is curated.",
      quote: "“Hospitality isn't just what we serve, it is entirely how we make you feel.”"
    },
    {
      headline: "A vibrant, light-filled gathering place ",
      highlightText: "for everyone.",
      paragraph: "Our beautifully expanded space brings natural Edinburgh daylight directly to your table. Designed with an open structural grid, it perfectly transitions from busy daytime brunches to bespoke private evening events.",
      quote: "“Sustenance in every single way, shape, and form.”"
    }
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  // 🔄 Automated Text Timer Loop (Rotates slides every 6.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % introductorySlides.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [introductorySlides.length]);

  return (
    <section className="relative w-full py-28 md:py-40 bg-stone-50 overflow-hidden pt-36 min-h-[600px] flex flex-col justify-center">
      
      {/* 🖼️ Subtle Background Photo Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/hero-section-images/tanimodi-3.jpg')"
        }}
      />

      {/* 🌌 Light Micro-Dot Mesh Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(249, 115, 22, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* 🛠️ FIX: Stacking the slides cleanly in a grid to prevent 0px height layout collapse */}
        <div className="grid grid-cols-1 items-start">
          
          {introductorySlides.map((slide, idx) => {
            const isActive = activeSlide === idx;
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start row-start-1 col-start-1 transition-all duration-[1000ms] ease-in-out transform ${
                  isActive && animate
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 translate-y-4 scale-[0.99] pointer-events-none"
                }`}
              >
                
                {/* Left Side Column: Large Serif Headline */}
                <div className="lg:col-span-7">
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light  tracking-tight leading-[1.05]">
                    {slide.headline}
                    <span className="text-orange-500 font-normal block sm:inline">
                      {slide.highlightText}
                    </span>
                  </h1>
                </div>

                {/* Right Side Column: Dynamic Descriptions & Quotes */}
                <div className="lg:col-span-5 lg:pt-4 space-y-6">
                  <div className="w-12 h-[1px] bg-orange-500/60" />
                  <p className="font-sans  text-xl md:text-xl leading-relaxed font-medium">
                    {slide.paragraph}
                  </p>
                  <p className="font-serif italic  text-xl lowercase tracking-wide">
                    {slide.quote}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* 🔘 Dynamic Navigation Indicators Bar */}
        <div className="mt-12 flex items-center space-x-3 relative z-20">
          {introductorySlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                activeSlide === idx ? "w-12 bg-orange-500" : "w-4 bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={`Switch to slide slot ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}